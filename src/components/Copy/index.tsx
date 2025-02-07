"use client";
import { CopyButtonIcon } from "@/Images";
import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className=" font-freshman min-h-[33px]"
    >
      {copied ? "Copied!" : <CopyButtonIcon />}
    </button>
  );
}
