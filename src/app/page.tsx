import SideBar from "@/components/layout/side-bar";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-30 items-center justify-center text-white">
      {/* <SideBar/> */}
      <button className="px-15 py-2 text-md bg-zinc-400/80 cursor-pointer text-shadow-2xs text-zinc-800 rounded-full hover:bg-zinc-400 transition-colors duration-150 ease-in-out">
        Hire
      </button>
      <button>
        Button
      </button>
      <button>
        Button
      </button>
      <button>
        Button
      </button>
    </div>
  );
}
