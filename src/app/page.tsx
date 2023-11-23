import Sidebar from "@/components/sidebar";
import Tabs from "@/components/tabs/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export default function Home() {
  return (
    <main className="py-6 md:px-10 w-11/12 mx-auto md:w-full">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <Button className="md:block hidden bg-[#F0F1F3] hover:bg-[#e0e0e0] text-black w-10 h-10">
            {"<"}
          </Button>
          <Sheet>
            <SheetTrigger>
              <div className="block md:hidden p-0">{"<"}</div>{" "}
            </SheetTrigger>
            <SheetContent side="left" className="overflow-auto w-[200px]">
              <Sidebar />
            </SheetContent>
          </Sheet>
          <h1 className="font-bold text-xl md:text-3xl text-neutral-950">
            Basic Mathematics 101
          </h1>
        </div>
        <div className="flex items-center gap-3 md:gap-6">
          <Dialog>
            <DialogTrigger className="flex gap-3 items-center bg-transparent hover:bg-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-300 py-1 px-3 rounded-lg">
              <div className="w-10 h-10 flex justify-center items-center rounded-full text-white bg-[#008BA3]">
                <FaPhoneAlt />
              </div>
              <p className="hidden md:block text-base font-semibold text-neutral-950">
                Call Teacher
              </p>
            </DialogTrigger>
            <DialogContent className="w-[90%] md:w-full h-[200px] flex flex-col justify-between">
              <div className="bg-[#008BA3] h-[50%] md:rounded-t-lg flex justify-center items-center text-2xl text-white">
                Call Teacher
              </div>
              <div className="h-[50%] flex items-center justify-center gap-6">
                <p>+91 9876543210</p>
                <Button className="py-2 px-4 bg-neutral-950 text-white">
                  Call
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger className="flex gap-3 items-center bg-transparent hover:bg-transparent hover:shadow-lg hover:-translate-y-2 transition-all duration-300 py-1 px-3 rounded-lg">
              <div className="w-10 h-10 flex justify-center items-center rounded-full text-white bg-[#FF5F00]">
                <IoPerson />
              </div>
              <p className="hidden md:block text-base font-semibold text-neutral-950">
                Support
              </p>
            </DialogTrigger>
            <DialogContent className="w-[90%] md:w-full h-[200px] flex flex-col justify-between">
              <div className="bg-[#FF5F00] h-[50%] md:rounded-t-lg flex justify-center items-center text-2xl text-white">
                Support Mail
              </div>
              <div className="flex flex-col justify-center items-center gap-y-3">
                <input
                  className="w-[50%] outline-none border-b placeholder:italic placeholder:text-sm"
                  placeholder="Type your query"
                ></input>
                <div className="h-[50%] flex items-center justify-center gap-6">
                  <p>support@gmail.com</p>
                  <Button className="p-3 bg-neutral-950 text-white">
                    mail
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Tabs />
    </main>
  );
}
