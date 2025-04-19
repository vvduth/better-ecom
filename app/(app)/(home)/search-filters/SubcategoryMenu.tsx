import { Category } from "@/payload-types";
import Link from "next/link";
import React from "react";

interface Props {
  category: any;
  isOpen: boolean;
  position: { top: number; left: number };
}
const SubcategoryMenu = ({ category, isOpen, position }: Props) => {
  if (
    !isOpen ||
    !category.subcategories ||
    category.subcategories.length === 0
  ) {
    return null;
  }

  const bgColor = category.color || "#f5f5f5";
  return (
    <>
      <div
        className="fixed z-100 "
        style={{
          top: position.top,
          left: position.left,
        }}
      >
        {/* invisble brigde to maintain hover */}
        <div className="h-3 w-60"/>
        <div 
            style={{
                backgroundColor: bgColor
            }}
        className="w-60 text-black rounded-md overflow-hidden border
        shadow-[4px_4px_0px_0px_black] -translate-x-[2px] -translate-y-[2px]">
            <div>
                {category.subcategories.map((sub: Category) => (
                    <Link
                    key={sub.slug}
                        href={'/'}
                         className="w-full text-left p-4 hover:bg-black hover:text-white 
                         flex justify-between items-center underline font-medium"
                    >
                        {sub.name}
                    </Link>
                ))}
            </div>
        </div>
      </div>
    </>
  );
};

export default SubcategoryMenu;
