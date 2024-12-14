"use client";
import Image from "next/image";
import rightarrow from "/public/rightarrow.png";
import cart1 from "/public/cart1.png";
import uparrow from "/public/up.png";
import downarrow from "/public/down-arrow.png";
import Link from "next/link";
import shirt7 from "/public/shirt7.png";
import shirt8 from "/public/shirt8.png";
import shirt9 from "/public/shirt9.png";
import starf from "/public/starf.png";
import starh from "/public/starh.png";
import shirt2 from "/public/shirt2.png";
import shirt3 from "/public/shirt3.png";
import pant from "/public/pant.png";
import shirt4 from "/public/shirt4.png";
import shirt5 from "/public/shirt5.png";
import pent1 from "/public/pent1.png";
import leftarrow from "/public/left-arrow.png";
import rightarrow2 from "/public/right-arrow.png";
import cross from "/public/cross2.png";
import { useState } from "react";

export default function Casual() {
  const [cart, setcart] = useState("hidden");
  const [details, setDetails] = useState("block");

  function openCart() {
    setcart("block");
    setDetails("hidden");
  }

  function closeCart() {
    setcart("hidden");
    setDetails("block");
  }

  return (
    <div>
      {/* routes link */}
      <div className="mx-10 md:mx-16 flex items-center gap-3 py-8 border-t-2 border-slate-200">
        <Link href={"/"}>Home</Link>
        <p>
          <Image src={rightarrow} alt="Right Arrow" />
        </p>
        <p>Casual</p>
      </div>

      {/* main div */}

      <div className="md:px-16 flex gap-6 ">
        {/* left div */}
        <div
          className={`md:w-1/4 md:block ${cart} w-full rounded-xl bg-slate-100 px-10`}
        >
          {/* filter div */}
          <div className="flex justify-between items-center py-3">
            <p className="font-bold text-2xl">Filter</p>
            <Image
              src={cart1}
              alt="Cart"
              className="md:block hidden cursor-pointer"
            />
            <Image
              onClick={closeCart}
              src={cross}
              alt="Cart"
              className="md:hidden block cursor-pointer"
            />
          </div>

          {/* links div */}
          <div className="border-y-2 border-slate-200 space-y-3 pt-3 pb-3">
            <div className="flex justify-between items-center cursor-pointer">
              <p>T-Shirts</p>
              <Image src={rightarrow} alt="Right Arrow" />
            </div>

            <div className="flex justify-between items-center cursor-pointer">
              <p>Shorts</p>
              <Image src={rightarrow} alt="Right Arrow" />
            </div>

            <div className="flex justify-between items-center cursor-pointer">
              <p>Shirts</p>
              <Image src={rightarrow} alt="Right Arrow" />
            </div>

            <div className="flex justify-between items-center cursor-pointer">
              <p>Hoodie</p>
              <Image src={rightarrow} alt="Right Arrow" />
            </div>

            <div className="flex justify-between items-center cursor-pointer">
              <p>Jeans</p>
              <Image src={rightarrow} alt="Right Arrow" />
            </div>
          </div>

          {/* price div */}
          <div className="flex justify-between items-center py-3 border-b-2 border-slate-200  my-3">
            <div className="w-full max-w-xs mx-auto">
              <div className="flex justify-between items-center py-3">
                <p className="font-bold text-2xl">Price</p>
                <Image src={uparrow} alt="Cart" />
              </div>

              <div className="relative flex justify-between items-center mt-4">
                {/* Track */}
                <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-200 rounded-lg -translate-y-1/2"></div>

                {/* Active range (highlighted) */}
                <div
                  className="absolute top-1/2 h-2 bg-black rounded-lg -translate-y-1/2"
                  style={{ left: "25%", right: "25%" }}
                ></div>

                {/* Slider thumbs */}
                <div className="absolute w-4 h-4 bg-black rounded-full top-1/2 -translate-y-1/2 left-1/4 cursor-pointer"></div>
                <div className="absolute w-4 h-4 bg-black rounded-full top-1/2 -translate-y-1/2 right-1/4 cursor-pointer"></div>
              </div>

              {/* Price Labels */}
              <div className="flex justify-between text-sm mt-2 text-gray-600">
                <span>$50</span>
                <span>$200</span>
              </div>
            </div>
          </div>

          {/* color div */}
          <div className="border-b-2 border-slate-200 py-6 my-3">
            <div className="flex justify-between items-center py-3">
              <p className="font-bold text-2xl">Color</p>
              <Image src={uparrow} alt="Cart" />
            </div>

            <div className="flex flex-col gap-3">
              {/* five colors div */}
              <div className="flex items-center gap-2 justify-around">
                <div className="h-[30px] w-[30px] bg-[#00C12B] rounded-full cursor-pointer"></div>

                <div className="h-[30px] w-[30px] bg-[#F50606] rounded-full cursor-pointer"></div>

                <div className="h-[30px] w-[30px] bg-[#F5DD06] rounded-full cursor-pointer"></div>

                <div className="h-[30px] w-[30px] bg-[#F57906] rounded-full cursor-pointer"></div>

                <div className="h-[30px] w-[30px] bg-[#06CAF5] rounded-full cursor-pointer"></div>
              </div>

              {/* five colors div 2*/}
              <div className="flex items-center gap-2 justify-around">
                <div className=" h-[35px] w-[35px] bg-[#063AF5] rounded-full cursor-pointer border-2 border-slate-100"></div>

                <div className="h-[35px] w-[35px] bg-[#7D06F5] rounded-full cursor-pointer border-2 border-slate-100"></div>

                <div className="h-[35px] w-[35px] bg-[#F506A4] rounded-full cursor-pointer border-2 border-slate-100"></div>

                <div className="h-[35px] w-[35px] bg-[#FFFFFF] rounded-full cursor-pointer border-2 border-slate-200"></div>

                <div className="h-[35px] w-[35px] bg-[#000000] rounded-full cursor-pointer border-2 border-slate-100"></div>
              </div>
            </div>
          </div>

          {/* size div */}
          <div className="py-3">
            <div className="flex justify-between items-center py-3">
              <p className="font-bold text-2xl">Size</p>
              <Image src={uparrow} alt="Right Arrow" />
            </div>

            <div className="space-y-3">
              <div className="flex gap-5 items-center">
                <p className="bg-slate-200 p-3 rounded-full cursor-pointer text-sm lg:text-base">
                  XX-Small
                </p>
                <p className="bg-slate-200 p-3 rounded-full cursor-pointer text-sm lg:text-base">
                  X-Small
                </p>
              </div>

              <div className="flex gap-5">
                <p className="bg-slate-200 p-3 rounded-full cursor-pointer text-sm lg:text-base">
                  Small
                </p>
                <p className="bg-slate-200 p-3 rounded-full cursor-pointer text-sm lg:text-base">
                  Medium
                </p>
              </div>

              <div className="flex gap-5">
                <p className="bg-slate-200 p-3 rounded-full cursor-pointer text-sm lg:text-base">
                  Large
                </p>
                <p className="bg-slate-200 p-3 rounded-full cursor-pointer text-sm lg:text-base">
                  X-Large
                </p>
              </div>

              <div className="flex gap-5">
                <p className="bg-slate-200 p-3 rounded-full cursor-pointer text-sm lg:text-base">
                  XX-Large
                </p>
                <p className="bg-slate-200 p-3 rounded-full cursor-pointer text-sm lg:text-base">
                  3X-Large
                </p>
              </div>

              <div className="flex gap-5">
                <p className="bg-slate-200 p-3 rounded-full cursor-pointer text-sm lg:text-base">
                  4X-Large
                </p>
              </div>
            </div>
          </div>

          {/* dress style div */}

          <div className="border-t-2 border-slate-200 py-3">
            <div className="flex justify-between items-center py-3">
              <p className="font-bold text-2xl">Dress Style</p>
              <Image src={uparrow} alt="Right Arrow" />
            </div>

            {/* links div */}
            <div className="space-y-3">
              <div className="flex justify-between items-center cursor-pointer">
                <p>Casual</p>
                <Image src={rightarrow} alt="Right Arrow" />
              </div>

              <div className="flex justify-between items-center cursor-pointer">
                <p>Formal</p>
                <Image src={rightarrow} alt="Right Arrow" />
              </div>

              <div className="flex justify-between items-center cursor-pointer">
                <p>Shirts</p>
                <Image src={rightarrow} alt="Right Arrow" />
              </div>

              <div className="flex justify-between items-center cursor-pointer">
                <p>Party</p>
                <Image src={rightarrow} alt="Right Arrow" />
              </div>

              <div className="flex justify-between items-center cursor-pointer">
                <p>Gym</p>
                <Image src={rightarrow} alt="Right Arrow" />
              </div>
            </div>
          </div>

          {/* filter button */}
          <div className="flex justify-center items-center py-3 border-t-2 border-slate-200">
            <button className="bg-slate-900 hover:bg-slate-950 w-3/4 py-3 text-white rounded-full mx-3">
              Apply Filter
            </button>
          </div>
        </div>

        {/* right div */}
        <div className={`w-full ${details} md:px-0 px-10`}>
          {/* top div */}
          <div className="flex justify-between items-center py-5">
            <p className="font-bold text-2xl">Casual</p>

            <div className="flex lg:gap-6 gap-3">
              <p className="lg:text-sm md:text-xs text-slate-500">
                Showing 1-10 of 100 Products
              </p>

              <div className="md:flex gap-1 hidden">
                <p>Sort By:</p>
                <div className="flex gap-1 cursor-pointer items-center">
                  <p className="font-bold text-sm">Most Popular</p>
                  <Image src={downarrow} alt="Down Arrow" />
                </div>
              </div>

              <div className="flex gap-2 md:hidden pl-5">
                <Image
                  onClick={openCart}
                  src={cart1}
                  alt="Down Arrow"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* main details div */}
          <div className="space-y-14 py-5">
            {/* 1st div */}
            <div className="flex justify-between items-center gap-3">
              {/* shirt 7 */}
              <Link href={"/products"} className="space-y-3 cursor-pointer">
                <Image
                  src={shirt7}
                  alt="Image"
                  className="h-[250px] w-[250px]"
                />

                <p className="font-bold md:text-base text-xs">
                  Gradient Graphic T-shirt
                </p>

                <div className="flex gap-3 items-center">
                  <div className="flex">
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                  </div>
                  <p className="text-sm">4.0/5</p>
                </div>

                <div className="flex gap-3 items-center">
                  <p className="font-bold">$145</p>
                </div>
              </Link>

              {/* shirt 8 */}
              <Link href={"/products"} className="space-y-3 cursor-pointer">
                <Image
                  src={shirt8}
                  alt="Image"
                  className="h-[250px] w-[250px]"
                />

                <p className="font-bold md:text-base text-xs capitalize">
                  Polo with Tipping Details
                </p>

                <div className="flex gap-3 items-center">
                  <div className="flex">
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                  </div>
                  <p className="text-sm">3.0/5</p>
                </div>

                <p className="font-bold">$80</p>
              </Link>

              {/* shirt 9 */}
              <Link
                href={"/products"}
                className="space-y-3 cursor-pointer hidden md:block"
              >
                <Image
                  src={shirt9}
                  alt="Image"
                  className="h-[250px] w-[250px]"
                />

                <p className="font-bold md:text-base text-xs capitalize">
                  Black Striped T-shirt
                </p>

                <div className="flex gap-3 items-center">
                  <div className="flex">
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starh}
                      alt="Image"
                      className="w-[12.49px] h-[18.49px]"
                    />
                  </div>
                  <p className="text-sm">4.5/5</p>
                </div>

                <div className="flex gap-3 items-center">
                  <p className="font-bold">$210</p>
                </div>
              </Link>
            </div>

            {/* 2nd div */}
            <div className="flex justify-between items-center gap-3">
              {/* pant */}
              <Link href={"/products"} className="space-y-3 cursor-pointer">
                <Image src={pant} alt="Image" className="h-[250px] w-[250px]" />

                <p className="font-bold md:text-base text-xs capitalize">
                  SKINNY FIT JEANS
                </p>

                <div className="flex gap-3 items-center">
                  <div className="flex">
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starh}
                      alt="Image"
                      className="w-[12.49px] h-[18.49px]"
                    />
                  </div>
                  <p>3.5/5</p>
                </div>

                <div className="flex gap-3 items-center">
                  <p className="font-bold">$240</p>
                  <p className="text-[#00000066] line-through">$260</p>
                  <p className="text-[#FF3333] bg-[#FF33331A] px-2 text-sm">
                    -20%
                  </p>
                </div>
              </Link>

              {/* shirt2 */}
              <Link href={"/products"} className="space-y-3 cursor-pointer">
                <Image
                  src={shirt2}
                  alt="Image"
                  className="h-[250px] w-[250px]"
                />

                <p className="font-bold md:text-base text-xs capitalize">
                  CHECKERED SHIRT
                </p>

                <div className="flex gap-3 items-center">
                  <div className="flex">
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starh}
                      alt="Image"
                      className="w-[12.49px] h-[18.49px]"
                    />
                  </div>
                  <p>4.5/5</p>
                </div>

                <p className="font-bold">$180</p>
              </Link>

              {/* shirt3 */}
              <Link
                href={"/products"}
                className="space-y-3 cursor-pointer hidden md:block"
              >
                <Image
                  src={shirt3}
                  alt="Image"
                  className="h-[250px] w-[250px]"
                />

                <p className="font-bold md:text-base text-xs capitalize">
                  SLEEVE STRIPED T-SHIRT
                </p>

                <div className="flex gap-3 items-center">
                  <div className="flex">
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starh}
                      alt="Image"
                      className="w-[12.49px] h-[18.49px]"
                    />
                  </div>
                  <p>4.5/5</p>
                </div>

                <div className="flex gap-3 items-center">
                  <p className="font-bold">$130</p>
                  <p className="text-[#00000066] line-through">$160</p>
                  <p className="text-[#FF3333] bg-[#FF33331A] px-2 text-sm">
                    -30%
                  </p>
                </div>
              </Link>
            </div>

            {/* 3rd div */}
            <div className="flex  justify-between items-center gap-3">
              {/* shirt 4 */}
              <Link href={"/products"} className="space-y-3 cursor-pointer">
                <Image
                  src={shirt4}
                  alt="Image"
                  className="h-[250px] w-[250px]"
                />

                <p className="font-bold md:text-base text-xs capitalize">
                  VERTICAL STRIPED SHIRT
                </p>

                <div className="flex gap-3 items-center">
                  <div className="flex">
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                  </div>
                  <p className="text-sm">5.0/5</p>
                </div>

                <div className="flex gap-3 items-center font-bold">
                  <p className="font-bold">$212</p>
                  <p className="text-[#00000066] line-through">$232</p>
                  <p className="text-[#FF3333] bg-[#FF33331A] px-2 text-sm">
                    -20%
                  </p>
                </div>
              </Link>

              {/* shirt 5 */}
              <Link href={"/products"} className="space-y-3 cursor-pointer">
                <Image
                  src={shirt5}
                  alt="Image"
                  className="h-[250px] w-[250px]"
                />

                <p className="font-bold md:text-base text-xs capitalize">
                  COURAGE GRAPHIC T-SHIRT
                </p>

                <div className="flex gap-3 items-center">
                  <div className="flex">
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                  </div>
                  <p className="text-sm">4.0/5</p>
                </div>

                <div className="flex gap-3 items-center">
                  <p className="font-bold">$145</p>
                </div>
              </Link>

              {/* pent1 */}
              <Link
                href={"/products"}
                className="space-y-3 cursor-pointer hidden md:block"
              >
                <Image
                  src={pent1}
                  alt="Image"
                  className="h-[250px] w-[250px]"
                />

                <p className="font-bold md:text-base text-xs capitalize">
                  Loose Fit Bermuda shorts
                </p>

                <div className="flex gap-3 items-center">
                  <div className="flex">
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                    <Image
                      src={starf}
                      alt="Image"
                      className="w-[18.49px] h-[18.49px]"
                    />
                  </div>
                  <p className="text-sm">3.0/5</p>
                </div>

                <p className="font-bold">$80</p>
              </Link>
            </div>
          </div>

          {/* last div */}
          <div className="flex w-full justify-between items-center py-6">
            {/* pervious */}
            <div className="flex items-center gap-2 text-sm cursor-pointer">
              <Image src={leftarrow} alt="Left Arrow" className="scale-75" />
              <p className="font-bold">Pervious</p>
            </div>

            {/* middle div */}
            <div className="flex items-center gap-3">
              <div className="flex gap-3">
                <p className="bg-slate-200 px-3 py-2 rounded-lg cursor-pointer text-slate-600">
                  1
                </p>
                <p className="px-3 py-2 rounded-lg cursor-pointer text-slate-600">
                  2
                </p>
                <p className="px-3 py-2 rounded-lg cursor-pointer text-slate-600">
                  3
                </p>
              </div>

              <div>
                <p className="tracking-[.2rem]">...</p>
              </div>

              <div className="flex items-center">
                <p className="px-3 py-2 rounded-lg cursor-pointer text-slate-600">
                  8
                </p>
                <p className="px-3 py-2 rounded-lg cursor-pointer text-slate-600">
                  9
                </p>
                <p className="px-3 py-2 rounded-lg cursor-pointer text-slate-600">
                  10
                </p>
              </div>
            </div>

            {/* Next div */}
            <div className="flex items-center gap-2 text-sm cursor-pointer">
              <p className="font-bold">Next</p>
              <Image src={rightarrow2} alt="Left Arrow" className="scale-75" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
