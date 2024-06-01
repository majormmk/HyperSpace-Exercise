import Image from "next/image";

import { Inter } from "next/font/google";

import { useState } from "react";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`flex min-h-[100vh] flex-row items-center justify-around p-24 ${inter.className}`}
    >
      <button
        className="p-5 rounded-full border-gray-300 border hover:bg-white hover:text-black"
        onClick={() => setOpen(!open)}
      >
        Click here for Pop Up
      </button>
      <Link href={"/creative-page"}>
        <button className="p-5 rounded-full border-gray-300 border hover:bg-white hover:text-black">
          Click here for 3D Model
        </button>
      </Link>
      {open && (
        <div
          className={
            "fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
          }
        >
          <div className="p-10 rounded-2xl flex flex-col bg-slate-500 w-[500px] h-[500px] justify-center">
            <button
              className="p-5 rounded-full border-red-800 border hover:bg-red-800 hover:text-white"
              onClick={() => setOpen(!open)}
            >
              Close Popup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
