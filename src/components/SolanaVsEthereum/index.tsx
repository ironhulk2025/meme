import Image from "next/image";
import React from "react";

const SolanaVsEthereum = () => {
  return (
    <section className="container max-w-[88rem] mx-auto flex flex-col lg:flex-row items-center justify-center pt-[128px] py-[64px]">
      <div>
        <Image
          src={"/Images/coinsLeft.png"}
          alt="Solana Coins"
          width={300}
          height={300}
        />
      </div>
      <div className=" flex  flex-col md:flex-row items-start justify-start md:bg-[#FFD700] rounded-[50px] px-5  md:px-12 md:py-12 ">
        <div className="w-full  md:w-[319px]  flex flex-col items-center justify-start gap-4  md:p-0 p-12 bg-[#FFD700] md:bg-none rounded-[50px] md:rounded-none ">
          <Image
            src={"/Images/solanaCoin.png"}
            width={64}
            height={64}
            alt="Solana Coin"
          />
          <p className="text-center text-balance text-[#000] font-jockey text-[20px] leading-[110%]">
            Solana is the underdog turned powerhouse, a blockchain known for
            blazing-fast transactions and near-zero fees. The home of the
            next-gen memecoin wave, Solana has birthed viral hits like BONK,
            WIF, and Myro, attracting a new era of degens who thrive on speed,
            scalability, and hype.
          </p>
        </div>
        <div className="heading font-jockey text-[48px] text-center w-full md:w-auto flex flex-col items-center"> vs </div>
        <div className="w-full  md:w-[319px]  flex flex-col items-center justify-start gap-4  md:p-0 p-12 bg-[#FFD700] md:bg-none rounded-[50px] md:rounded-none ">
          <Image
            src={"/Images/ethereumCoin.png"}
            width={64}
            height={64}
            alt="Solana Coin"
          />
          <p className="text-center text-balance text-[#000] font-jockey text-[20px] leading-[110%]">
            Ethereum is the OG blockchain, the birthplace of smart contracts,
            NFTs, and the first wave of memecoins. It’s home to legends like
            DOGE, SHIB, and PEPE, making it the undisputed king of the early
            memecoin era. With a strong, battle-tested ecosystem, Ethereum has
            maintained its dominance despite challenges like high gas fees and
            scalability concerns.
          </p>
        </div>
      </div>
      <div>
        <Image
          src={"/Images/coinRight.png"}
          alt="Solana Coins"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default SolanaVsEthereum;
