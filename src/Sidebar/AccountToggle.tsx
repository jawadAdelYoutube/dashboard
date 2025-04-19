import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function AccountToggle() {
  return (
    <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
      <button className="flex p-0.5 hover:bg-stone-300 rounded cursor-pointer transition-colors relative w-full items-center gap-2">
        <img
          src="https://api.dicebear.com/9.x/notionists/svg"
          className="size-8 rounded shrink-0 bg-violet-500 shadow"
        />
        <div className="text-start">
          <span className="text-sm font-bold block">Jawad Adel</span>
          <span className="text-xs block text-stone-500">
            ja3388999@gmail.com
          </span>
        </div>
        <div>
          <div className="flex flex-col items-center  p-1 ml-5  rounded-lg">
            <FiChevronUp className="text-sm text-stone-500  " />

            <FiChevronDown className="text-sm text-stone-500  " />
          </div>
        </div>
      </button>
    </div>
  );
}

export default AccountToggle;
