"use client"; // Indicates this is a client-side React component for Next.js

// Importing necessary dependencies and images
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Importing all required image assets
import rightarrow from "/public/rightarrow.png";
import shirt7 from "/public/shirt7.png";
import shirt2 from "/public/shirt2.png";
import pant from "/public/pant.png";
import deleteimg from "/public/delete.png";
import plus from "/public/pluse.png";
import minus from "/public/minus.png";
import promo from "/public/promo.png";
import rightarrowwhite from "/public/rightarrowwhite.png";

export default function Cart() {
  // State management for item quantities
  // Each item has its own state to track individual quantities
  const [item1, setItem1] = useState(1); // Quantity for first item
  const [item2, setItem2] = useState(1); // Quantity for second item
  const [item3, setItem3] = useState(1); // Quantity for third item

  // State management for div visibility
  // Allows removing items from cart by hiding their respective divs
  const [div1, setdiv1] = useState("block"); // Visibility for first item div
  const [div2, setdiv2] = useState("block"); // Visibility for second item div
  const [div3, setdiv3] = useState("block"); // Visibility for third item div

  // Function to hide first item div when delete is clicked
  function div1toggle() {
    setdiv1("hidden");
  }

  // Function to hide second item div when delete is clicked
  function div2toggle() {
    setdiv2("hidden");
  }

  // Function to hide third item div when delete is clicked
  function div3toggle() {
    setdiv3("hidden");
  }

  // Increment functions for each item's quantity
  function addItem1() {
    setItem1((e) => e + 1); // Increases first item quantity
  }

  function addItem2() {
    setItem2((e) => e + 1); // Increases second item quantity
  }

  function addItem3() {
    setItem3((e) => e + 1); // Increases third item quantity
  }

  // Decrement functions for each item's quantity
  // Prevents quantity from going below zero
  function subItem1() {
    if (item1 > 0) {
      setItem1((e) => e - 1); // Decreases first item quantity
    }
  }

  function subItem2() {
    if (item2 > 0) {
      setItem2((e) => e - 1); // Decreases second item quantity
    }
  }

  function subItem3() {
    if (item3 > 0) {
      setItem3((e) => e - 1); // Decreases third item quantity
    }
  }

  return (
    <div className="lg:px-16 px-10 py-3">
      {/* Breadcrumb navigation */}
      <div className="flex items-center gap-3 py-8 border-t-2 border-slate-200">
        <Link href={"/"}>Home</Link>
        <p>
          <Image src={rightarrow} alt="Right Arrow" />
        </p>
        <p>Cart</p>
      </div>

      {/* Page Title */}
      <div>
        <h1 className="uppercase text-4xl font-bold pb-4 px-10">your cart</h1>
      </div>

      {/* Main cart container with responsive layout */}
      <div className="flex gap-2 lg:gap-5 md:flex-row flex-col">
        {/* Left section: Cart Items */}
        <div className="md:w-[65%] space-y-5 border-2 border-slate-200 p-4">
          {/* First Cart Item - Gradient Graphic T-shirt */}
          <div
            className={`flex sm:flex-row flex-col border-2 border-slate-200 gap-5 justify-between items-center ${div1} p-1`}
          >
            {/* Item details section */}
            <div className="flex gap-6 items-center h-full">
              <div className="lg:w-[224px] lg:h-[224px]">
                <Image
                  src={shirt7}
                  className="w-[224px] h-[224px]"
                  alt="Shirt"
                />
              </div>

              {/* Product Information */}
              <div className="space-y-6">
                <h1 className="font-bold text-lg">Gradient Graphic T-shirt</h1>

                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">Size:</span>
                    <span className="ml-1">Large</span>
                  </p>
                  <p>
                    <span className="font-semibold">Color:</span>
                    <span className="ml-1">White</span>
                  </p>
                </div>

                <h1 className="text-2xl font-bold">$145</h1>
              </div>
            </div>

            {/* Item actions section */}
            <div className="flex sm:flex-col items-center justify-center gap-24">
              {/* Delete item button */}
              <Image
                onClick={div1toggle}
                src={deleteimg}
                alt="Delete"
                className="cursor-pointer"
              />

              {/* Quantity control */}
              <div className="float-end">
                <div className="flex items-center lg:gap-5 gap-2 bg-slate-100 lg:px-8 px-2 py-1 rounded-full">
                  <p onClick={subItem1}>
                    <Image
                      src={minus}
                      alt="Minus"
                      className="cursor-pointer"
                    />
                  </p>
                  <p className="font-bold text-lg">
                    {item1 < 10 ? 0 : ""}
                    {item1}
                  </p>
                  <p onClick={addItem1}>
                    <Image src={plus} alt="plus" className="cursor-pointer" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Cart Item - Checkered Shirt */}
          <div
            className={`flex sm:flex-row flex-col justify-between gap-5 items-center ${div2} border-2 border-slate-200 p-1`}
          >
            {/* Item details section */}
            <div className="flex gap-6 items-center h-full">
              <div className="lg:w-[224px] lg:h-[224px]">
                <Image
                  src={shirt2}
                  className="w-[224px] h-[224px]"
                  alt="Shirt"
                />
              </div>

              {/* Product Information */}
              <div className="space-y-6">
                <h1 className="font-bold text-lg">CHECKERED SHIRT</h1>

                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">Size:</span>
                    <span className="ml-1">Large</span>
                  </p>
                  <p>
                    <span className="font-semibold">Color:</span>
                    <span className="ml-1">White</span>
                  </p>
                </div>

                <h1 className="text-2xl font-bold">$180</h1>
              </div>
            </div>

            {/* Item actions section */}
            <div className="flex sm:flex-col items-center justify-center gap-24">
              {/* Delete item button */}
              <Image
                onClick={div2toggle}
                src={deleteimg}
                alt="Delete"
                className="cursor-pointer"
              />

              {/* Quantity control */}
              <div className="float-end">
                <div className="flex items-center lg:gap-5 gap-2 bg-slate-100 lg:px-8 px-2 py-1 rounded-full">
                  <p onClick={subItem2}>
                    <Image
                      src={minus}
                      alt="Minus"
                      className="cursor-pointer"
                    />
                  </p>
                  <p className="font-bold text-lg">
                    {item2 < 10 ? 0 : ""}
                    {item2}
                  </p>
                  <p onClick={addItem2}>
                    <Image src={plus} alt="plus" className="cursor-pointer" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third Cart Item - Skinny Fit Jeans */}
          <div
            className={`flex sm:flex-row flex-col gap-5 justify-between items-center ${div3} border-2 border-slate-200 p-1`}
          >
            {/* Item details section */}
            <div className="flex gap-6 items-center h-full">
              <div className="md:w-[224px] md:h-[224px]">
                <Image src={pant} className="w-[224px] h-[224px]" alt="Pants" />
              </div>

              {/* Product Information */}
              <div className="space-y-6">
                <h1 className="font-bold text-lg">SKINNY FIT JEANS</h1>

                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">Size:</span>
                    <span className="ml-1">Large</span>
                  </p>
                  <p>
                    <span className="font-semibold">Color:</span>
                    <span className="ml-1">White</span>
                  </p>
                </div>

                <h1 className="text-2xl font-bold">$240</h1>
              </div>
            </div>

            {/* Item actions section */}
            <div className="flex sm:flex-col items-center justify-center gap-24">
              {/* Delete item button */}
              <Image
                onClick={div3toggle}
                src={deleteimg}
                alt="Delete"
                className="cursor-pointer"
              />

              {/* Quantity control */}
              <div className="float-end">
                <div className="flex items-center lg:gap-5 gap-2 bg-slate-100 lg:px-8 px-2 py-1 rounded-full">
                  <p onClick={subItem3}>
                    <Image
                      src={minus}
                      alt="Minus"
                      className="cursor-pointer"
                    />
                  </p>
                  <p className="font-bold text-lg">
                    {item3 < 10 ? 0 : ""}
                    {item3}
                  </p>
                  <p onClick={addItem3}>
                    <Image src={plus} alt="plus" className="cursor-pointer" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right section: Order Summary */}
        <div className="border-2 border-slate-200 p-4 md:w-[40%]">
          <h1 className="text-3xl font-bold pb-5">Order Summary</h1>

          {/* Subtotal, Discount, and Delivery Fee */}
          <div className="space-y-2 border-b-2 border-slate-200 py-2 pb-2">
            <div className="flex justify-between items-center">
              <p className="text-slate-500 text-lg">Subtotal</p>
              <p className="font-bold text-2xl">$565</p>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-slate-500 text-lg">Discount (-20%) </p>
              <p className="font-bold text-2xl text-red-400">-$113</p>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-slate-500 text-lg">Delivery Fee </p>
              <p className="font-bold text-2xl">$15</p>
            </div>
          </div>

          {/* Total Price */}
          <div className="flex justify-between items-center py-2">
            <p className="text-slate-500 text-lg">Total </p>
            <p className="font-bold text-2xl">$467</p>
          </div>

          {/* Promo Code Section */}
          <div className="flex justify-between items-center py-3 gap-2">
            <div className="flex items-center relative">
              <input
                type="text"
                className="bg-slate-200 py-1 lg:py-2 pl-10 text-xs lg:text-sm outline-none rounded-full"
                placeholder="Add Promo Code"
              />
              <Image
                src={promo}
                alt="Promo"
                className="absolute left-1.5 scale-75 lg:scale-100"
              />
            </div>

            <button className="bg-black text-white px-3 lg:px-6 lg:py-2 py-1 rounded-full text-xs lg:text-lg">
              Apply
            </button>
          </div>

          {/* Checkout Button */}
          <div className="flex items-center justify-center gap-2 bg-black text-white py-3 rounded-full cursor-pointer">
            <button>Go to Checkout</button>
            <Image src={rightarrowwhite} alt="Right Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}