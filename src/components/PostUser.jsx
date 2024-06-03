import { getUser } from "@/lib/data";
import Image from "next/image";

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);
  return (
    <div className=" flex gap-5">
      <div className=" h-12 w-12 relative">
        <Image
          className="  rounded-full "
          src={user?.img ? user.img : "/ob2.jpg"}
          alt="post image"
          objectFit="cover"
          fill
        />
      </div>
      <div className="flex flex-col gap-2">
        <span>author</span>
        <span>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
