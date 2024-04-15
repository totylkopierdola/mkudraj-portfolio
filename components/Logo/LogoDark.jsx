"use client";
import Image from "next/image";

const LogoDark = () => {
  return (
    <>
      <div className="size-[60px] flex items-center justify-center hover:scale-[1.2] duration-300">
        <Image src="/LOGOdark.png" alt="logo" width={100} height={100} />
      </div>
    </>
  );
};

export default LogoDark;
