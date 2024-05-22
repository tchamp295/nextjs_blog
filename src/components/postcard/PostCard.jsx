import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className=" flex flex-col gap-5 mb-5 p-5 bg-slate-100">
      {post.img && (
        <div className="w-full h-[200px] relative">
          <Image src={post.img} layout="fill" alt="blog " />
        </div>
      )}

      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">{post.title}</h1>
        <span className="text-sm ">01.01.2024</span>
      </div>

      <p>{post.body}</p>
      <Link href={`/blog/${post.slug}`}>read more</Link>
    </div>
  );
};

export default PostCard;
