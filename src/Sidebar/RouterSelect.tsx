import React from "react";
import { IconType } from "react-icons";
import {
  FiCloud,
  FiDollarSign,
  FiHelpCircle,
  FiHome,
  FiLink,
  FiSettings,
  FiUser,
} from "react-icons/fi";

function RouterSelect() {
  return (
    <div>
      <Router Icon={FiHome} text="Dashboard" selected={true} />
      <Router Icon={FiSettings} text="Settings" selected={false} />
      <Router Icon={FiUser} text="Team" selected={false} />
      <Router Icon={FiDollarSign} text="Finance" selected={false} />
      <Router Icon={FiLink} text="Integrations" selected={false} />
      <Router Icon={FiHelpCircle} text="Help" selected={false} />
    </div>
  );
}

const Router = ({
  Icon,
  text,
  selected,
}: {
  Icon: IconType;
  text: string;
  selected: boolean;
}) => {
  return (
    <button
      className={`flex flex-1 w-full items-center gap-2 p-1.5 my-1 rounded-lg text-stone-500 hover:bg-stone-300 cursor-pointer transition ${
        selected ? "text-stone-950 bg-white font-bold shadow" : ""
      }`}
    >
      <Icon />
      <span className={`text-stone-500 ${selected ? "text-stone-950" : ""}`}>
        {text}
      </span>
    </button>
  );
};

export default RouterSelect;
