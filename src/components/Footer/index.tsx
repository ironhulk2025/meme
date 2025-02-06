import { Telegram } from "@/Images";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-[100vw] relative overflow-hidden">
      <div className="container max-w-[88rem] mx-auto relative flex flex-col items-center justify-start pt-[100px]">
        <div className="absolute bottom-0 left-0 right-0  h-[40px] z-30 flex flex-row items-center justify-between py-[20px] px-[40px] ">
          <p className="text-[#282828] font-jockey text-[14px] leading-normal">
            Together for smiles with Superbowl!
          </p>
          <div className="flex flex-row items-center justify-start gap-12">
            <a href="https://t.me/superbowl_official">
              <Telegram />
            </a>
            <a href="https://x.com/superbowl_ofcl">
              <FaXTwitter className="text-[24px]" />
            </a>
          </div>
        </div>
        <p className="md:heading  headingMobile text-[48px] md:text-[154px] leading-[100%] font-freshman relative top-[-20px] md:top-[50px] ">
          SUPERBOWL
        </p>

        <Image
          src={"/Images/FooterTrophy.png"}
          alt="trophy"
          width={300}
          height={364}
          className="relative z-20 hidden md:block"
        />
        <Image
          src={"/Images/FooterTrophy.png"}
          alt="trophy"
          width={200}
          height={243}
          className="relative z-20 bottom-10 block md:hidden "
        />
      </div>
      <div className="absolute bottom-0 left-0   w-full translate-y-1/2">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1736 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M474.964 421.991C509.61 421.991 542.306 413.636 571.146 398.83C602.53 454.718 662.358 492.479 731.003 492.479C781.636 492.479 827.472 471.934 860.635 438.725C891.657 476.157 938.497 500 990.903 500C1071.51 500 1138.95 443.592 1155.91 368.086C1193.26 401.603 1242.62 421.991 1296.74 421.991C1331.39 421.991 1364.08 413.636 1392.92 398.83C1424.31 454.718 1484.13 492.479 1552.78 492.479C1653.97 492.479 1736 410.426 1736 309.209C1736 207.991 1653.97 125.938 1552.78 125.938C1532.15 125.938 1512.33 129.347 1493.83 135.632C1463.5 56.321 1386.69 0 1296.74 0C1186.85 0 1096.59 84.0525 1086.7 191.391C1059.47 172.635 1026.47 161.655 990.903 161.655C948.593 161.655 909.912 177.196 880.253 202.882C847.031 156.306 792.562 125.938 731.003 125.938C710.378 125.938 690.549 129.347 672.049 135.632C641.719 56.321 564.917 0 474.964 0C365.074 0 274.811 84.0525 264.924 191.391C237.691 172.635 204.691 161.655 169.127 161.655C75.7206 161.655 0 237.396 0 330.828C0 424.259 75.7206 500 169.127 500C249.735 500 317.172 443.592 334.138 368.086C371.481 401.603 420.842 421.991 474.964 421.991Z"
            fill="url(#paint0_radial_52_49)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_52_49"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(868 250) rotate(88.4631) scale(1499.21 469.444)"
            >
              <stop stop-color="#FFE794" />
              <stop offset="1" stop-color="#C8A220" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
