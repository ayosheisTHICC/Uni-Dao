//@ts-nocheck
"use client";
import { ConnectWallet, useAddress, useContract } from "@thirdweb-dev/react";
import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AddCourse } from "../component/add-course";
import { AddWorkshop } from "../component/add-workshop";
import { Analytics } from "../component/analytics";
import Wallet from "../thirdweb/Wallet"
import Purpose from '@/components/thirdweb/propose'
import GetProposal from "@/components/thirdweb/getProposal"


// Corrected Profile component
const Profile = () => {

  return (
    <div className="flex justify-center items-center w-full bg-black">
      <div className="text-white">
        <div className="w-[200px]">
          <Wallet/>
          THis 

        </div>

        <Purpose/>
        <GetProposal/>
  

      
        
        
      </div>
    </div>
  );
};

const Addcourse = () => {
  return (
    <div className="flex justify-center items-center w-full bg-black">
      <AddCourse />
    </div>
  );
};

const Addworkshop = () => {
  return (
    <div className="flex justify-center items-center w-full bg-black">
      <AddWorkshop />
    </div>
  );
};

const StudentStats = () => {
  return (
    <div className="flex justify-center items-center w-full bg-black">
      <Analytics />
    </div>
  );
};

export default function SidebarDemo() {
  const [currentTab, setCurrentTab] = useState("Addcourse");

  const links = [
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      component: "Profile",
    },
    {
      label: "Add Course",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      component: "Addcourse",
    },
    {
      label: "Workshop",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      component: "Addworkshop",
    },
    {
      label: "Activity",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      component: "StudentStats",
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  const renderComponent = () => {
    switch (currentTab) {
      case "Profile":
        return <Profile />;
      case "Addcourse":
        return <Addcourse />;
      case "Addworkshop":
        return <Addworkshop />;
      case "StudentStats":
        return <StudentStats />;
      default:
        return <Addcourse />;
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen w-full" 
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <button key={idx} onClick={() => setCurrentTab(link.component)}>
                  <SidebarLink link={link} />
                </button>
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <Image
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={100}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      {renderComponent()}
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
