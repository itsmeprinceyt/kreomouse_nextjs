import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex justify-center items-center absolute bottom-5 left-1/2">
      <Image
      className="transition-all duration-300 animate-pulse hover:animate-none hover:scale-110"
      src="/icons/down-arrow.png"
      height={50}
      width={50}
      alt="arrow"
      />
    </div>
  );
}
