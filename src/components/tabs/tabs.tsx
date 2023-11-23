"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { PiStudent, PiPresentation } from "react-icons/pi";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GrDocumentImage } from "react-icons/gr";
import VideoSection from "./videoSection";
import { Button } from "../ui/button";

interface Tab {
  id: string;
  label: JSX.Element;
}

const tabs: Tab[] = [
  {
    id: "1",
    label: (
      <div className="flex items-center gap-3">
        <PiStudent />
        <p className="hidden md:block">Classroom</p>
      </div>
    ),
  },
  {
    id: "2",
    label: (
      <div className="flex items-center gap-3">
        <TfiWrite />
        <p className="hidden md:block">Whiteboard</p>
      </div>
    ),
  },
  {
    id: "3",
    label: (
      <div className="flex items-center gap-3">
        <AiOutlineYoutube />
        <p className="hidden md:block">Videos</p>
      </div>
    ),
  },
  {
    id: "4",
    label: (
      <div className="flex items-center gap-3">
        <PiPresentation />
        <p className="hidden md:block">Slide Show</p>
      </div>
    ),
  },
  {
    id: "5",
    label: (
      <div className="flex items-center gap-3">
        <IoDocumentTextOutline />
        <p className="hidden md:block">Documents</p>
      </div>
    ),
  },
  {
    id: "6",
    label: (
      <div className="flex items-center gap-3">
        <GrDocumentImage />
        <p className="hidden md:block">Doc.Cam</p>
      </div>
    ),
  },
];

interface TabContents {
  [key: string]: JSX.Element;
}

const tabContents: TabContents = {
  "1": (
    <div className="w-full h-full flex justify-center items-center text-3xl">
      Classroom
    </div>
  ),
  "2": (
    <div className="w-full h-full flex justify-center items-center text-3xl">
      Whiteboard
    </div>
  ),
  "3": <VideoSection />,
  "4": (
    <div className="w-full h-full flex justify-center items-center text-3xl">
      Slide Show
    </div>
  ),
  "5": (
    <div className="w-full h-full flex justify-center items-center text-3xl">
      Documents
    </div>
  ),
  "6": (
    <div className="w-full h-full flex justify-center items-center text-3xl">
      Doc.Cam
    </div>
  ),
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[2].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="mt-6 md:mt-16 w-full">
      <div className="flex justify-between items-center bg-[#F0F1F3] h-16 p-2 rounded-full">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-black/60"
            } relative rounded-full h-full px-3 text-sm font-medium text-black transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </Button>
        ))}
      </div>
      <div className="mt-6 mx-1 w-full">{tabContents[activeTab]}</div>
    </div>
  );
};

export default Tabs;
