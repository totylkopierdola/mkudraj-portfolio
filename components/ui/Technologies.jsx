import Image from "next/image";

const Technologies = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap xl:justify-start justify-center">
      <Image
        src="/about/technologies/react.svg"
        className="transition-transform duration-300 transform hover:-translate-y-2 xl:size-[2.75rem] size-[2rem]"
        width={50}
        height={50}
        alt="react"
      />
      <Image
        src="/about/technologies/nextjs.svg"
        className="transition-transform duration-300 transform hover:-translate-y-2 xl:size-[2.75rem] size-[2rem]"
        width={50}
        height={50}
        alt="nextjs"
      />
      <Image
        src="/about/technologies/ts.svg"
        className="transition-transform duration-300 transform hover:-translate-y-2 xl:size-[2.75rem] size-[2rem]"
        width={50}
        height={50}
        alt="typescript"
      />
      <Image
        src="/about/technologies/js.svg"
        className="transition-transform duration-300 transform hover:-translate-y-2 xl:size-[2.75rem] size-[2rem]"
        width={50}
        height={50}
        alt="javascript"
      />
      <Image
        src="/about/technologies/html.svg"
        className="transition-transform duration-300 transform hover:-translate-y-2 xl:size-[2.75rem] size-[2rem]"
        width={50}
        height={50}
        alt="html"
      />
      <Image
        src="/about/technologies/css.svg"
        className="transition-transform duration-300 transform hover:-translate-y-2 xl:size-[2.75rem] size-[2rem]"
        width={50}
        height={50}
        alt="css"
      />
      <Image
        src="/about/technologies/ps.svg"
        className="transition-transform duration-300 transform hover:-translate-y-2 xl:size-[2.75rem] size-[2rem]"
        width={50}
        height={50}
        alt="photoshop"
      />
      <Image
        src="/about/technologies/postman.svg"
        className="transition-transform duration-300 transform hover:-translate-y-2 xl:size-[2.75rem] size-[2rem]"
        width={50}
        height={50}
        alt="postman"
      />
      <Image
        src="/about/technologies/graphql.svg"
        className="transition-transform duration-300 transform hover:-translate-y-2 xl:size-[2.75rem] size-[2rem]"
        width={50}
        height={50}
        alt="graphql"
      />
    </div>
  );
};

export default Technologies;
