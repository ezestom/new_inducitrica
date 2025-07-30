import { Children } from "react";
import { Drawer } from "vaul";

export default function MyDrawer() {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <button className="rounded p-2 text-gray-600 z-50 hover:scale-105600/75 hover:scale-105 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
        <Drawer.Content className="bg-slate-50 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0 z-50">
          <div className="p-4 bgWhite rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className=" mx-auto">
              <Drawer.Title className="font-medium mb-4">
                <h2 className="text-2xl font-bold text-center text-[--secondary]">
                  Inducítrica
                </h2>
              </Drawer.Title>
            </div>
          </div>
          {/* Navigation Links */}
          <div className="flex flex-col space-y-4 p-4">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition duration-200"
            >
              Services
            </a>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
