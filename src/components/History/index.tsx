import Image from "next/image";
import React from "react";

const History = () => {
  return (
    <section className="max-w-[88rem] mx-auto container flex flex-col items-center justify-start py-16 gap-16">
      <div className="flex flex-col items-center w-full justify-start gap-6">
        <p className="text-[#000] text-[20px] md:text-[32px] leading-[110%] font-jockey">
          Ethereum and Solana rivially is historical{" "}
        </p>

        <p className="md:heading  headingMobile text-[24px] md:text-[48px] font-freshman uppercase">
          Now is the time to know how is the real Memecoin king?
        </p>
      </div>
      <div className="flex w-full  flex-col md:flex-row items-center justify-start gap-16 md:px-0 px-5">
              <div className="w-[322px] h-[322px] md:w-[623px] md:h-[623px] flex flex-col items-center justify-center relative">
                  <Image src={"/Images/historyImage.png"} layout="fill" alt="historyImage"/>

        </div>
              <div className=" flex flex-col items-start justify-start  text-[#1C1C1C] font-jockey text-[18px] leading-[110%] max-w-[529px] text-left bg-[#FFD700] rounded-[50px] p-12  ">
          <p>
            In one corner, we have Ethereum—the Godfather of Crypto, where
            memecoins were born and legends were made. It’s the blockchain
            that’s been through the wars, forged in the fires of gas fees and
            congestion, yet still standing tall as the king of decentralized
            finance and memecoin madness. Ethereum doesn’t just hold the
            crown—it built the throne.
          </p>
          <p className="mt-4">
            In the other corner, there’s Solana—the Lightning Warrior, blazing
            into the crypto scene with insane speeds and microscopic fees.
            Solana is the playground of the new-school degen, where memecoins
            like BONK and WIF explode overnight, and every trade feels like
            riding a rocket. It’s the rebel with a cause, the upstart challenger
            looking to overthrow the old guard and claim the throne for itself.
          </p>
          <p className="mt-4 text-[24px] font-freshman leading-[110%]">Two worlds. One battlefield.</p>
          <p className="mt-4">
            This isn’t just a game; it’s a war of dominance, culture, and
            technology. Ethereum’s battle-hardened warriors versus Solana’s
            speed demons—a battle between the wisdom of the elders and the
            recklessness of youth.
          </p>
          <p>
            Will Ethereum’s experience crush the fast-rising Solana, or will
            Solana’s blistering pace leave Ethereum in the dust?
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
