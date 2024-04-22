"use client";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
// components
import Form from "@/components/Form";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Contact = () => {
  const [isClient, setIsClient] = useState(false);
  const [isPhoneNumberVisible, setPhoneNumberVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  });

  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24 relative">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
              nostrum.
            </p>
          </div>
          {/* illustration */}
          {/* <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div> */}
          <div className="flex justify-center">
            {isClient && theme === "dark" && (
              <Image
                className="hidden xl:flex opacity-90"
                src="/contact/bg2.svg"
                width="350"
                height="350"
                alt=""
              />
            )}
            {isClient && theme === "light" && (
              <Image
                className="absolute hidden xl:flex"
                src="/contact/bg3.svg"
                width="450"
                height="450"
                alt=""
              />
            )}
          </div>
        </div>
        {/* info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>kudraj.mateusz@gmail.com</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Gdańsk, Poland</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              {!isPhoneNumberVisible && (
                <span
                  className="cursor-pointer"
                  onClick={() => setPhoneNumberVisible(true)}
                >
                  Click to show
                </span>
              )}
              {isClient && theme === "dark" && isPhoneNumberVisible && (
                <Image
                  src="/contact/number-dark.png"
                  width={150}
                  height={50}
                  alt="number-dark"
                />
              )}
              {isClient && theme === "light" && isPhoneNumberVisible && (
                <Image
                  src="/contact/number.png"
                  width={150}
                  height={50}
                  alt="number-light"
                />
              )}
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
