import React from "react";
import { Command } from "cmdk";
import {
  FiBarChart,
  FiHome,
  FiLogIn,
  FiPlus,
  FiSettings,
} from "react-icons/fi";
interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  loading: boolean;
}

function CommandMenu({ open, setOpen, loading }: Props) {
  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      className="fixed inset-0 bg-stone-950/50 align-center justify-center transition"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-white rounded-lg shadow-md p-4 m-auto mt-20 overflow-hidden items-center"
      >
        <Command.Input
          placeholder="search"
          className="relative border-b border-stone-300 text-stone-500 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-0"
        />

        <Command.List>
          {loading && <Command.Loading>Hang on…</Command.Loading>}

          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="Actions" className="text-stone-700 pl-2 pt-2">
            <Command.Item className="text-stone-500 p-0.5 pl-5 flex items-center gap-2 hover:bg-stone-100 rounded cursor-pointer">
              <FiPlus />
              create group
            </Command.Item>

            <Command.Item className="text-stone-500 p-0.5 pl-5 flex items-center gap-2 hover:bg-stone-100 rounded cursor-pointer">
              <FiPlus />
              new page
            </Command.Item>
          </Command.Group>

          <Command.Group
            heading="Personal"
            className="text-stone-700 pl-2 pt-2"
          >
            <Command.Item className="text-stone-500 p-0.5 pl-5 flex items-center gap-2 hover:bg-stone-100 rounded cursor-pointer">
              <FiHome />
              dashboard
            </Command.Item>
            <Command.Item className="text-stone-500 p-0.5 pl-5 flex items-center gap-2 hover:bg-stone-100 rounded cursor-pointer">
              <FiSettings className="text-stone-500" />
              settings
            </Command.Item>
            <Command.Item className="text-stone-500 p-0.5 pl-5 flex items-center gap-2 hover:bg-stone-100 rounded cursor-pointer">
              <FiBarChart className="text-stone-500" />
              statics
            </Command.Item>
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  );
}

export default CommandMenu;
