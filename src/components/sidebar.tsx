import Image from "next/image";
import React from "react";
import Logo from "/public/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CiMenuFries } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { IoTimerOutline } from "react-icons/io5";
import { BsClipboardCheck } from "react-icons/bs";
import { GoEye } from "react-icons/go";
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlineBarChart } from "react-icons/md";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="px-4 py-6 bg-[#F0F1F3] min-h-screen my-auto flex flex-col justify-between items-center">
      <div className="w-10 h-10">
        <Image src={Logo} width={50} height={50} alt="logo" />
      </div>
      <div className="hidden md:block my-6 text-xl rotate-180">
        <CiMenuFries />
      </div>
      <div className="flex flex-col justify-evenly gap-y-10 md:h-[50%]">
        <div className="relative text-2xl">
          <div className="absolute right-0 h-2 w-2 rounded-full bg-red-500"></div>
          <GoBell />
        </div>
        <div className="text-2xl text-gray-400">
          <IoTimerOutline />
        </div>
        <div className="text-2xl text-gray-400">
          <BsClipboardCheck />
        </div>
        <div className="text-2xl text-gray-400">
          <GoEye />
        </div>
        <div className="text-2xl text-gray-400">
          <MdPeopleAlt />
        </div>
        <div className="text-2xl text-gray-400">
          <MdOutlineBarChart />
        </div>
      </div>
      <Avatar>
        <AvatarImage src="/avatar.png" alt="profile" />
        <AvatarFallback>AS</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Sidebar;
