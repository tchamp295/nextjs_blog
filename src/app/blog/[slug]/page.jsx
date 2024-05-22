import { getPost } from "@/lib/data";
import Image from "next/image";
import { Suspense } from "react";
export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};
const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return (
    <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-3">
      {post.img && (
        <div className="  h-[400px] relative">
          <Image src={post.img} alt="post image" fill />
        </div>
      )}
      <div className=" flex flex-col  gap-12">
        <h1>{post.title}</h1>
        <div className="flex gap-12 ">
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className="flex flex-col gap-2">
            <span>published</span>
            <span>date</span>
          </div>
        </div>
        <div className="">{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
