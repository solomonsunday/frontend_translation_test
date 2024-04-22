import { useState } from "react";
import {
  ArrowUpIcon,
  FileIcon,
  FileOrangeIcon,
  PlusIcon,
  StackIcon,
  StackPinkIcon,
  profileCircleFilledIcon,
  profileCircleIcon,
} from "../../assets/svgs";
import ArrowItemGroup from "../ArrowItemGroup/ArrowItemGroup";
import OverviewCard, { OverviewCardProps } from "../OverviewCard/OverviewCard";

export default function Overview() {
  const [expandedCardId, setExpandedCardId] = useState<number>(0);

  const overViewItems: OverviewCardProps[] = [
    {
      expanded: expandedCardId,
      setExpanded: setExpandedCardId,
      title: "business account",
      hoverImage: profileCircleFilledIcon,
      image: profileCircleIcon,
      arrowItem: (
        <ArrowItemGroup
          text="12.3%"
          className=" text-[.75rem] font-medium "
          backgroundColour=" bg-lime-400 "
          element={<ArrowUpIcon className="w-3 h-3" />}
        />
      ),
      price: "$33,842",
      hoverText: "view account details",
      index: 1,
    },
    {
      expanded: expandedCardId,
      setExpanded: setExpandedCardId,
      title: "tax reserve",
      hoverImage: FileOrangeIcon,
      image: FileIcon,
      price: (
        <span>
          $700<span className=" !text-lg text-gray-200">.00</span>
        </span>
      ),
      hoverText: "edit tax automation",
      index: 2,
      arrowItem: (
        <ArrowItemGroup
          text="12.3%"
          className=" text-[.75rem] font-medium "
          backgroundColour=" bg-red-600 "
          element={<ArrowUpIcon className="w-3 h-3 rotate-90" stroke="#fff" />}
        />
      ),
    },
    {
      expanded: expandedCardId,
      setExpanded: setExpandedCardId,
      title: "business savings",
      hoverImage: StackPinkIcon,
      image: StackIcon,
      price: "$1,623",
      hoverText: "view account details",
      index: 3,
    },
  ];

  return (
    <div className=" mt-10">
      <div className=" flex gap-x-3 items-center px-20">
        <div className=" bg-[#2d2e2f] rounded-full h-7 w-7 flex items-center justify-center relative cursor-pointer">
          <img src={PlusIcon} alt="eyeIcon" className="w-4 h-4" />
          <p className=" absolute text-2xl bottom-0">x</p>
        </div>
        <p className=" text-lg">Overview</p>
        <p className="text-[#b4b5b6] text-xs">Last 30 days</p>
      </div>
      <div
        className={`mt-5 flex gap-x-5 justify-between overflow-x-hidden px-20 pb-1  ${
          expandedCardId === 3 && "pl-0"
        } ${(expandedCardId === 1 || expandedCardId === 2) && "pr-0"}`}
      >
        {overViewItems?.map((item) => {
          return (
            <OverviewCard
              key={item.index}
              expanded={expandedCardId}
              setExpanded={setExpandedCardId}
              index={item?.index}
              title={item?.title}
              image={item?.image}
              arrowItem={item?.arrowItem}
              price={item.price}
              hoverText={item?.hoverText}
              hoverImage={item?.hoverImage}
            />
          );
        })}
      </div>
    </div>
  );
}
