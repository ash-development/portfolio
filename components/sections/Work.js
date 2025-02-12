import { Text } from "@components";
import NextImage from "next/image";
import delta from "../../public/images/delta.jpg";
import uber_team from "../../public/images/uber_team.jpg";
import shopify from "../../public/images/shopify.jpg";
import wmsc from "../../public/images/ashie/meatlocker BG.jpg";

const ColumnOne = () => {

  const Tag = ({ children }) => (
    <div className="flex items-center justify-center px-2.5 py-1 text-sm rounded-full sm:px-4 sm:py-2 text-dark/75 bg-dark/10 sm:text-base">
      {children}
    </div>
  );

  
  return (
    <div className="w-full pt-6 pb-6 max-w-prose xl:max-w-screen-lg md:pr-8 grow">
      <div className="flex flex-col justify-between h-full">
        <div>
          <Text className="text-2xl xl:text-5xl">
            overall, i just have a passion for photography!<br/>id love to work
              together<br/>and help bring your vision to life.
          </Text>
          <div className="flex mt-4 gap-x-1">
            <Tag>concerts</Tag>
            <Tag>nature</Tag>
            <Tag>portraits</Tag>
              <Tag>and more!</Tag>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageLayout = ({ logo, src, logoAlt, alt, className }) => {
  return (
    (<div className="grid overflow-hidden border rounded h-fit border-stone sm:first:ml-0 sm:last:mr-0 isolate">
      <div className="z-10 flex flex-col items-center justify-center text-white gap-y-4 -mt-yeat overlay">
        <div className={`relative w-20 h-20 sm:w-40 sm:h-40 overflow-hidden ${className}`}>
          <NextImage
            src={logo}
            alt={logoAlt}
            fill
            sizes="100vw"
            style={{
              objectFit: "contain"
            }} />
        </div>
      </div>
      <div className="scale-[101.5%] content brightness-50 aspect-square blur-[3px]">
        <NextImage src={src} alt={alt} className="object-cover" fill sizes="100vw" />
      </div>
    </div>)
  );
};

const Work = () => {
  return (
    <div className="relative grid h-full grid-cols-1 gap-4 sm:grid-cols-1 isolate">
      <div className="flex items-center leading-none uppercase gap-x-2">
        <span className="w-2.5 h-2.5 rounded bg-yolk border border-dark -mt-0.5" />
        <h2 className="text-dark">Work</h2>
      </div>
      <div className="grid grid-flow-col pl-6 pr-6 -mx-6 overflow-x-auto gap-x-yeat auto-cols-custom md:auto-cols-auto sm:mx-0 sm:px-0">
        <ImageLayout src={wmsc} alt="" logoAlt="WMSC logo"  logo="/images/ashie/wmsc.png" />
          <ImageLayout src={wmsc} alt="" logoAlt="WMSC logo"  logo="/images/ashie/wmsc.png" />
          <ImageLayout src={wmsc} alt="" logoAlt="WMSC logo"  logo="/images/ashie/wmsc.png" />
      </div>
      <ColumnOne />
    </div>
  );
};
export default Work;
