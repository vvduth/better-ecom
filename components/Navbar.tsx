"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

interface NavBarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavBarItem = ({ href, children, isActive }: NavBarItemProps) => {
  return (
    <Button
      asChild
      variant={"outline"}
      className={cn(
        "bg-transparent rounded-full hover:border-primary px-3 text-left",
        isActive && "bg-black text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navBarItem = [
  { href: "/", children: "Home" },
  { href: "/about", children: "about" },

  { href: "/features", children: "features" },
  { href: "/pricing", children: "pricing" },
  { href: "/contact", children: "contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav
      className="h-20 flex border-b 
    justify-between font-medium bg-white"
    >
      <Link className="pl-6 flex items-center" href={"/"}>
        <span className={cn("text-5xl font-bold")}>Coolaf</span>
      </Link>
      <div className="items-center gap-4 hidden lg:flex">
        {navBarItem.map((item) => (
          <NavBarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavBarItem>
        ))}
      </div>
      <div className="hidden lg:flex">
        <Button
          asChild
          variant={"secondary"}
          className="border-l border-t-0 border-b-0 border-r-0 
        px-12 h-full rounded-none bg-white hover:bg-sky-400
        transition-colors hover:text-white text-lg"
        >
          <Link href={"/sign-in"}>Log in</Link>
        </Button>
        <Button
          asChild
          variant={"secondary"}
          className="border-l border-t-0 border-b-0 border-r-0 
         px-12 h-full rounded-none bg-white hover:bg-sky-400
         transition-colors hover:text-white text-lg"
        >
          <Link href={"/sign-up"}>Log in</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
