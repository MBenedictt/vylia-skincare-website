// import Image from "next/image";

import { ArrowUpRight } from 'lucide-react';
import Link from "next/link";
import ProductSwipe from "./components/ProductSwipe";
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className='font-inter'>
      {/* Hero Section */}
      <div className="w-full h-screen max-lg:h-[90vh]  bg-[url('/assets/hero-home.png')] bg-cover bg-center max-lg:bg-position-[30%] bg-no-repeat flex items-center justify-center">
        <div className="w-full h-screen max-lg:h-[90vh] bg-[rgba(0,0,0,0.5)]" />
      </div>

      {/* Recommended Product */}
      <div className="w-full py-15">
        <div className="w-full flex max-md:flex-col justify-between items-center max-md:items-start pb-15 max-md:pb-10 px-10">
          <h1 className="text-4xl w-1/12 max-md:w-3/4 leading-[45px]">Recommended Product</h1>
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
          <h1 className="text-4xl w-2/4 max-xl:w-3/4 leading-[50px]"><span className="text-emerald-500 font-bold text-5xl font-limelight">Vylia</span> Has What Your Skin Needs.</h1>
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

      {/* Daily Routine Section */}
      <div className='"w-full py-15 flex max-md:flex-col justify-between items-center gap-10'>
        <div className='w-1/2 max-md:w-full h-[450px] bg-[url("/assets/daily-routine.png")] bg-cover bg-center'></div>
        <div className='w-1/2 max-md:w-full max-md:pl-10'>
          <h1 className='text-4xl w-3/4 leading-[50px]'>Your <span className="text-emerald-500 font-bold">Daily</span> Skin Partner</h1>
          <p className='py-5 w-11/12 text-zinc-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione enim exercitationem quia fugiat id labore quis, voluptates, sapiente vitae quidem accusantium provident facilis, cum laborum delectus dolores et! Corrupti, cumque.</p>
          <Link href="/" className='border-b-2 border-black pb-1 hover:text-emerald-500 hover:border-emerald-500 hover:pb-0 transition-all duration-300'>Read More</Link>
        </div>
      </div>

      {/* Bundle Product Section */}
      <div className="w-full py-15">
        <div className="w-full flex max-md:flex-col justify-between items-center max-md:items-start pb-15 max-md:pb-10 px-10">
          <h1 className="text-4xl w-3/12 max-md:w-full leading-[45px]">Bundle Package Product</h1>
          <div className="w-full h-fit flex justify-end max-md:justify-start max-md:mt-10">
            <button className="border-2 border-emerald-400 text-emerald-400 px-6 py-2 rounded-full cursor-pointer hover:bg-emerald-400 hover:text-white transition-all duration-300">See More</button>
          </div>
        </div>
        <div className="w-full h-fit grid grid-cols-3 max-md:grid-cols-1 gap-5 px-10">
          {[
            { title: "Bundle 1", description: "Save more, get more" },
            { title: "Bundle 2", description: "For every look" },
            { title: "Bundle 3", description: "Gentle & nourishing" },
          ].map((item, index) => (
            <div key={index} className="h-[400px] max-md:h-[320px] w-full flex-shrink-0 bg-stone-100 relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-white text-center opacity-0 hover:opacity-100 bg-transparent hover:bg-[rgba(0,0,0,0.4)] transition-all duration-300">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
                <button className="border-2 border-white text-white px-4 py-1 rounded-full cursor-pointer hover:bg-white hover:text-gray-700 transition-all duration-300 mt-5">View Product</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shop Now Section */}
      <div className='w-full py-15 max-md:pb-5'
        style={{
          backgroundImage: 'linear-gradient(to bottom, white 50%, #bffdd0ff 40%, #d3fcdfff 80%, #DFFBE7 100%)',
        }}>
        <div className='mx-10 bg-[url("/assets/shop-now.png")] bg-cover bg-center h-[500px] max-sm:h-[350px] rounded-xl'>
          <div className='flex flex-col items-center justify-center rounded-xl bg-[rgba(0,0,0,0.4)] w-full h-full'>
            <h1 className='font-limelight text-7xl max-lg:text-5xl max-sm:text-3xl text-center w-3/4 leading-[80px] max-lg:leading-[60px] max-sm:leading-[40px] text-emerald-50'>Let&apos;s Start Controlling Your Skin, Today</h1>
            <button className="border-4 border-emerald-50 shadow-lg mt-10 bg-white px-8 max-sm:px-4 py-4 max-sm:py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 text-lg max-sm:text-sm">Shop Now</button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />

    </div>
  );
}
