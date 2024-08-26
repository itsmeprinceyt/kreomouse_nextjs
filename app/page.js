"use client";
import Image from "next/image";
import Link from "next/link.js";
import { useRef } from 'react';
import NavBar from ".//(components)/NavBar.jsx";

export default function LandingPage() {
  const About = useRef(null);
  const Home = useRef(null);

  const ScrollToAbout = () => {
    About.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>

      <NavBar />

      {/* First Page */}

      <div ref={Home} className="bg-black min-h-screen relative flex justify-center items-center">
        <div className="z-20 text-white flex flex-col justify-center items-center gap-5">
          <div className="flex justify-around gap-20 sm:gap-28 text-4xl">
            <div>K</div>
            <div>R</div>
            <div>E</div>
            <div>O</div>
          </div>
          <div className="text-5xl font-bold text-center w-[450px]">Chimera Wireless Gaming Mouse</div>
          <div className="text-xs font-extralight text-center w-[440px]">Experience the best of both worlds with the Chimera gaming mouse: easily switch between ultra-silent and tactile switches for a custom gaming feet.</div>
          <div className="flex gap-10">
            <Link
              href="https://kreo-tech.com/products/chimera-wireless-gaming-mouse"
              target="_blank"
            >
              <button className="bg-white text-black font-bold py-3 rounded-full w-[120px] shadow-xl shadow-black hover:scale-110 transition-all ease-in-out">Buy Now</button>
            </Link>
            <button
              className="border-2 text-white font-bold px-6 py-3 rounded-full w-[120px] shadow-xl shadow-black hover:scale-110 transition-all ease-in-out"
              onClick={ScrollToAbout}
            >About</button>
          </div>
        </div>
        <Image
          className="object-cover opacity-50"
          src="/mouse_image3.png"
          fill={true}
          alt="Background Image"
        />
        {/*For Navigating to other page*/}
        <button onClick={ScrollToAbout}>
          <Image
            className="absolute left-1/2 bottom-[30px] transform -translate-x-1/2 animate-pulse hover:animate-none hover:scale-110 transition-all duration-300 ease-in-out"
            src="/icons/down-arrow_white.png"
            height={50}
            width={50}
            alt="arrow"
          />
        </button>

      </div>

      {/* Second Page */}
      <div ref={About} className="2nd-page bg-yellow-300 min-h-screen">
        hello
      </div>
    </div>

  );
}
