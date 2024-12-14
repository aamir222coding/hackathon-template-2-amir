import Image from "next/image";

import email from "../../../public/email.png"
import fb from "../../../public/fb.png"
import twitter from "../../../public/twitter.png"
import instagram from "../../../public/instagram.png"
import github from "../../../public/github.png"
import payment from "../../../public/payment.png"

export default function Footer(){
  return (
    <div className="bg-[#F0F0F0] py-5">

{/* Updates div */}



{/* footer div */}
<div className="px-10 md:px-16 flex flex-col justify-center items-center py-5">
  

{/* Latest offers */}
<div className=" bg-black flex md:flex-row flex-col items-center justify-between py-[36px] md:px-[64px] px-5 gap-8 rounded-xl">
  
  <div>
<h1 className="text-white text-[40px]  font-extrabold lg:w-[65%] leading-[40px]">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
  </div>

  <div className="lg:w-[350px] space-y-3 w-full">

<div className="relative">
  <Image src={email} alt="Email" className="absolute left-3 top-3"/>
  <input type="text" name="" id="" className="w-full rounded-full py-3 pl-12" placeholder="Enter your Email address"/>
</div>

<button className="bg-white w-full rounded-full py-3 font-bold">Subscribe to Newsletter</button>

  </div>

 

</div>


{/* last div */}
<div className="w-full space-y-10">

{/* left div */}
<div className="flex md:flex-row gap-5 flex-col justify-between pt-20">

<div className="md:w-[30%] space-y-3">
  <h1 className="text-[34px] font-extrabold uppercase">shop.co</h1>

  <p className="text-sm">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>

  <div className="flex py-3 gap-5">
<Image src={twitter} alt="Twitter"/>
<Image src={fb} alt="Facebook"/>
<Image src={instagram} alt="Instagram"/>
<Image src={github} alt="Github"/>
  </div>
</div>



<div className="md:w-[70%] flex md:flex-row flex-col gap-10 justify-between">

{/* 1st two div */}
<div className="flex md:justify-around justify-between w-full">

<div className="space-y-3">

<h1 className="font-semibold tracking-[5px] uppercase">Company</h1>
<ul className="space-y-2">
<li>About</li>
<li>Features</li>
<li>Works</li>
<li>Career</li>
</ul>

</div>

<div className="space-y-3">

<h1 className="font-semibold tracking-[5px] uppercase">help</h1>
<ul className="space-y-2">
<li>Customer Support</li>
<li>Delivery Details</li>
<li>Terms and Conditions</li>
<li>Privacy Policy</li>
</ul>

</div>
</div>


{/* 2nd two div */}
<div className="flex md:justify-around justify-between w-full">

<div className="space-y-3">

<h1 className="font-semibold tracking-[5px] uppercase">faq</h1>
<ul className="space-y-2">
<li>Account</li>
<li>Manage Deliveries</li>
<li>Orders</li>
<li>Payments</li>
</ul>

</div>

<div className="space-y-3">

<h1 className="font-semibold tracking-[5px] uppercase">resources</h1>
<ul className="space-y-2">
<li>Free eBooks</li>
<li>Development Tutorials</li>
<li>How to - Blog</li>
<li>YouTube Playlist</li>
</ul>

</div>
</div>

</div>
</div>


{/* bottom div */}
<div className="flex justify-between py-5 border-t-2 border-slate-300">

{/* left div */}
<div>
  <p className="text-[#00000099]">Shop.co © 2000-2023, All Rights Reserved</p>
</div>


{/* right div */}
<div>
<Image src={payment} alt=" Payment"/>
</div>


</div>
</div>

</div>


    </div>
  )
}