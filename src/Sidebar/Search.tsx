import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import CommandMenu from "./CommandMenu";

function Search() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-stone-100 rounded-lg px-2 mb-2 text-sm py-2 shadow flex items-center">
        <div className="mr-2">
          <FiSearch />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-stone-100 outline-none w-full text-sm text-stone-500 placeholder:text-stone-500"
          onFocus={(e) => {
            setOpen(true);
            e.target.blur();
          }}
        />
        <span className="absolute text-xs ml-2 bg-white p-1 rounded items-center gap-0.5 font-bold right-2 flex">
          ⌘K
        </span>
      </div>
      <CommandMenu open={open} setOpen={setOpen} loading={false} />
    </>
  );
}

export default Search;
