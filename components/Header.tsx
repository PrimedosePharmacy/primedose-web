import Link from "next/link";
import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-min-full sticky top-0 h-[70px] bg-blue-500/90 backdrop-blur-sm">
      <div className="flex items-center md:container md:mx-auto px-6">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold cursor-pointer hover:text-green-700 transition-colors duration-300">
            PrimeDose
          </h1>
        </div>
        <div className="flex-1 text-right">
          <nav role="navigation">
            <Link href="/">
              <a className="active">Home</a>
            </Link>
            <Link href="/about">
              <a className="">About</a>
            </Link>
            <Link href="/users">
              <a>Users List</a>
            </Link>
            <Link href="/api/users">Users API</Link>
          </nav>
        </div>
        <div className="flex-0.5">
          <Link href={{ pathname: "https://skinoriginals.in" }} passHref>
            <a target="_blank">
              <Button variant="success">SkinOriginals</Button>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
