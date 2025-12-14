import React from "react";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../assets/avatar.jpg";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between bg-white px-6 py-4 shadow-sm mb-4">
      <h1 className="text-xl font-semibold">Ecommerce Dashboard</h1>
    </header>
  );
};

export default Header;
