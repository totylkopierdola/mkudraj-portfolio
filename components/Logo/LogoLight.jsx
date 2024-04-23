"use client";
import Image from "next/image";

const LogoLight = () => {
  return (
    <>
      <div className="size-[60px] flex items-center justify-center hover:scale-[1.2] duration-300">
        <Image
          src="/LOGOlight-small.png"
          alt="logo"
          width={100}
          height={100}
          priority
        />
      </div>
    </>
  );
};

export default LogoLight;
