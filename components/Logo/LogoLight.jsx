"use client";
import Image from "next/image";

const LogoLight = () => {
  return (
    <>
      <div className="size-[60px] flex items-center justify-center hover:scale-[1.2]">
        <Image src="/LOGOlight.png" alt="logo" width={100} height={100} />
      </div>
    </>
  );
};

export default LogoLight;
