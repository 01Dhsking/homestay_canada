"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "./button";
import { Menu } from "lucide-react";
import { CardFooter } from "./card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  LogOut,
  UserPen,
} from "lucide-react";

interface HeaderProps {
  user?:
    | {
        name?: string | null;
        email?: string | null;
        image?: string | null;
      }
    | undefined;
}

function UserMenu({ user }: { user: HeaderProps["user"] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex flex-row items-center space-x-2 py-2 px-5 border border-gray-300 rounded-2xl">
          <Avatar>
            <AvatarImage src={user?.image || ""} />
            <AvatarFallback>{user?.name?.[0] || "U"}</AvatarFallback>
          </Avatar>
          <p>{user?.name || "Profile"}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        side="bottom"
        align="end"
        sideOffset={4}
      >
        <Link href="/profile">
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="text-blue-600 flex gap-2 items-center font-semibold text-[15px] py-2 pl-[7px] hover:cursor-pointer hover:scale-[1.02] transition-transform hover:opacity-80">
              <UserPen color="gray" size={20} />
              <p>Voir le profile</p>
            </div>
          </DropdownMenuLabel>
        </Link>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => signOut()}>
          <div className="text-red-500 flex gap-2 items-center justify-center font-semibold text-[15px] hover:cursor-pointer hover:scale-[1.02] transition-transform hover:opacity-80">
            <LogOut />
            Se déconnecter
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Header({ user }: HeaderProps) {
  const pathname = usePathname();

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isLoggedIn", user ? "true" : "false");
    }
  }, [user]);

  return (
    <header className="border-b">
      <div className="container mx-auto py-3 sm:py-4 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-lg sm:text-xl font-bold text-blue-600">
              HomeStay CA
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname === "/"
                      ? "p-4 bg-blue-600 rounded-2xl text-white"
                      : "text-gray-600"
                  }`}
                >
                  Accueil
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/type" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname === "/type"
                      ? "p-4 bg-blue-600 rounded-2xl text-white"
                      : "text-gray-600"
                  }`}
                >
                  Nos maisons
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname === "/about"
                      ? "p-4 bg-blue-600 rounded-2xl text-white"
                      : "text-gray-600"
                  }`}
                >
                  À propos de nous
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname === "/contact"
                      ? "p-4 bg-blue-600 rounded-2xl text-white"
                      : "text-gray-600"
                  }`}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-3">
          {user ? (
            <div className="flex space-x-3">
              <UserMenu user={user} />
            </div>
          ) : (
            <Link href="/login">
              <Button variant="outline" size="sm">
                Se connecter
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-6">
              <Link
                href="/"
                className={`${
                  pathname === "/"
                    ? "p-2 bg-blue-600 rounded-2xl text-white"
                    : "text-gray-600"
                } text-sm `}
              >
                Accueil
              </Link>
              <Link
                href="/type"
                className={`${
                  pathname === "/type"
                    ? "p-2 bg-blue-600 rounded-2xl text-white"
                    : "text-gray-600"
                } text-sm `}
              >
                Nos maisons
              </Link>
              <Link
                href="/about"
                className={`${
                  pathname === "/about"
                    ? "p-2 bg-blue-600 rounded-2xl text-white"
                    : "text-gray-600"
                } text-sm `}
              >
                À propos de nous
              </Link>
              <Link
                href="/contact"
                className={`${
                  pathname === "/contact"
                    ? "p-2 bg-blue-600 rounded-2xl text-white"
                    : "text-gray-600"
                } text-sm `}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                {user ? (
                  <UserMenu user={user} />
                ) : (
                  <Link href="/login">
                    <Button variant="outline" size="sm" className="w-full">
                      Se connecter
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <CardFooter className="container mx-auto">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
            </BreadcrumbItem>
            {pathname !== "/" && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {pathname === "/type" && "Nos maisons"}
                    {pathname === "/type/shortterme" && "court terme"}
                    {pathname === "/type/longterme" && "long terme"}
                    {pathname === "/about" && "À propos de nous"}
                    {pathname === "/contact" && "Contact"}
                    {pathname === "/login" && "Se connecter"}
                    {pathname === "/profile" && "Profile"}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </CardFooter>
    </header>
  );
}

export default Header;
