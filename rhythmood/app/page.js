"use client"
import MiddleSentence from "@/components/text/middle-sentence";
import Homepage from "@/pages/homepage/page";
import { useEffect, useState } from "react";

export default function Home() {

  const [loadingScreen, setLoadingScreen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(false)
    }, 2000);
  },[])

  return (
    <div className="h-screen w-screen bg-[#181818]">
      {
        loadingScreen ? 
        <MiddleSentence /> :
        <Homepage />
      }
    </div>
  );
}
