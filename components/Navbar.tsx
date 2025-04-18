"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { NavBarSidebar } from "@/app/(home)/navbar-sidebar";
import {  MenuIcon } from "lucide-react";

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

const navBarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "about" },

  { href: "/features", children: "features" },
  { href: "/pricing", children: "pricing" },
  { href: "/contact", children: "contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <nav
      className="h-20 flex border-b 
    justify-between font-medium bg-white"
    >
      <Link className="pl-6 flex items-center" href={"/"}>
        <span className={cn("text-5xl font-bold")}>Coolaf</span>
      </Link>
      <NavBarSidebar  open ={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
        items={navBarItems}
      />
      <div className="items-center gap-4 hidden lg:flex">
        {navBarItems.map((item) => (
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

      <div className="flex lg:hidden items-center justify-center">
        <Button variant={"ghost"}
         className="size-12 border-transparent bg-white"
         onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon/>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
