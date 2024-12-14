import Image from "next/image";
import shirt4 from "/public/shirt4.png";
import shirt5 from "/public/shirt5.png";
import pent1 from "/public/pent1.png";
import pent2 from "/public/pent2.png";
import starf from "/public/starf.png";
import starh from "/public/starh.png";

import Link from "next/link";



export default function Selling(){
  return(
    <div className="px-10 md:px-16 h-[calc(100vh-95px)] space-y-3">

<div>
  <h1 className="text-center text-[50px] font-extrabold">Top Selling</h1>
</div>

<div className="flex justify-around md:justify-between gap-2">

{/* shirt 4 */}
<Link href={"/products"} className="space-y-3 cursor-pointer">
  <Image src={shirt4} alt="Image" className="h-[250px] w-[250px]"/>

  <p className="font-bold md:text-base text-xs">VERTICAL STRIPED SHIRT</p>

  <div className="flex gap-3 items-center">
<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
</div>
<p className="text-sm">5.0/5</p>
  </div>

  <div className="flex gap-3 items-center font-bold">

<p className="font-bold">$212</p>
<p className="text-[#00000066] line-through">$232</p>
<p className="text-[#FF3333] bg-[#FF33331A] px-2 text-sm">-20%</p>
</div>

</Link>

{/* shirt 5 */}
<Link href={"/products"} className="space-y-3 cursor-pointer">
  <Image src={shirt5} alt="Image" className="h-[250px] w-[250px]"/>

  <p className="font-bold md:text-base text-xs">COURAGE GRAPHIC T-SHIRT</p>

  <div className="flex gap-3 items-center">
<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
</div>
<p className="text-sm">4.0/5</p>
  </div>


<div className="flex gap-3 items-center">

<p className="font-bold">$145</p>
</div>
</Link>


{/* pent1 */}
<Link href={"/products"} className="space-y-3 cursor-pointer hidden md:block">
  <Image src={pent1} alt="Image" className="h-[250px] w-[250px]"/>

  <p className="font-bold capitalize">Loose Fit Bermuda shorts</p>

  <div className="flex gap-3 items-center">
<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
</div>
<p className="text-sm">3.0/5</p>
  </div>

<p className="font-bold">$80</p>
</Link>


{/* pent 2 */}
<Link href={"/products"} className="space-y-3 cursor-pointer hidden md:block">
  <Image src={pent2} alt="Image" className="h-[250px] w-[250px]"/>

  <p className="font-bold">FADED SKINNY JEANS</p>

  <div className="flex gap-3 items-center">
<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starh} alt="Image" className="w-[12.49px] h-[18.49px]"/>
</div>
<p className="text-sm">4.5/5</p>
  </div>

  <div className="flex gap-3 items-center">

<p className="font-bold">$210</p>
</div>

</Link>


</div>

<div>
  <h1 className="text-center text-[16px] cursor-pointer text-slate-500 hover:text-slate-600 border border-slate-200 py-2">View All</h1>
</div>
    </div>
  )
}