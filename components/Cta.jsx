import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24 bg-tertiary ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            Prepared to turn your ideas into reality? I&apos;m here to help
          </h2>
          <Link href="/contact" aria-label="Contact me">
            <Button size="lg">Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
