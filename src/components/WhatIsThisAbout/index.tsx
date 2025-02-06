import Image from "next/image";
import React from "react";

const WhatIsThisAbout = () => {
  return (
    <section className="container mx-auto max-w-[88rem] flex flex-col items-center justify-center gap-16 mt-[64px] md:mt-[128px] ">
      <p className="md:heading font-freshman text-[24px] md:text-[48px] headingMobile  ">
        WHAT IS THIS ABOUT?
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center md:gap-0 gap-[40px] ">
        <div className="flex flex-col items-center justify-between rounded-[50px] md:rounded-tr-[0px] md:rounded-br-[0px] bg-[#FFECAC] border-[2px] border-solid border-[#000] px-[30px] pt-[39px] h-[512px]">
          <p className="text-[#000] font-freshman text-[24px]   md:text-[32px] leading-[125%] max-w-[378px]">
            The World’s First Memecoin Super Bowl!
          </p>
          <div className="flex flex-row items-center">
            <Image
              src={"/Images/nflLogo.png"}
              alt="nglLogo"
              width={185}
              height={270}
              className=""
            />
            <Image
              src={"/Images/nglTrophy.png"}
              alt="nglLogo"
              width={173}
              height={270}
              className="relative md:translate-x-[40%]"
            />
          </div>
        </div>

        <div
          className="flex flex-col items-start justify-start p-12 rounded-[50px] border-[2px] border-solid border-[#000] bg-[#FFD700]"
          style={{
            boxShadow: "4px 4px 0px 0px #000",
          }}
        >
          <div className="w-[341px] font-jockey">
            <p>
              Welcome to the 1st ever Memecoin Super Bowl, where the Ethereum
              Titans take on the Solana Warriors in an epic battle for
              blockchain supremacy! This isn’t just another showdown—it’s
              history in the making as the biggest names in the memecoin
              universe fight for the ultimate crown. For years, Ethereum and
              Solana have battled it out in the crypto space, each claiming to
              be the true home of memecoins. But now, the battlefield shifts to
              the gridiron, where legendary coaches Vitalik (ETH) and Toly (SOL)
              lead their squads of 15-20 top memecoins into war.
            </p>
            <p className="mt-4">
              💥 Who will emerge as the true Memecoin King?
            </p>
            <p className="mt-2">
              🔥 Which blockchain dominates the culture of memes?
            </p>
            <p className="mt-4">
              🏆 Will Ethereum’s OG status prevail, or will Solana’s speed and
              low fees take over?
            </p>
            <p>
              Expect hard hits, wild plays, and meme-fueled chaos as captains,
              defenders, and playmakers from both teams clash in a game like no
              other.
            </p>
            <p>
              This is more than just competition—it’s a decentralized revolution
              on the field.
            </p>
            <p className="mt-4">🚀 Let the Memecoin Super Bowl begin! 🚀</p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between rounded-[50px] md:rounded-tl-[0px] md:rounded-bl-[0px] bg-[#FFECAC] border-[2px] border-solid border-[#000] px-[30px] py-[39px] h-[512px]">
          <p className="text-[#000] font-freshman text-[32px] leading-[125%] max-w-[378px]">
            {" "}
            ENJOY THE SHOWDOWN
          </p>
          <Image
            src={"/Images/EnjoyImage.png"}
            alt="SolanaVsEthereum"
            width={313}
            height={151.515}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIsThisAbout;
