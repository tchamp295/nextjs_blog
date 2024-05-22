
import PostCard from "@/components/postcard/PostCard";
import { getPosts } from "@/lib/data";
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (!res.ok) {
//     throw new Error("Error fetching");
//   }
//   return res.json();
// };
const BlogPage = async () => {
  // const posts = await getData();
  const posts = await getPosts();
  return (
    <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogPage;
