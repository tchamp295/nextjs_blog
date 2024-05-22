import Link from "next/link";
import Links from "./links/Links";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();
  // console.log(session)
  return (
    <div className=" bg-green-500 ">
      <div className="max-w-7xl mx-auto   flex justify-between h-[12vh]  text-neutralDGray items-center ">
        <Link href={"/"}>Tchamp</Link>
        <div className="">
          <Links session={session} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
