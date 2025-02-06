import Image from "next/image";
import React from "react";

const MemeCoinLeaderBoard = () => {
  return (
    <section className="container mx-auto  max-w-[88rem] flex flex-col items-center justify-start py-[64px] gap-[64px]">
      <p
        className="md:heading headingMobile font-freshman text-[24px] md:text-[48px] tracking-normal  "
        style={{
          paintOrder: "stroke fill",
        }}
      >
        Meme Coin Leaderboard
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-[60px]">
        <div className="flex flex-col items-center justify-normal gap-[32px]">
          <div className="flex flex-row items-center  justify-start gap-3">
            <Image
              src={"/Images/solanaCoin.png"}
              alt="solanaCoin"
              width={64}
              height={64}
            />
            <p className="text-[#000] text-center font-freshman text-[48px] leading-[125%]">
              solana
            </p>
          </div>

          <Image
            src={"/Images/leaderSolanaLeft.png"}
            alt="solanaCoin"
            width={521}
            height={561}
          />
        </div>
        <div className="flex flex-col items-center justify-normal gap-[32px]">
          <div className="flex flex-row items-center  justify-start gap-3">
            <Image
              src={"/Images/ethereumCoin.png"}
              alt="solanaCoin"
              width={64}
              height={64}
            />
            <p className="text-[#000] text-center font-freshman text-[48px] leading-[125%]">
              Ethereum
            </p>
          </div>

          <Image
            src={"/Images/leaderRightpng.png"}
            alt="solanaCoin"
            width={521}
            height={561}
          />
        </div>
      </div>
    </section>
  );
};

export default MemeCoinLeaderBoard;
