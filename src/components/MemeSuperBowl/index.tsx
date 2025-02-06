import Image from "next/image";

const MemeSuperBowl = () => {
  return (
    <section className="container mx-auto max-w-[88rem] flex flex-col items-center justify-start py-[64px] gap-[53px] ">
      <p className="md:heading headingMobile text-[24px] md:text-[48px] font-freshman ">MEME SUPER BOWL</p>
      <div className=" w-full md:h-[596px] relative   h-[167px]  ">
        <Image src={"/Images/memeBowl.png"} alt="meme bowl" layout="fill"  className="  "/>
      </div>
      {/* <div className="md:w-full relative md:h-[596px] w-[341px] h-[750.437px] md:hidden flex ">
        <Image src={"/Images/memeBowl2.png"} alt="meme bowl" layout="fill"  className="  "/>
      </div> */}
    </section>
  );
};

export default MemeSuperBowl;
