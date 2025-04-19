import React from "react";
import { FiCalendar } from "react-icons/fi";

function TopBar() {
  return (
    <div className="border-b border-stone-200 px-4 mb-4 mt-2 pb-2 pt-2">
      <div className="flex items-center justify-between p-0.5">
        <div>
          <span className="text-sm font-bold block">
            🚀 Good morning, Jawad!
          </span>
          <span className="text-xs block text-stone-400">Thursday 4 April</span>
        </div>
        <button className="flex items-center rounded bg-stone-100 px-3 py-1.5 hover:text-violet-700 hover:bg-violet-100 transition gap-2 cursor-pointer">
          <FiCalendar />
          <span>Prev 6 months</span>
        </button>
      </div>
    </div>
  );
}

export default TopBar;
