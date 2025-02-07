import { VSIcon } from "@/Images";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="absolute top-0 left-0 md:w-full h-[564px] md:h-screen bg-pink-500D -z-10 ">
        <img
          src="/Images/background.png"
          alt="background"
          className="w-full h-full object-cover scale-105 "
        />
      </div>
      <section className="w-[100vw] h-[500px] relative  md:min-h-[calc(100vh-90px)] overflow-hidden  ">
        <div className="flex flex-col items-center justify-center absolute bottom-0 md:left-[-0px] w-[200px] h-[240px]  md:w-[702px] md:h-[606px]">
          <Image
            src={"/Images/personLeft.png"}
            layout="fill"
            alt="person"
            className="z-10 object-fill"
          />
          <Image
            src={"/Images/coinsLeft.png"}
            width={521}
            height={440}
            alt="person"
            className="relative bottom-20 md:bottom-0 left-0 md:left-[150px]  z-0"
          />
        </div>
        <div className="flex flex-col items-center justify-center absolute bottom-0 right-[0px] w-[171px] h-[205px]  md:w-[439px] md:h-[527px] ">
          <Image
            src={"/Images/personRight.png"}
            layout="fill"
            alt="person"
            className="z-10 "
          />

          <Image
            src={"/Images/coinRight.png"}
            width={521}
            height={440}
            alt="person"
            className="relative right-0 bottom-20 md:bottom-0 md:right-[100px]  z-0"
          />
        </div>

        <div className="container max-w-[88rem] mx-auto flex flex-col items-center justify-center mt-[47px] z-[20] relative ">
          <p
            className="text-[#1C1C1C] text-center font-freshman text-[84px] leading-[125%] hidden md:flex "
            style={{
              textShadow: "6px 6px 0px #FFE794",
              WebkitTextStrokeWidth: "10px",
              WebkitTextStrokeColor: "#FFE794",
              paintOrder: "stroke fill",
            }}
          >
            WORLD 1ST MEMECOINS SUPERBOWL!
          </p>
          <p
            className="text-[#1C1C1C] text-center font-freshman text-[26px] leading-[125%] flex md:hidden  "
            style={{
              textShadow: "2px 2px 0px #FFE794",
              WebkitTextStrokeWidth: "4px",
              WebkitTextStrokeColor: "#FFE794",
              paintOrder: "stroke fill",
            }}
          >
            WORLD 1ST MEMECOINS SUPERBOWL!
          </p>
          <div className="mt-[100px]">
            <p className="heading font-jockey text-[48px] leading-normal md:hidden">
              {" "}
              vs{" "}
            </p>
            <div className="hidden md:flex">
              <VSIcon />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
