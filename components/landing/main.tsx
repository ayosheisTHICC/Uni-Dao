"use client";
import React from "react";
import Particles from "../magicui/particles";
import Globe from "@/components/landing/globe";
import { Button } from "../ui/button";
import Link from "next/link";

export default function main() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="flex flex-col relative">
        <div className="relative z-20">
          <Particles />
        </div>
        <div className="w-full absolute top-10 text-center leading-[0.9] z-40  ">
          <p className="text-7xl pb-4 ">
            <i>Introducing</i>
          </p>
          <p className=" font-helavita font-semibold text-gold text-[11rem] pb-4 ">
            UNI 3.0
          </p>
          <p className="text-white/60 max-w-xl mx-auto my-2 text-sm md:text-xl text-center ">
          a WEB3 University where Company can offer their authentic course, and user only need 1 DAO token to enter
          </p>

          <div className="flex w-full  justify-center mt-3 sm:mt-10 gap-3 sm:gap-5 z-40  ">
            
            <Button
              className="hover:bg-gold hover:text border border-yellow/20"
              variant={"outline"}
            >
              Enroll Now!
            </Button>
          </div>
        </div>

        <div className="absolute top-[170%] scale-[4.5] flex justify-center items-center w-full mx-auto z-30">
          <Globe />
        </div>
      </div>
    </div>
  );
}
