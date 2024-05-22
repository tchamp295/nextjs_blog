"use server";
import { deletePost } from "@/lib/action";
import { getPosts } from "@/lib/data";
import Image from "next/image";

const AdminPosts = async () => {
  const posts = await getPosts();
  // const deletePostWithId = (id ) => {
  //   return deletePost.bind(null, id);
  // };
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className="" key={post.id}>
          <div className="">
            <Image
              src={post.img || ""}
              alt={post.desc}
              width={50}
              height={50}
            />
            <span>{post.title}</span>
          </div>
          <form action={deletePost}>
          {/* <form action={() => deletePostWithId(post.id)}> */}
            <input type="hidden" name="id" value={post.id} />
            <button>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
