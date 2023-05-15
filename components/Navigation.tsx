import React from "react";
import Logo from "./svg/Logo";

export default function Navigation() {
  return (
    <nav className=" p-5 backdrop-blur-md fixed w-[642px] top-0 left-0 z-10 font-headline text-white">
      <div className="flex items-center w-full">
        <Logo />
        <div className="w-full pl-10">
          <ul className="flex w-full justify-around border-b-[1px] border-[#583922] pb-3 ">
            <li>Home</li>
            <li>Some</li>
            <li>Navigation</li>
            <li>Link</li>
            <li>Content</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}