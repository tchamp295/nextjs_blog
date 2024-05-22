"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      key={item.title}
      className={`${pathname === item.path ? " text-blue-500" : ""}`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
