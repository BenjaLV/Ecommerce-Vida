"use client";


import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

import { titleFont } from "@/config/fonts";
import { useUIStore } from '@/store/ui-store';


const TopMenu = () => {

  const openSideMenu = useUIStore((state) => state.openSideMenu);


  return (
    <nav className="flex px-5 justify-between items-center w-full bg-cream">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            +Vida
          </span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/men"
        >
          Sobre Nosotros
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/women"
        >
          Panificados
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/kid"
        >
          Plantas
        </Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link href='/' className="mx-2">
          <div className="relative">

            <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-orange-300 text-white">
              3
            </span>

            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          onClick={openSideMenu}
          className="m-2 p-2 rounded-md transition-all text-[#4CAF50] hover:bg-gray-100"
        >
          Menú
        </button>
      </div>
    </nav>
  );
};


export default TopMenu;