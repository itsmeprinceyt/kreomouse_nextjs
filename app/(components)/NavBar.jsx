import Link from "next/link";

export default function Navbar(){
    return(
        <div className="z-10 flex gap-10 absolute left-1/2 top-[30px] -translate-x-1/2 text-[13px] text-gray-300">
            <Link className="transition-all duration-300 ease-in-out hover:scale-110 hover:text-white" href="/">Home</Link>
            <Link className="transition-all duration-300 ease-in-out hover:scale-110 hover:text-white" href="/">About</Link>
            <Link className="transition-all duration-300 ease-in-out hover:scale-110 hover:text-white" href="/">Specifications</Link>
            <Link className="transition-all duration-300 ease-in-out hover:scale-110 hover:text-white" href="/">Contact</Link>
        </div>
    );
}