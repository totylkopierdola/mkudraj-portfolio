import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LuCircleSlash } from "react-icons/lu";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Specializing in building responsive and interactive web applications using Next.js, React, and Typescript. Transforming UI/UX designs into engaging user interfaces that enhance user experiences.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Visual Design",
    description:
      "Creating visually stunning and impactful designs that captivate audiences and enhance user engagement. Transforming concepts into compelling visuals that resonate with your brand.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Maintenance & SEO",
    description:
      "Providing ongoing support, updates, and optimizations to keep your website running smoothly and efficiently. Implementing SEO best practices to improve visibility and performance.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto mb-24">
          <LuCircleSlash
            size={20}
            className="dark:text-[#92E3A9] text-primary"
          />
          My services
        </h2>
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative "
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center pt-8 xl:pt-0">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
