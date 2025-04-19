import React from "react";
import AccountToggle from "./AccountToggle";
import Search from "./Search";
import RouterSelect from "./RouterSelect";
import Plan from "./Plan";

function Sidebar() {
  return (
    <div>
      <div className="sticky top-0 h-[calc(100vh-48px-25px)] overflow-y-auto">
        <AccountToggle />
        <Search />
        <RouterSelect />
      </div>
      <Plan />
    </div>
  );
}

export default Sidebar;
