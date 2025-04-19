import React from "react";

function Plan() {
  return (
    <div className="sticky flex top-[calc(100vh_-_48px-_25px)] flex-col h-12 border-t border-stone-300 justify-end text-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold">Enterprise</p>
          <p className="text-stone-500">pay as you go</p>
        </div>

        <button className="px-2 py-1.5 font-medium bg-black hover:bg-black/50 transition rounded-md text-stone-100 cursor-pointer">
          Upgrade plan
        </button>
      </div>
    </div>
  );
}

export default Plan;
