"use client";
import Image from "next/image";
import image1 from "/public/image1.png";
import image2 from "/public/image2.png";
import image3 from "/public/image3.png";
import image4 from "/public/image4.png";
import rightarrow from "/public/rightarrow.png";
import starf from "/public/starf.png";
import starh from "/public/starh.png";
import checked from "/public/checked.png";
import plus from "/public/pluse.png";
import minus from "/public/minus.png";
import cart1 from "/public/cart1.png";
import arrowdown from "/public/down-arrow.png";
import tick from "/public/tick.png";
import threedots from "/public/threedots.png";
import Link from "next/link";
import { useState } from "react";
import shirt6 from "/public/shirt6.png";
import shirt7 from "/public/shirt7.png";
import shirt8 from "/public/shirt8.png";
import shirt9 from "/public/shirt9.png";

export default function ProductDetails() {
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [sm, setSm] = useState(false);
  const [lg, setlg] = useState(true);
  const [md, setmd] = useState(false);
  const [xl, setxl] = useState(false);
  const [item, setItem] = useState(1);

  function addItem() {
    setItem((e) => e + 1);
  }

  function subItem() {
    if (item > 0) {
      setItem((e) => e - 1);
    }
  }

  function smFun() {
    setSm(true);
    setlg(false);
    setmd(false);
    setxl(false);
  }

  function lgFun() {
    setlg(true);
    setSm(false);
    setmd(false);
    setxl(false);
  }

  function mdFun() {
    setlg(false);
    setSm(false);
    setmd(true);
    setxl(false);
  }

  function xlFun() {
    setlg(false);
    setSm(false);
    setmd(false);
    setxl(true);
  }

  function check1Fun() {
    setCheck1(true);
    setCheck2(false);
    setCheck3(false);
  }

  function check2Fun() {
    setCheck2(true);
    setCheck1(false);
    setCheck3(false);
  }

  function check3Fun() {
    setCheck3(true);
    setCheck1(false);
    setCheck2(false);
  }

  return (
    <div>
      {/* routes link */}
      <div className="mx-16 flex items-center gap-3 py-8 border-t-2 border-slate-200">
        <Link href={"/"}>Home</Link>
        <p>
          <Image src={rightarrow} alt="Right Arrow" />
        </p>
        <p>Shop</p>
        <p>
          <Image src={rightarrow} alt="Right Arrow" />
        </p>
        <p>Men</p>
        <p>
          <Image src={rightarrow} alt="Right Arrow" />
        </p>
        <p>T-Shirts</p>
      </div>

      {/* main div */}
      <div className="px-10 md:px-16 flex md:flex-row flex-col h-[50%] gap-10 md:gap-5">
        {/* left div */}
        <div className="md:w-[50%] flex md:flex-row flex-col-reverse gap-3 items-center">
          {/* three pics */}
          <div className="flex md:flex-col flex-row gap-3 justify-between">
            <div>
              <Image src={image2} alt="Image" />
            </div>

            <div>
              <Image src={image3} alt="Image" />
            </div>

            <div>
              <Image src={image4} alt="Image" />
            </div>
          </div>

          {/* one pic */}
          <div>
            <Image src={image1} alt="Image1" />
          </div>
        </div>

        {/* right div */}
        <div className="md:w-[50%] h-[500px]">
          <div className="flex flex-col gap-6 md:justify-between h-full">
            <p className="font-extrabold md:text-5xl text-3xl">
              One Life Graphic T-shirt
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
              <p className="font-bold">$260</p>
              <p className="text-[#00000066] line-through">$300</p>
              <p className="text-[#FF3333] bg-[#FF33331A] px-2 text-sm">-40%</p>
            </div>

            <p className="text-sm">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>

            <div>
              <p className="font-semibold">Select Color</p>
              <div className="flex gap-3">
                <p
                  onClick={check1Fun}
                  className="h-[37px] w-[37px] rounded-full cursor-pointer bg-[#4F4631] flex justify-center items-center"
                >
                  <Image
                    src={checked}
                    alt="Checked"
                    className={`${check1 ? "block" : "hidden"}`}
                  />
                </p>

                <p
                  onClick={check2Fun}
                  className="h-[37px] w-[37px] rounded-full cursor-pointer bg-[#314F4A] flex justify-center items-center"
                >
                  <Image
                    src={checked}
                    alt="Checked"
                    className={`${check2 ? "block" : "hidden"}`}
                  />
                </p>

                <p
                  onClick={check3Fun}
                  className="h-[37px] w-[37px] rounded-full cursor-pointer bg-[#31344F] flex justify-center items-center"
                >
                  <Image
                    src={checked}
                    alt="Checked"
                    className={`${check3 ? "block" : "hidden"}`}
                  />
                </p>
              </div>
            </div>

            {/* Choose div */}
            <div>
              <p className="font-semibold">Choose Size</p>
              <div className="flex gap-3">
                <p
                  onClick={smFun}
                  className={`md:px-4 px-2 py-1 md:text-base text-sm cursor-pointer md:py-2 bg-[#F0F0F0] rounded-full ${
                    sm ? "bg-black text-white" : "bg-[#F0F0F0]"
                  }`}
                >
                  Small
                </p>

                <p
                  onClick={mdFun}
                  className={`md:px-4 px-2 py-1 md:text-base text-sm cursor-pointer bg-[#F0F0F0] rounded-full ${
                    md ? "bg-black text-white" : "bg-[#F0F0F0]"
                  }`}
                >
                  Medium
                </p>

                <p
                  onClick={lgFun}
                  className={`md:px-4 px-2 py-1 md:text-base text-sm cursor-pointer bg-[#F0F0F0] rounded-full ${
                    lg ? "bg-black text-white" : "bg-[#F0F0F0]"
                  }`}
                >
                  Large
                </p>

                <p
                  onClick={xlFun}
                  className={`md:px-4 px-2 py-1 md:text-base text-sm cursor-pointer bg-[#F0F0F0] rounded-full ${
                    xl ? "bg-black text-white" : "bg-[#F0F0F0]"
                  }`}
                >
                  X-Large
                </p>
              </div>
            </div>

            {/* Add to cart div */}
            <div className="flex items-cente justify-between">
              <div className="flex items-center gap-5 bg-[#F0F0F0] px-8 py-3 rounded-full">
                <p onClick={subItem}>
                  <Image src={minus} alt="Minues" className="cursor-pointer" />
                </p>
                <p className="font-bold text-xl">{item}</p>
                <p onClick={addItem}>
                  <Image src={plus} alt="Minues" className="cursor-pointer" />
                </p>
              </div>

              <div className="w-[60%]">
                <button className="bg-black text-white rounded-full w-full py-3">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-10 md:mx-16 flex justify-between border-b-2 border-slate-200 h-[60px] items-center mt-10">
        <div className=" cursor-pointer hover:font-bold">Product Details</div>
        <div className="font-bold cursor-pointer">Rating & Reviews</div>
        <div className=" cursor-pointer hover:font-bold ">FAQs</div>
      </div>

      <div className="px-10 md:px-16 flex justify-between items-center">
        <div className="py-8 flex md:gap-3 gap-1">
          <p className="md:text-base text-xs font-bold">All Reviews</p>{" "}
          <p className="text-[#595858] md:text-base text-xs">(451)</p>
        </div>

        <div className="border-b-2 border-slate-200 py-8 flex gap-5 items-center">
          <div>
            <Image
              src={cart1}
              alt="Cart"
              className="cursor-pointer md:scale-100 scale-75"
            />
          </div>

          <div className="flex gap-2 items-center cursor-pointer">
            <p>Latest</p> <Image src={arrowdown} alt="Arrow Down" />
          </div>

          <button className="bg-black text-white px-5 py-2 rounded-full md:text-base text-sm">
            Write a Review
          </button>
        </div>
      </div>

      {/* Customers Review */}
      <div className="px-10 md:px-16 space-y-4">
        {/* row 1 */}
        <div className="flex gap-5 md:flex-row flex-col">
          {/* customer 1 */}
          <div className="space-y-3 p-4 border-2 border-slate-100 shadow-lg shadow-white bg-slate-100 md:w-1/2">
            <div className="flex justify-between items-center">
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
                  className="w-[18.49px] h-[18.49px]"
                />
              </div>
              <Image
                src={threedots}
                alt="threedots"
                className="cursor-pointer"
              />
            </div>

            <div className="flex gap-2 items-center">
              <h1 className="font-bold">Aysha Zafar</h1>{" "}
              <Image src={tick} alt="Tick" />
            </div>

            <p className="text-justify">
              I absolutely love this t-shirt! The design is unique and the
              fabric feels so comfortable. As a fellow designer, I appreciate
              the attention to detail. Its become my favorite go-to shirt.
            </p>

            <p>Posted on August 1, 2024</p>
          </div>

          {/* customer 2 */}
          <div className="space-y-3 p-4 border-2 border-slate-100 shadow-lg shadow-white bg-slate-100 md:w-1/2">
            <div className="flex justify-between items-center">
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
              <Image
                src={threedots}
                alt="threedots"
                className="cursor-pointer"
              />
            </div>

            <div className="flex gap-2 items-center">
              <h1 className="font-bold">Muhammad Ali</h1>{" "}
              <Image src={tick} alt="Tick" />
            </div>

            <p className="text-justify">
              The t-shirt exceeded my expectations! The colors are vibrant and
              the print quality is top-notch. Being a UI/UX designer myself, I
              am quite picky about aesthetics, and this t-shirt definitely gets
              a thumbs up from me.
            </p>

            <p>Posted on August 5, 2024</p>
          </div>
        </div>

        {/* row 2 */}
        <div className="flex gap-5 md:flex-row flex-col">
          {/* customer 1 */}
          <div className="space-y-3 p-4 border-2 border-slate-100 shadow-lg shadow-white bg-slate-100 md:w-1/2">
            <div className="flex justify-between items-center">
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
                  className="w-[18.49px] h-[18.49px]"
                />
              </div>
              <Image
                src={threedots}
                alt="threedots"
                className="cursor-pointer"
              />
            </div>

            <div className="flex gap-2 items-center">
              <h1 className="font-bold">Noman Ali</h1>{" "}
              <Image src={tick} alt="Tick" />
            </div>

            <p className="text-justify">
              This t-shirt is a must-have for anyone who appreciates good
              design. The minimalistic yet stylish pattern caught my eye, and
              the fit is perfect. I can see the designers touch in every aspect
              of this shirt.
            </p>

            <p>Posted on August 16, 2024</p>
          </div>

          {/* customer 2 */}
          <div className="space-y-3 p-4 border-2 border-slate-100 shadow-lg shadow-white bg-slate-100 md:w-1/2">
            <div className="flex justify-between items-center">
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
              <Image
                src={threedots}
                alt="threedots"
                className="cursor-pointer"
              />
            </div>

            <div className="flex gap-2 items-center">
              <h1 className="font-bold">Manzoor Ali</h1>{" "}
              <Image src={tick} alt="Tick" />
            </div>

            <p className="text-justify">
              As a UI/UX enthusiast, I value simplicity and functionality. This
              t-shirt not only represents those principles but also feels great
              to wear. Its evident that the designer poured their creativity
              into making this t-shirt stand out.
            </p>

            <p>Posted on August 17, 2023</p>
          </div>
        </div>

        {/* row 3 */}
        <div className="flex gap-5 flex-col md:flex-row">
          {/* customer 1 */}
          <div className="space-y-3 p-4 border-2 border-slate-100 shadow-lg shadow-white bg-slate-100 md:w-1/2">
            <div className="flex justify-between items-center">
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
              <Image
                src={threedots}
                alt="threedots"
                className="cursor-pointer"
              />
            </div>

            <div className="flex gap-2 items-center">
              <h1 className="font-bold">Saba Naz</h1>{" "}
              <Image src={tick} alt="Tick" />
            </div>

            <p className="text-justify">
              This t-shirt is a fusion of comfort and creativity. The fabric is
              soft, and the design speaks volumes about the designers skill. Its
              like wearing a piece of art that reflects my passion for both
              design and fashion.
            </p>

            <p>Posted on August 18, 2023</p>
          </div>

          {/* customer 2 */}
          <div className="space-y-3 p-4 border-2 border-slate-100 shadow-lg shadow-white bg-slate-100 md:w-1/2">
            <div className="flex justify-between items-center">
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
              <Image
                src={threedots}
                alt="threedots"
                className="cursor-pointer"
              />
            </div>

            <div className="flex gap-2 items-center">
              <h1 className="font-bold">Yasir Ali</h1>{" "}
              <Image src={tick} alt="Tick" />
            </div>

            <p className="text-justify">
              I am not just wearing a t-shirt; I am wearing a piece of design
              philosophy. The intricate details and thoughtful layout of the
              design make this shirt a conversation starter.
            </p>

            <p>Posted on August 19, 2023</p>
          </div>
        </div>
      </div>

      {/* Load more */}

      <div className="h-[70px] flex justify-center items-center w-full">
        <p className="bg-slate-100 cursor-pointer px-4 py-2 rounded-full hover:bg-slate-200 font-semibold">
          Load More Review
        </p>
      </div>

      {/* Might like more */}
      <div className="px-10 md:px-16 space-y-3 py-10">
        <div>
          <h1 className="text-center text-[35px] md:text-[50px] font-extrabold pb-5">
            You might also like
          </h1>
        </div>

        <div className="flex justify-around md:justify-between gap-2">
          {/* shirt 6 */}
          <Link href={"/products"} className="space-y-3 cursor-pointer">
            <Image src={shirt6} alt="Image" className="h-[250px] w-[250px]" />

            <p className="font-bold md:text-base text-xs">
              Polo with Contrast Trims
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
              <p className="text-[#FF3333] bg-[#FF33331A] px-2 text-sm">-20%</p>
            </div>
          </Link>

          {/* shirt 7 */}
          <Link href={"/products"} className="space-y-3 cursor-pointer">
            <Image src={shirt7} alt="Image" className="h-[250px] w-[250px]" />

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
          <Link
            href={"/products"}
            className="space-y-3 cursor-pointer hidden md:block"
          >
            <Image src={shirt8} alt="Image" className="h-[250px] w-[250px]" />

            <p className="font-bold capitalize">Polo with Tipping Details</p>

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
            <Image src={shirt9} alt="Image" className="h-[250px] w-[250px]" />

            <p className="font-bold">Black Striped T-shirt</p>

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
      </div>
    </div>
  );
}
