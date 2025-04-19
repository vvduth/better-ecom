"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Category } from "@/payload-types";
import React, { useRef, useState } from "react";
import useDropDownPosition from "./useDropDownPosition";
import SubcategoryMenu from "./SubcategoryMenu";
import { Customcategory } from "../types";

interface Props {
  category: Customcategory;
  isActive?: boolean;

  isNavigationHovered?: boolean;
}
const CategoryDropDown = ({
  category,
  isActive,
  isNavigationHovered,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownref = useRef<HTMLDivElement>(null);
  const {getDropDownPosition} = useDropDownPosition(dropDownref)
const dropdownPosition = getDropDownPosition()
  const onMouseEnter = () => {
    if (category.subcategories) {
      setIsOpen(true);
    }
  };

  const onMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      ref={dropDownref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative">
        <Button
          className={cn(
            `h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-sky-500
      hover:border-primary hover:text-white text-black`,
            isActive && !isNavigationHovered && "bg-white border-primary",
            isOpen && "bg-white border-primary"
          )}
        >
          {category.name}
        </Button>
        {category.subcategories && category.subcategories.length > 0 && (
            <div
             className={cn(`opacity-0 absolute -bottom-3 
                w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px]  border-l-transparent border-r-transparent border-b-black
                left-1/2 -translate-x-1/2`,
            isOpen && "opacity-100")}
            ></div>
        )}
      </div>
      <SubcategoryMenu
       category = {category}
       isOpen={isOpen}
       position={dropdownPosition}
      />
    </div>
  );
};

export default CategoryDropDown;
