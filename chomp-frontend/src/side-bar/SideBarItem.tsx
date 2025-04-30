import React from "react";
import { Link } from "react-router-dom";

type SidebarItemProps = {
  to: string;
  name: string;
  profilePicture: string;
  isOpen: boolean;
};

export const SidebarItem: React.FC<SidebarItemProps> = ({
  to,
  name,
  profilePicture,
  isOpen,
}) => {
  return (
    <li className="flex items-center space-x-3">
      <Link
        to={to}
        className={`user-link group flex items-center space-x-3 rounded-lg hover:bg-gray-700 transition-all duration-300 ${
          isOpen ? "p-3 w-full" : "p-3 ml-1 justify-center"
        }`}
      >
        <img
          src={profilePicture}
          alt={`${name}'s profile`}
          className={`rounded-full object-cover transition-all duration-300 ${
            isOpen ? "w-8 h-8" : "w-10 h-10"
          }`}
        />
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isOpen
              ? "opacity-100 max-w-[200px] ml-2"
              : "opacity-0 max-w-0"
          }`}
        >
          <span className="text-white whitespace-nowrap">{name}</span>
        </div>
      </Link>
    </li>
  );
};
