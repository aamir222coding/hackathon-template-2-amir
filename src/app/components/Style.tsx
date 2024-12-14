import Image from "next/image";
import pic1 from "/public/pic1.png";
import pic2 from "/public/pic2.png";
import pic3 from "/public/pic3.png";
import pic4 from "/public/pic4.png";




export default function Style(){
  return(
    <div className="px-16 space-y-6 bg-[#F0F0F0] py-10">

<div>
  <h1 className="text-center md:text-[50px] font-extrabold uppercase sm:text-[40px] text-[30px]">BROWSE BY dress STYLE</h1>
</div>

<div className="space-y-3 flex flex-col justify-center items-center w-full ">
{/* top div */}
<div className="flex md:flex-row flex-col items-center gap-3">

<div>

<Image src={pic1} alt="Picture1" className="md:w-full md:h-full w-[310px] h-[190px]" />
</div>

<div>

<Image src={pic2} alt="Picture1" className="md:w-full md:h-full w-[310px] h-[190px]" />
</div>


</div>


{/* bottom div */}
<div className="flex items-center gap-3 md:flex-row flex-col">

<div>

<Image src={pic3} alt="Picture1" className="md:w-full md:h-full w-[310px] h-[190px]" />
</div>

<div >

<Image src={pic4} alt="Picture1" className="md:w-full md:h-full w-[310px] h-[190px]"  />
</div>



</div>



</div>


    </div>
  )
}