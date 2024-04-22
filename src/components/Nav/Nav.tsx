import { useState } from "react";
import {
  ArrowUpDownIcon,
  Avatar,
  BellIcon,
  DiamondIcon,
  GearIcon,
  Logo,
  LogoReason,
  SearchIcon,
} from "../../assets/svgs";

type NavItemType =
  | "Dashboard"
  | "Payments"
  | "Transaction"
  | "Card"
  | "Invoices"
  | "Insights";

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeNavItem, setActiveNavItem] = useState<NavItemType>("Dashboard");

  const navItems: NavItemType[] = [
    "Dashboard",
    "Payments",
    "Transaction",
    "Card",
    "Invoices",
    "Insights",
  ];

  return (
    <nav className="bg-[#000435] shadow-md h-[10%]">
      <div className="mx-auto px-14 py-2 w-full flex items-center justify-between h-full">
        <div className="flex items-center gap-x-7">
          <img src={Logo} alt="logo" className="w-6 h-6 cursor-pointer" />
          <img
            src={DiamondIcon}
            alt="DiamondIcon"
            className="w-3 h-3 cursor-pointer"
          />

          <div className="flex text-white items-center gap-x-2 cursor-pointer">
            <img src={LogoReason} alt="logo-reason" className="w-6 h-6" />
            Framer
            <img
              src={ArrowUpDownIcon}
              alt="arrow-up-down"
              className="w-3 h-3 mr-2"
            />
          </div>
        </div>

        <div className="hidden md:flex flex-grow gap-x-1 items-center justify-center text-[#b4b5b6]">
          {navItems.map((item) => {
            return (
              <p
                key={item}
                className={`py-1 px-3 hover:bg-[#8a2be2] hover:text-white cursor-pointer ${
                  activeNavItem === item && "bg-[#8a2be2] text-white"
                }`}
                onClick={() => setActiveNavItem(() => item)}
              >
                {item}
              </p>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-x-5">
          <div className=" flex items-center gap-x-4">
            <img
              src={SearchIcon}
              alt="searchIcon"
              className="w-5 h-5 text-white cursor-pointer"
            />
            <img
              src={BellIcon}
              alt="bellIcon"
              className="w-5 h-5 cursor-pointer"
            />
          </div>

          <div className="w-[.0625rem] h-[30px] border border-[#5d5f60]"></div>
          <div className=" flex items-center gap-x-4">
            <img
              src={GearIcon}
              alt="gearIcon"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src={Avatar}
              alt="avatar"
              className="w-10 h-10 cursor-pointer"
            />
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <p className="block py-2 px-4 text-white">Home</p>
          <p className="block py-2 px-4 text-white">About</p>
          <p className="block py-2 px-4 text-white">Services</p>
        </div>
      )}
    </nav>
  );
}
