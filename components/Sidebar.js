import React from "react";
import Link from "next/link";
import { AiFillHome, AiFillAppstore, AiFillSetting } from "react-icons/ai";

const Sidebar = ({ onMenuSelect }) => {
  return (
    <div className="flex flex-col h-screen w-64 bg-gray-900 text-gray-300 shadow-lg">
      <div className="py-5 pl-5 border-b border-gray-700">
        <h1 className="text-xl font-bold text-white">Dashboard</h1>
      </div>
      <ul className="flex-grow overflow-y-auto">
        <li
          className="p-4 hover:bg-gray-700"
          onClick={() => onMenuSelect("users")}
        >
          <a className="flex items-center space-x-2">
            <AiFillHome />
            <span>Usuários</span>
          </a>
        </li>
        <li
          className="p-4 hover:bg-gray-700"
          onClick={() => onMenuSelect("apps")}
        >
          <a className="flex items-center space-x-2">
            <AiFillAppstore />
            <span>Aplicativos</span>
          </a>
        </li>
        <li
          className="p-4 hover:bg-gray-700"
          onClick={() => onMenuSelect("serverStatus")}
        >
          <a className="flex items-center space-x-2">
            <AiFillSetting />
            <span>Status do Servidor</span>
          </a>
        </li>
      </ul>
      <div className="mt-auto py-5 px-5">
        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition-colors duration-200">
          Logout
        </button>
        <p className="text-center text-white text-xs mt-4">Versão 1.0</p>
      </div>
    </div>
  );
};

export default Sidebar;
