"use client";
import Image from "next/image";
import cross from "/public/cross.png";
import cross2 from "/public/cross2.png";
import downArrow from "/public/down-arrow.png";
import search from "/public/search.png";
import search1 from "/public/search1.png";
import burger from "/public/burger.png";
import account from "/public/account.png";
import cart from "/public/cart.png";
import Link from "next/link";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

 

  return (
    <div className="sticky top-0 z-50">
      {/* Top Div */}
      <div className="px-10 md:px-16 h-[30px] bg-black flex w-full justify-between text-white items-center">
        <div className="flex sm:gap-3 gap-1 justify-center w-full">
          <p className="sm:text-sm text-xs">Sign up and get 20% off to your first order</p>
          <button className="underline hover:text-slate-200 text-xs sm:text-sm">Sign Up Now</button>
        </div>
        <Image src={cross} alt="Close" className="h-[20px] w-[20px] sm:scale-100 scale-75 cursor-pointer" />
      </div>

      {/* Bottom Div */}
      <div className="h-[65px] px-10 md:px-16 flex items-center bg-white">
        <div className="h-[62px] flex justify-between items-center w-full">
          {/* Logo Div */}
          <div className="flex gap-3 items-center">
            <div className="h-[20px] w-[20px] flex items-center justify-center">
            <Image
              onClick={toggleMenu}
              src={menuOpen ? cross2: burger}
              alt="Burger Menu"
              className="sm:hidden block cursor-pointer "
              />
              </div>

          
            <Link href="/" className="font-extrabold text-2xl sm:text-3xl  sm:hidden lg:block">
              AmirShop.co
            </Link>
          </div>

          {/* Toggle Menu */}
          <div
            className={`absolute left-0 top-20 w-[50%] h-[85vh] bg-slate-200 rounded-r-lg shadow-lg shadow-white transition-all duration-1000 ease-in-out ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <ul className="flex gap-10 flex-col items-center py-10 text-xl">
              <Link href="/" className="flex gap-2 items-center">
                <span>Shop</span> <Image src={downArrow} alt="Arrow" className="fill-white" />
              </Link>
              <Link href="/products" className="">On Sale</Link>
              <Link href="/casual">New Arrivals</Link>
              <Link href="/cart">Brands</Link>
            </ul>
          </div>

          {/* Desktop Navigation */}
          <div>
            <ul className="sm:flex gap-3 hidden items-center sm:text-xs lg:text-sm">
              <Link href="/" className="flex">
                <span>Shop</span> <Image src={downArrow} alt="Arrow"></Image>
              </Link>
              <Link href="/products">On Sale</Link>
              <Link href="/casual">New Arrivals</Link>
              <Link href="/cart">Brands</Link>
            </ul>
          </div>

          {/* Search Div */}
          <div className="flex lg:w-[45%] w-[25%] relative items-center">
            <Image
              src={search}
              alt="Search Icon"
              className="absolute lg:left-3 left-1 lg:scale-100 scale-75 cursor-pointer lg:hover:scale-105 sm:block hidden"
            />
            <input
              type="text"
              className="bg-[#F0F0F0] w-full py-2 rounded-full lg:px-12 px-8 sm:block hidden outline-none text-xs"
              placeholder="Search for Products"
            />
          </div>

          {/* Cart Div */}
          <div className="flex gap-3">
            <Image src={search1} alt="Search Icon" className="cursor-pointer hover:scale-105"></Image>

            <Link href={"/cart"}> <Image src={cart} alt="Cart" className="cursor-pointer" /></Link>
            <Link href={"/products"}> 

            <Image src={account} alt="Account"></Image>

            </Link>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}
