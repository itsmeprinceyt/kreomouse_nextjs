"use client";
import Image from "next/image";
import Link from "next/link.js";
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

export default function LandingPage() {
  const Home = useRef(null);
  const About = useRef(null);
  const Specifications = useRef(null);
  const Contact = useRef(null);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const ScrollToHome = () => {
    Home.current.scrollIntoView({ behavior: 'smooth' });
  };

  const ScrollToAbout = () => {
    About.current.scrollIntoView({ behavior: 'smooth' });
  };

  const ScrollToSpecifications = () => {
    Specifications.current.scrollIntoView({ behavior: 'smooth' });
  };

  const ScrollToContact = () => {
    Contact.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">

      {/*Navbar*/}
      <div className="z-50 flex gap-10 fixed left-1/2 top-[30px] -translate-x-1/2 text-[13px] text-gray-300">

        <button
          onClick={ScrollToHome}
          className="transition-all duration-300 ease-in-out hover:scale-110 hover:text-white">
          Home
        </button>

        <button
          onClick={ScrollToAbout}
          className="transition-all duration-300 ease-in-out hover:scale-110 hover:text-white">
          About
        </button>

        <button
          onClick={ScrollToSpecifications}
          className="transition-all duration-300 ease-in-out hover:scale-110 hover:text-white">
          Specifications
        </button>

        <button
          onClick={ScrollToContact}
          className="transition-all duration-300 ease-in-out hover:scale-110 hover:text-white">
          Contact
        </button>

      </div>

      {/* First Page */}
      <div ref={Home} className="bg-gradient-to-r from-black to-black min-h-screen relative flex justify-center items-center overflow-hidden">

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
              <button className="bg-white text-black font-bold py-3 rounded-full w-[120px] shadow-xl shadow-black/50 hover:scale-110 transition-all ease-in-out">Buy Now</button>
            </Link>
            <button
              className="border-2 text-white font-bold px-6 py-3 rounded-full w-[120px] shadow-xl shadow-black/50 hover:scale-110 transition-all ease-in-out"
              onClick={ScrollToAbout}
            >About</button>
          </div>
        </div>

        {/*Background Image*/}
        <Image
          className="object-contain sm:object-cover object-left sm:object-right opacity-50 scale-300 sm:scale-125"
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
      <div ref={About} className="bg-gradient-to-r from-[#220029] to-black min-h-screen relative flex justify-center items-center overflow-hidden">
        <div className="z-20 text-white flex flex-col items-start relative sm:h-[500px]">
          <div className="text-[100px] sm:text-[200px] font-bold sm:leading-tight ">
            ABOUT
          </div>
          <div className="font-extralight text-[15px] w-[350px] h-[200px] text-purple-200">Experience the best of both worlds with
            the Chimera gaming mouse: easily switch
            between ultra-silent and tactile switches
            for a custom gaming feel.
            <br /><br />
            Customize your gameplay with the
            Chimera: fully programmable through its
            dedicated software, tailor every click
            to your gaming strategy.</div>
          <Image
            className="absolute w-[150px] sm:w-[450px] sm:bottom-5 right-0 animate-pulse sm:animate-none"
            src="/mouse_image_official1.png"
            width={450}
            height={450}
            alt="Mouse"
          />
        </div>

        {/*For Navigating to other page*/}
        <button
          className="z-30"
          onClick={ScrollToSpecifications}>
          <Image
            className="absolute left-1/2 bottom-[30px] transform -translate-x-1/2 animate-pulse hover:animate-none hover:scale-110 transition-all duration-300 ease-in-out"
            src="/icons/down-arrow_white.png"
            height={50}
            width={50}
            alt="arrow"
          />
        </button>
      </div>

      {/* Third Page */}
      <div ref={Specifications} className="bg-gradient-to-r from-green-950 to-black min-h-screen relative flex justify-center items-center overflow-hidden">
        <div className="z-20  text-white flex flex-col justify-center items-center gap-3 relative  mt-24 sm:mt-0 mb-28 sm:mb-0">
          <div className="text-4xl sm:text-6xl font-bold">SPECIFICATIONS</div>
          <div className="grid grid-cols-1 gap-5 items-start sm:grid-cols-3">
            <div className="grid grid-cols-1 justify-center items-start gap-2 p-1 w-[300px]">
              <div className="rounded-md border-2 border-[#73ff00] w-[300px]">
                <Image
                  className="rounded-md"
                  src="/mouse_image2.png"
                  width={1200}
                  height={1200}
                  alt="Mouse Specifications 1"
                />
              </div>
              <div className="text-2xl font-bold text-center">COMPLETELY PROGRAMMABLE</div>
              <div className="text-xs font-extralight text-center text-green-200">Customize your gameplay with the Chimera: fully programmable through its dedicated
                software, tailor every click to
                your gaming strategy.</div>
            </div>

            <div className="grid grid-cols-1 justify-center items-start gap-2 p-1 w-[300px]">
              <div className="rounded-md border-2 border-[#73ff00] w-[300px]">
                <Image
                  className="rounded-md"
                  src="/mouse_image4.png"
                  width={1200}
                  height={1200}
                  alt="Mouse Specifications 1"
                />
              </div>
              <div className="text-2xl font-bold text-center">3 WAY CONNECTION<br />DPI RANGE</div>
              <div className="text-xs font-extralight text-center text-green-200">Master of connectivity with 3-way
                options - Bluetooth, wired, and 2.4G.
                Flexibility at your Fingertips!
                Unleash precision with a max DPI
                of 12,400 - for swift movements.</div>
            </div>

            <div className="grid grid-cols-1 justify-center items-start gap-2 p-1 w-[300px]">
              <div className="rounded-md border-2 border-[#73ff00] w-[300px]">
                <Image
                  className="rounded-md"
                  src="/mouse_image3.png"
                  width={1200}
                  height={1200}
                  alt="Mouse Specifications 1"
                />
              </div>
              <div className="text-2xl font-bold text-center">HOT SWAPABLE
                SWITCHES</div>
              <div className="text-xs font-extralight text-center text-green-200">Experience the best of both worlds with the Chimera gaming mouse: easily switch
                between ultra-silent and tactile switches
                for a custom gaming feel.</div>
            </div>

          </div>
        </div>

        {/*For Navigating to other page*/}
        <button onClick={ScrollToContact}>
          <Image
            className="absolute left-1/2 bottom-[30px] transform -translate-x-1/2 animate-pulse hover:animate-none hover:scale-110 transition-all duration-300 ease-in-out"
            src="/icons/down-arrow_white.png"
            height={50}
            width={50}
            alt="arrow"
          />
        </button>
      </div>

      {/* Fourth Page */}
      <div ref={Contact} className="bg-gradient-to-r from-[#220029] to-black min-h-screen relative flex justify-center items-center overflow-hidden">
        <div className="z-20  text-white flex flex-col sm:flex-row justify-center items-center gap-3 relative  mt-32 sm:mt-8 mb-20 sm:mb-0">
          <div className="p-4 flex flex-col justify-center items-center gap-3 rounded-lg">
            <div className="text-4xl sm:text-5xl font-extrabold text-center">CONTACT</div>
            <div className="font-extralight text-center w-[350px]">Feel free to contact us any time. We will get back to you as soon as we can!</div>

            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="relative  flex flex-col justify-center items-start gap-1 h-[80px]">
                <p className="text-xs text-white">Name</p>
                <input
                  className="w-full rounded-md py-2 text-xs px-2 outline-none bg-white text-black"
                  type="text"
                  {...register('name', { required: true, maxLength: 25 })}
                />
              </div>

              <div className="relative  flex flex-col justify-center items-start gap-1 col-span-2 h-[80px]">
                <p className="text-xs text-white">Email</p>
                <input
                  className="w-full rounded-md py-2 text-xs px-2 outline-none bg-white text-black"
                  type="email"
                  {...register('email', { required: true })}
                />
              </div>

              <div className="relative  flex flex-col justify-center items-start gap-1 col-span-2 h-[80px]">
                <p className="text-xs text-white">Your Comment</p>
                <textarea
                  className="w-full rounded-md py-2 text-xs px-2 outline-none bg-white text-black"
                  type="text"
                  {...register('comment', { required: true, maxLength: 250 })}
                />
              </div>

              <div className="flex justify-center items col-span-2 mt-5">
                <button type="submit" className="text-xs bg-white text-black font-bold py-3 rounded-md w-[80px] shadow-xl shadow-black/20 hover:scale-110 transition-all ease-in-out text-center">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Final Page */}
      <div className="bg-gradient-to-r from-[#220029] to-black min-h-screen relative flex justify-center items-center overflow-hidden">
        <div className="z-20  text-white flex flex-col justify-center items-center gap-10 relative  mt-0 sm:mt-0 mb-0 sm:mb-0">
          <div className="text-4xl sm:text-6xl font-bold">Thank You For Visiting</div>
          <div className="font-extralight text-purple-200">Made by @itsmeprinceyt</div>
          <Link className="underline text-xs text-purple-200 animate-pulse" href="https://github.com/itsmeprinceyt/kreomouse_nextjs" target="_blank">Repository</Link>
          <div className="flex gap-5">
            <Link 
            className="hover:scale-125 border-2 border-purple-700 p-4 rounded-full"
            href="https://www.linkedin.com/in/mohduvaish" target="_blank"><span className="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512">
                <path
                  d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </span></Link>
            <Link 
            className="hover:scale-125 border-2 border-purple-700 p-4 rounded-full"
            href="https://github.com/itsmeprinceyt" target="_blank"><span className="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 496 512">
                <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </span></Link>
            <Link
            className="hover:scale-125 border-2 border-purple-700 p-4 rounded-full"
            href="https://www.instagram.com/itsmeprinceyt" target="_blank"><span className="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512">
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span></Link>
            <Link
            className="hover:scale-125 border-2 border-purple-700 p-4 rounded-full"
            href="https://www.youtube.com/@itsmeprinceyt" target="_blank"><span className="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 576 512">
                <path
                  d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
              </svg>
            </span></Link>
          </div>
        </div>
      </div>

    </div>

  );
}
