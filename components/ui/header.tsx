import React from "react";
import Link from "next/link";
import { Button } from "./button";

function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-xl font-bold text-blue-600">HomeStay CA</h1>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-sm hover:text-blue-600">
            Home
          </Link>
          <Link href="/type" className="text-sm hover:text-blue-600">
            Our Hourses
          </Link>
          <Link href="/about" className="text-sm hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="text-sm hover:text-blue-600">
            Contact
          </Link>
        </nav>

        <div className="flex space-x-3">
          <Button variant="outline" size="sm">
            Sign in
          </Button>
          <Button size="sm">Try Premium</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
