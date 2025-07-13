// import Image from "next/image";

import { ArrowUpRight } from 'lucide-react';
import ProductSwipe from "./components/ProductSwipe";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-screen max-lg:h-[90vh] bg-[url('/assets/hero-home.png')] bg-cover bg-center max-lg:bg-position-[30%] bg-no-repeat flex items-center justify-center">
        <div className="w-full h-screen max-lg:h-[90vh] bg-[rgba(0,0,0,0.5)]" />
      </div>

      {/* Recommended Product */}
      <div className="w-full py-15">
        <div className="w-full flex max-md:flex-col justify-between items-center max-md:items-start pb-15 max-md:pb-10 px-10">
          <h1 className="text-4xl w-1/12 max-md:w-3/4">Recommended Product</h1>
          <div className="w-full h-fit flex justify-end max-md:justify-start max-md:mt-10">
            <button className="border-2 border-emerald-400 text-emerald-400 px-6 py-2 rounded-full cursor-pointer hover:bg-emerald-400 hover:text-white transition-all duration-300">See More</button>
          </div>
        </div>
        <div className="w-full h-fit px-10">
          <ProductSwipe />
        </div>
      </div>

      {/* Product Description */}
      <div className="w-full flex items center py-15 px-10 max-md:flex-col">
        <div className="w-1/2 pl-10 max-md:pl-0 max-md:w-full">
          <h1 className="text-4xl w-2/4 max-xl:w-3/4 leading-[50px]"><span className="text-emerald-500 font-bold text-5xl">VYLIA</span> Has What Your Body Needs.</h1>
        </div>
        <div className="w-1/2 pr-10 max-md:pr-0 max-md:w-full">
          <p className="text-lg leading-[24px] text-zinc-500 mb-6 text-justify max-md:mt-6">
            Born from the belief that beauty begins with intention — offering products to fulfill your skin’s needs, elevate your routine, and celebrate self-expression that turn everyday rituals into moments of self-love.
          </p>

          <ul className="flex flex-col gap-4">
            {["Skincare", "Makeup", "Body Care", "Fragrance", "Bundle Package"].map((item) => (
              <li
                key={item}
                className="group flex justify-between items-center border-b-2 border-zinc-200 pb-2 cursor-pointer scale-100 hover:scale-101 transition-all duration-300"
              >
                <span className="text-base font-medium py-3 text-lg text-gray-700 group-hover:text-emerald-500 transition-colors">
                  {item}
                </span>
                <span className="text-zinc-500 group-hover:text-emerald-500 transition-colors">
                  <ArrowUpRight />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
