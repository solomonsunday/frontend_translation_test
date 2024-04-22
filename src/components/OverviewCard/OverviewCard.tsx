import { ReactElement } from "react";
import { ChartIcon, ChevronLeftIcon } from "../../assets/svgs";
import Chart from "../chart/Chart";

export type OverviewCardProps = {
  expanded: number;
  setExpanded: (a: number) => void;
  index: number;
  title: string;
  image: string;
  hoverImage: string;
  arrowItem?: ReactElement;
  price: ReactElement | string;
  hoverText: string;
};

export default function OverviewCard({
  expanded,
  setExpanded,
  index,
  image,
  hoverImage,
  arrowItem,
  title,
  price,
  hoverText,
}: OverviewCardProps) {
  return (
    <div
      className={`${
        expanded === index ? "w-[700px]" : "flex-1"
      }  overflow-y-hidden h-[12.5rem] bg-white pt-6 pl-6 shadow text-black group flex flex-col justify-between shrink-0`}
    >
      <div className="flex gap-x-2 w-full relative">
        <div
          className={` flex flex-col gap-y-4 ${
            expanded === index ? "w-[30%]" : "w-full"
          } `}
        >
          <div>
            <img
              src={hoverImage}
              alt="icon"
              className={`w-10 h-10 cursor-pointer group-hover:block  ${
                expanded === index ? "block" : "hidden"
              }`}
            />
            <img
              src={image}
              alt="icon"
              className={`w-10 h-10 cursor-pointer group-hover:hidden ${
                expanded === index && "hidden"
              }`}
            />
          </div>
          <div className=" flex gap-x-3">
            <p className=" uppercase text-[.75rem] font-semibold">{title}</p>
            {arrowItem}
          </div>
          <p
            className={`text-[2.5rem] ${
              expanded !== index && "group-hover:opacity-0 "
            } `}
          >
            {price}
          </p>
          <div
            className={` gap-x-2 items-center flex absolute -bottom-[12.5rem] w-full ${
              expanded !== index && "group-hover:bottom-0 "
            }`}
          >
            <div className=" capitalize border border-gray-300 w-[calc(100%_-_80px)] h-fit p-2 flex items-center justify-center text-[.75rem] cursor-pointer">
              {hoverText}
            </div>
            <div
              className=" bg-[#8a2be2] h-fit w-fit p-2 cursor-pointer rounded-full "
              onClick={() => setExpanded(index)}
            >
              <img src={ChartIcon} alt="chartIcon" className="w-4 h-4" />
            </div>
          </div>
        </div>
        {expanded === index && (
          <div className="flex bg-pink-60 w-[70%]">
            <div className=" flex-1">
              <Chart />
            </div>
            <div
              className="bg-gray-300 h-[70%] self-center rounded-sm flex items-center cursor-pointer"
              onClick={() => setExpanded(0)}
            >
              <img
                src={ChevronLeftIcon}
                alt="ChevronLeftIcon"
                className="w-4 h-4"
              />
            </div>
          </div>
        )}
      </div>

      <hr
        className={`  h-1 ${
          expanded !== index
            ? "group-hover:block w-[90%]  bg-gray-200 hidden"
            : "bg-purple-300 block"
        } `}
      />
    </div>
  );
}
