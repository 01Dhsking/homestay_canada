"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "./button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { User } from "next-auth";

interface HeaderProps {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } | null | undefined;
}

function Header({ user }: HeaderProps) {
  const pathname = usePathname();

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
              <Link href="/profile">
                <div className="flex flex-row items-center space-x-2 py-2 px-5 border border-gray-300 rounded-2xl">
                  <Avatar>
                    <AvatarImage src={user.image || "https://github.com/shadcn.png"} />
                    <AvatarFallback>{user.name?.[0] || "U"}</AvatarFallback>
                  </Avatar>
                  <p>{user.name || "Profile"}</p>
                </div>
              </Link>
              <Button variant="outline" size="sm" onClick={() => signOut()}>
                Se déconnecter
              </Button>
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
            <div className="flex flex-col space-y-4 mt-6 text-center">
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
                <Button variant="outline" size="sm" className="w-full">
                  Se connecter
                </Button>
                <Button size="sm" className="w-full">
                  Essayez Premium
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Header;
