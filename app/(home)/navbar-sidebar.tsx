import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavBarItem {
    href: string, 
    children: React.ReactNode;
}

interface Props  {
    items: NavBarItem[];
    open: boolean;
    onOpenChange: (open: boolean) => void
  }
  
  export const NavBarSidebar = ({ items, open, onOpenChange }: Props ) => {
    return (
      <Sheet
        open={open}
        onOpenChange={onOpenChange}
      >
        <SheetContent side="left" className="p-0 transition-none">
            <SheetHeader className="p-4 border-b">
                <div className="flex items-center">
                    <SheetTitle>
                        Menu
                    </SheetTitle>
                </div>
            </SheetHeader>
            <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                {items.map((item) => (
                    <Link
                    onClick={() => onOpenChange(false)}
                    href={item.href}
                        key={item.href}
                        className="w-full text-left p-4 hover:bg-black hover:text-white
                        flex items-center text-base font-medium"
                        
                    >
                        {item.children}
                    </Link>
                ))}
                <div className="border-t">
                    <Link 
                    className="w-full text-left p-4 hover:bg-black hover:text-white
                        flex items-center text-base font-medium"
                    href={'/sign-in'}>
                        Log in
                    </Link>
                    <Link
                    className="w-full text-left p-4 hover:bg-black hover:text-white
                        flex items-center text-base font-medium"
                    href={'/sign-up'}>
                        Start selling
                    </Link>
                </div>
            </ScrollArea>
        </SheetContent>
      </Sheet>
    );
  };