// Header.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = (props: { links: { href: string; label: string; }[] }) => {
  
  const pathname = usePathname();

  return (
    <div>
      <nav className="flex justify-between pt-4 absolute top-1 w-full">
        <ul className="flex space-x-8">
          {props.links.map((link) => (
            <li
              key={link.href}
              className={
                (
                  link.label === "Detail"
                    ? pathname === link.href
                    : pathname.startsWith(link.href)
                )
                  ? ""
                  : "opacity-50"
              }
            >
              <Link href={link.href} className="text-lg">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;