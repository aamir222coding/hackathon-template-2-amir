// Importing the Next.js Image component for optimized image handling
import Image from "next/image";

// Importing various images used in the component
import calvinKlein from "/public/calvniKlein.png";
import gucci from "/public/gucci.png";
import prada from "/public/prada.png";
import versace from "/public/versace.png";
import zara from "/public/zara.png";
import bgimg from "/public/img2.png";
import star from "/public/star.png";
import star2 from "/public/star2.png";


// Exporting the default Hero component
export default function Hero() {
  return (
    <div className="bg-[#F2F0F1]">

      {/* Top section of the Hero component */}
      <div className=" px-10 md:px-16 gap-10 py-0.5 sm:flex">

        {/* Left section - Text content and statistics */}
        <div className="sm:w-1/2 h-[calc(100vh-95px)] sm:py-10 space-y-10 md:space-y-3 sm:mb-0">

          {/* Main heading */}
          <div>
            <h1 className=" lg:text-[64px] text-[40px] sm:leading-[64px] leading-[40px] font-bold">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
          </div>

          {/* Subheading paragraph */}
          <div>
            <p className="text-sm md:text-xl">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
          </div>

          {/* Call-to-action button */}
          <div>
            <button className="h-[52px] bg-black text-white px-[54px] py-[16px] rounded-full w-full">
              Shop Now
            </button>
          </div>

          {/* Statistics section */}
          <div className="flex justify-between sm:flex-row flex-col items-center gap-5">

            {/* Statistics - International Brands and High-Quality Products */}
            <div className="flex justify-around sm:justify-between w-full sm:w-[60%]">
              <div className="space-y-2">
                <p className="text-4xl font-[600]">200+</p>
                <p className="text-sm text-[#00000099]">International Brands</p>
              </div>

              <div className="space-y-2">
                <p className="text-4xl font-[600]">2,000+</p>
                <p className="text-sm text-[#00000099]">High-Quality Products</p>
              </div>
            </div>

            {/* Statistic - Happy Customers */}
            <div className="space-y-2 sm:w-[25%]">
              <p className="text-4xl font-[600]">30,000+</p>
              <p className="text-sm text-[#00000099]">Happy Customers</p>
            </div>

          </div>

        </div>

        {/* Right section - Background image and decorative elements */}
        <div className="sm:w-1/2 h-full relative w-full sm:order-2 order-1">
        <div className="h-[590px] ">
          <Image src={bgimg} alt="BG" className="relative h-full" />
          <Image src={star2} alt="Star" className="absolute left-0 top-[50%] md:scale-100 scale-50" />
          <Image src={star} alt="Star" className="absolute top-[60px] right-0 scale-50 md:scale-100" />
        </div>
        </div>

      </div>

      {/* Bottom section - Brand logos */}
      <div className="h-[85px] bg-black flex flex-col sm:flex-row items-center justify-center sm:justify-between md:px-16 px-10">
        {/* Displaying brand logos */}
        <div className="flex justify-around w-full">
        <div className="">
          <Image src={versace} alt="Versace" className="lg:scale-100 sm:scale-75 scale-50" />
        </div>

        <div className="">
          <Image src={zara} alt="ZARA" className="lg:scale-100 sm:scale-75 scale-50"  />
        </div>

        <div className="">
          <Image src={gucci} alt="GUCCI" className="lg:scale-100 sm:scale-75 scale-50"  />
        </div>
        </div>

<div className="flex justify-around w-full">
      <div className="">
          <Image src={prada} alt="PRADA" className="lg:scale-100 sm:scale-75 scale-50"  />
        </div>

        <div className="">
          <Image src={calvinKlein} alt="CALVIN KLEIN"  className="lg:scale-100 sm:scale-75 scale-50" />
        </div>

        </div>
      </div>

    </div>
  );
}
