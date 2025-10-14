"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

import { navLinks } from "./Navbar";

export function NavigationMenuDemo() {
  const pathname = usePathname();

  return (
    <NavigationMenu className={`hidden lg:flex navigation-menu`} delayDuration={0}>
      <NavigationMenuList>
        {navLinks.map(({ href, title }, index) => {
          const activeLink =
            (href === "/" && pathname === "/") || (href !== "/" && pathname.startsWith(href));
          return (
            <NavigationMenuItem key={index}>
              <Link href={href} >
                <div
                  className={cn(
                    // navigationMenuTriggerStyle(),
                    'text-white px-6 py-3',
                    // activeLink ? "text-gray-300 focus:text-success" : ""
                  ) }
                >
                  {title}
                </div>
              </Link>
            </NavigationMenuItem>
          );
        })}

        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Modules</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-1 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
              {dropdownLinksModules.map((component, index) => (
                <ListItem key={index} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}

      </NavigationMenuList>
    </NavigationMenu>
  );
}

// const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
//   ({ className, title, children, ...props }, ref) => {
//     return (
//       <li>
//         <NavigationMenuLink asChild>
//           <a
//             ref={ref}
//             className={cn(
//               "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//               className
//             )}
//             {...props}
//           >
//             <div className="text-sm font-medium leading-none">{title}</div>
//             <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
//           </a>
//         </NavigationMenuLink>
//       </li>
//     );
//   }
// );

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, href = "", ...props }, ref) => {
    const pathname = usePathname();

    const activeLink = (href === "/" && pathname === "/") || (href !== "/" && pathname.startsWith(href));

    return (
      <li>
        <Link ref={ref} href={href} {...props} >
            <div
              className={cn(
                "group select-none space-y-1 cursor-pointer rounded-md p-3 leading-none transition-colors",
                className,
                // activeLink ? "text-primary focus:text-primary" : ""
              )}
            >
              <div
                className={` text-sm leading-none ${
                  children
                    ? "font-medium text-gray-800 group-hover:text-primary"
                    : "font-normal text-gray-600 group-hover:text-primary"
                }`}
              >
                {title}
              </div>
              {children && (
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-primary">
                  {children}
                </p>
              )}
            </div>
        </Link>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

// ==========================================================================

// import {
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuGroup,
//   DropdownMenuSub,
//   DropdownMenuSubTrigger,
//   DropdownMenuPortal,
//   DropdownMenuSubContent,
// } from "@/components/ui/dropdown-menu";

// import { DropdownMenuDemo, ModeToggle, ButtonDemo, SheetDemo, AccordionDemo } from "@/components/index.js";
// import { Mail, UserPlus, Users, ChevronDown, Menu } from "lucide-react";
// import { Button } from "../ui/button";

// export function NavigationMenuDemo() {
//   const pathname = usePathname();
//   return (
//     <ul className=" gap-2 items-center hidden md:flex">
//       {navLinks.map((item) => {
//         const activeLink =
//           (item.href === "/" && pathname === "/") || (item.href !== "/" && pathname.startsWith(item.href));
//         return (
//           <li key={item.title} className="">
//             <Link
//               href={item.href}
//               className={`py-2 px-4 hover:bg-slate-100 rounded-md ${activeLink ? "text-green-700" : ""}`}
//             >
//               {item.title}
//             </Link>
//           </li>
//         );
//       })}
//       <DropdownMenuDemo
//         defaultItems={[]}
//         trigger={
//           <Button variant="ghost" className="font-normal text-[16px]">
//             Modules
//             <ChevronDown />
//           </Button>
//         }
//       >
//         {dropdownLinksModules.map((item, index) => {
//           const activeLink = pathname.startsWith(item.href);
//           return (
//             <DropdownMenuItem key={index} asChild className="cursor-pointer">
//               <Link href={item.href} className={`flex w-[100%] ${activeLink ? "text-green-700" : ""}`}>
//                 {item.title}
//               </Link>
//             </DropdownMenuItem>
//           );
//         })}

//         <DropdownMenuSeparator />

//         <DropdownMenuSub>
//           <DropdownMenuSubTrigger>
//             <UserPlus />
//             <span>Submenu Trigger</span>
//           </DropdownMenuSubTrigger>
//           <DropdownMenuPortal>
//             <DropdownMenuSubContent>
//               <DropdownMenuItem>
//                 <Mail />
//                 <span>Subitem 1</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Users />
//                 <span>Subitem 2</span>
//               </DropdownMenuItem>
//             </DropdownMenuSubContent>
//           </DropdownMenuPortal>
//         </DropdownMenuSub>

//         <DropdownMenuSeparator />

//         <DropdownMenuGroup>
//           <DropdownMenuItem>Static link 1</DropdownMenuItem>
//           <DropdownMenuItem disabled>Static link 2</DropdownMenuItem>
//         </DropdownMenuGroup>
//       </DropdownMenuDemo>
//     </ul>
//   );
// }
