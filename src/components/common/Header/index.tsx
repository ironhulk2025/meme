import { Telegram } from "@/Images";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <div className=" felx flex-col items-center justify-center px-5 md:px-[60px] pt-[32px]">
   
      <header className="container mx-auto max-w-[88rem] bg-[#FFFBEE] py-[10px] px-5 md:px-[32px] rounded-[40px] flex flex-row items-center justify-between gap-[32px]">
        <div className="flex flex-row items-center justify-start gap-[32px]">
          <p className="text-[#000] font-freshman text-[18px] headingMobile md:text-[32px] leading-[100%] heading"
          
            style={{
            paintOrder:"stroke fill"
          }}>
            SUPERBOWL
          </p>
          <a className="hidden md:flex flex-col items-center" href="https://t.me/superbowl_official">
            <Telegram />
          </a>
          <a className="hidden md:flex flex-col items-center" href="https://x.com/superbowl_ofcl">
            <FaXTwitter className="text-[24px]" />
          </a>
        </div>

        <button
          className="capitalize hidden md:flex px-[30px] font-jockey py-[15px]  flex-col items-center justify-center bg-[#FFECAC] border-[2px] border-solid border-[#1C1C1C] rounded-[40px] "
          style={{
            boxShadow: "2px 2px 0px 0px #000",
          }}
        >
          {" "}
          buy{" "}
        </button>
        <div
          className=" md:hidden  flex flex-row items-center gap-4 "
        
        >
          {" "}
          
          <a className="flex md:hidden flex-col items-center" href="https://t.me/superbowl_official">
            <FaTelegramPlane className="text-[20px]" />

          </a>
          <a className="flex md:hidden flex-col items-center" href="https://x.com/superbowl_ofcl">
            <FaXTwitter className="text-[20px]" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
