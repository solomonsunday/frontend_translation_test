import { useState } from "react";
import { ArrowUpIcon, EyeIcon } from "../../assets/svgs";
import ArrowItemGroup from "../ArrowItemGroup/ArrowItemGroup";
import DashboardDetails from "../DashboardDetails/DashboardDetails";
import DashboardNavItems from "../DashboardNavItems/DashboardNavItems";
import Overview from "../Overview/Overview";

export default function Dashboard() {
  const [activeDashboardItem, setActiveDashboardItem] = useState<string>("");

  return (
    <div className=" h-[90%] ">
      <div className="bg-[#000435] pt-10 relative h-[45%] text-white">
        <div className=" flex justify-between items-end px-20">
          <div className="">
            <p className=" text-xs font-medium">TOTAL BALANCE </p>
            <div className="flex gap-x-5 items-end">
              <p className=" text-[2.5rem]">$30,000</p>
              <ArrowItemGroup
                text="$328.32 Today, Feb 15"
                className=" text-sm text-white mb-3"
                backgroundColour=" bg-lime-400 "
                element={<ArrowUpIcon className="w-3 h-3" />}
              />
            </div>
          </div>
          <div className=" flex gap-x-5 text-[#b4b5b6]">
            <DashboardNavItems
              text="view analytics"
              image={
                <img
                  src={EyeIcon}
                  alt="eyeIcon"
                  className="w-4 h-4 cursor-pointer"
                />
              }
              activeItem={activeDashboardItem}
              setActiveItem={setActiveDashboardItem}
            />
            <div className="w-[.0625rem] h-[30px] border border-[#5d5f60]"></div>

            <DashboardNavItems
              text="send money"
              image={
                <ArrowUpIcon
                  className="w-4 h-4 cursor-pointer"
                  stroke="#b4b5b6"
                />
              }
              activeItem={activeDashboardItem}
              setActiveItem={setActiveDashboardItem}
            />
            <DashboardNavItems
              text="add money"
              image={<p className=" text-white text-lg">+</p>}
              activeItem={activeDashboardItem}
              setActiveItem={setActiveDashboardItem}
              className=" bg-gray-900 text-white"
            />
            <div className=" bg-gray-900 text-white rounded-full flex justify-center items-center h-8 w-8"><p className="mb-3">...</p></div>
          </div>
        </div>
        <Overview />
      </div>
      <DashboardDetails />
    </div>
  );
}
