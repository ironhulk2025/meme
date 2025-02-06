import Header from "@/components/common/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import History from "@/components/History";
import MemeCoinLeaderBoard from "@/components/MemeCoinLeaderBoard";
import MemeSuperBowl from "@/components/MemeSuperBowl";
import SolanaVsEthereum from "@/components/SolanaVsEthereum";
import WhatIsThisAbout from "@/components/WhatIsThisAbout";

const page = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <WhatIsThisAbout />
      <SolanaVsEthereum />
      <MemeCoinLeaderBoard />
      <MemeSuperBowl />
      <div className="container max-w-[88rem] mx-auto flex flex-row  items-center justify-center w-full ">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AMlN3gAhSjA?start=0&amp;end=20"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <History />
      <Footer />
    </>
  );
};

export default page;
