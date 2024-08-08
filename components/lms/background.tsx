"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import Hmm from '@/components/lms/VrLms'


export default function BackgroundBoxesDemo() {
  return (
    <div className="h-full  relative -z-10 w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />

<Hmm/>
     
    </div>
  );
}
