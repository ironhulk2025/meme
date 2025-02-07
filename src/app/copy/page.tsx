import CopyButton from "@/components/Copy";
import TokenCopyCard from "@/components/TokenCopyCard";
import React from "react";

const page = () => {
  return (
    <div>
      <CopyButton text="Hello, Next.js 15!" />
      <TokenCopyCard/>
    </div>
  );
};

export default page;
