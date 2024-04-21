import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Cta />
    </main>
  );
}
