import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface NavBarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavBarItem = ({ href, children, isActive }: NavBarItemProps) => {
  return <Button></Button>;
};

const Navbar = () => {
  return (
    <nav
      className="h-20 flex border-b 
    justify-between font-medium bg-white"
    >
      <Link className="pl-6 flex items-center" href={"/"}>
        <span className={cn("text-5xl font-bold")}>Coolaf</span>
      </Link>
    </nav>
  );
};

export default Navbar;
