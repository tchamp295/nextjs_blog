"use client";
import NavLink from "./navLink/NavLink";
import { useEffect, useState } from "react";
import { handleLogout } from "@/lib/action";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  const isAdmin = true;

  return (
    <div className="">
      <div className="hidden flex space-x-10    md:block">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className="p-1 rounded-lg cursor-pointer bg-slate-400">
                Logout
              </button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login " }} />
        )}
      </div>
      <button className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
        Menu
      </button>
      {open && (
        <div
          className="  md:hidden absolute right-0 w-1/2 bg-green-500"
          style={{ height: "calc(100vh - 12vh)" }}
        >
          <div className="h-full flex flex-col items-center justify-center  ">
            {links.map((link) => (
              <NavLink item={link} key={link.title} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Links;
