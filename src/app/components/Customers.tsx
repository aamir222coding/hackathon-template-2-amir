import Image from "next/image";

import starf from "../../../public/starf.png"
import tick from "../../../public/tick.png"
import leftarrow from "../../../public/left-arrow.png"
import rightarrow from "../../../public/right-arrow.png"



export default function Customers(){
  return(
    <div className="px-10 md:px-16 gap-10 flex flex-col justify-center py-10">

<div className="flex justify-between items-center">
  <h1 className="sm:text-[45px] text-[35px] font-extrabold uppercase w-[75%]">OUR HAPPY CUSTOMERS</h1>
  <div className="flex gap-3">
    <Image src={leftarrow} alt="Left Arrow" className="cursor-pointer"/>
    <Image src={rightarrow} alt="Right Arrow" className="cursor-pointer"/>
  </div>
</div>

<div className="flex gap-3">


{/* customer 1 */}
<div className="space-y-3 p-3">

<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
</div>

<div className="flex gap-2 items-center">
  <h1 className="font-bold">Sarah M.</h1> <Image src={tick} alt="Tick"/>
</div>

<p className="text-justify">I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.”</p>

</div>


{/* customer 2 */}

<div className="space-y-3 p-3 hidden sm:block">

<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
</div>

<div className="flex gap-2 items-center">
  <h1 className="font-bold">Alex K.</h1> <Image src={tick} alt="Tick"/>
</div>

<p className="text-justify">Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>

</div>


{/* customer 3 */}

<div className="space-y-3 p-3 hidden md:block">

<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
</div>

<div className="flex gap-2 items-center">
  <h1 className="font-bold">James L.</h1> <Image src={tick} alt="Tick"/>
</div>

<p className="text-justify">As someone who is always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>

</div>

</div>
    </div>
  )
}