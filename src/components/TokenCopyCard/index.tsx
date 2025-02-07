import React from "react";
import CopyButton from "../Copy";
import { DeskTool } from "@/Images";
import Image from "next/image";

const TokenCopyCard = () => {

    const truncateString = (str: string, length: number = 18): string => {
        return str.length > length ? str.slice(0, length) + "..." : str;
    };
  return (
    <div
      className="
      flex flex-col items-start justify-start p-6 rounded-[31px] gap-4  w-full bg-[#FFECAC] relative scale-50 md:scale-100  max-w-[438px] border-solid border-[4px]  border-black
          "
    >
      <div className="w-full rounded-[20px] border-solid border-[2.39px] border-black flex flex-row items-center justify-between py-[5.9px] px-2 ">
              <p className="font-freshman">{
                  truncateString("H9RymV89fYUdXdYEQVRgYFQxXqd7s8utj8yimb8Epump")
              }
                  
              </p>
              <CopyButton text="H9RymV89fYUdXdYEQVRgYFQxXqd7s8utj8yimb8Epump" />
      </div>
      <p className="text-[25.536px] font-freshman leading-normal">
        TICKER : $BOWL
      </p>
      <div className="flex flex-row items-center justify-center w-full gap-4">
        <a href="https://www.dextools.io/app/en/solana/pair-explorer/CDt3B7iStNxzKm26eNGSG11QUQj6xWdUvAGDJhoyvwGm?t=1738959494706">
          <DeskTool />
        </a>
        <a
          href="https://dexscreener.com/solana/CDt3B7iStNxzKm26eNGSG11QUQj6xWdUvAGDJhoyvwGm"
          className="w-[52px] relative h-[52px] rounded-[8px] overflow-hidden"
        >
          <Image
            src={"/Images/dex.png"}
            layout="fill"
            alt="dex"
            className="relative"
          />
        </a>
      </div>
    </div>
  );
};

export default TokenCopyCard;
