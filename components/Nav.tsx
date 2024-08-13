"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
export default function Nav() {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.path}
          className={`${
            link.path === pathName && "text-accent !border-accent"
          } capitalize font-medium border-b-2 border-transparent
           hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
