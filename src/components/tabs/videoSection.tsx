import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import {
  IoVideocamOutline,
  IoMicOutline,
  IoChatbubblesOutline,
} from "react-icons/io5";
import { LuScreenShare } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import ReactPlayer from "react-player/youtube";

type Props = {};

const VideoSection = (props: Props) => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-y-16 md:gap-x-16 w-full items-start">
      <div className="space-y-3">
        <div className="flex flex-row md:flex-col gap-6">
          <div className=" relative">
            <Image
              src="https://images.pexels.com/photos/5088179/pexels-photo-5088179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={400}
              width={500}
              alt=""
              className="w-[250px] rounded-3xl"
            />
            <p className="absolute left-0 bottom-0 rounded-bl-3xl rounded-r-3xl px-4 py-2 bg-gray-300 bg-opacity-80">
              Ridha
            </p>
          </div>
          <div className=" relative">
            <Image
              src="https://images.pexels.com/photos/6325968/pexels-photo-6325968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={400}
              width={500}
              alt=""
              className="w-[250px] rounded-3xl"
            />
            <p className="absolute left-0 bottom-0 rounded-bl-3xl rounded-r-3xl px-4 py-2 bg-gray-300 bg-opacity-80">
              Mr. Kaur
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 md:grid-cols-3 gap-3">
          <div className="flex flex-col items-center gap-2">
            <Button className="bg-[#F0F1F3] hover:bg-[#e0e0e0] text-black w-10 h-10">
              <IoVideocamOutline />
            </Button>
            <p className="text-sm">Cam</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button className="bg-[#F0F1F3] hover:bg-[#e0e0e0] text-black w-10 h-10">
              <IoMicOutline />
            </Button>
            <p className="text-sm">Mic</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button className="bg-[#F0F1F3] hover:bg-[#e0e0e0] text-black w-10 h-10">
              <LuScreenShare />
            </Button>
            <p className="text-sm">Share</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button className="bg-[#F0F1F3] hover:bg-[#e0e0e0] text-black w-10 h-10">
              <IoChatbubblesOutline />
            </Button>
            <p className="text-sm">Chat</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button className="bg-[#008BA3] hover:bg-[#008ba3bb] text-white w-10 h-10">
              <IoIosLogOut />
            </Button>
            <p className="text-sm">Leave</p>
          </div>
        </div>
      </div>
      <div className="w-full aspect-video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=CDokUdux0rc"
          width="100%"
          height="80%"
        />
      </div>
    </div>
  );
};

export default VideoSection;
