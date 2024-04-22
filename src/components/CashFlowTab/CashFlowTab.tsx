import { ReactElement } from "react";

export type CashFlowTabProps = {
  activeTab: "money in" | "money out";
  setActiveTab: (a: "money in" | "money out") => void;
  title: "money in" | "money out";
  priceValue: string | ReactElement;
  icon: ReactElement;
};
export default function CashFlowTab({
  activeTab,
  setActiveTab,
  title,
  priceValue,
  icon,
}: CashFlowTabProps) {
  return (
    <div
      onClick={() => setActiveTab(title)}
      className={`flex flex-1 cursor-pointer gap-x-3 p-5 group ${
        activeTab === title && "border-b-[#000435]"
      }  border-b-2 cash-flow-tab`}
    >
      <div
        className={` ${
          activeTab === title
            ? "bg-[#000435]"
            : " bg-[#b4b5b6] group-hover:bg-[#000435]"
        }  flex justify-center items-center p-2 rounded-full h-8 w-8  relative cash-flow-tab-icon`}
      >
        {icon}
      </div>
      <div>
        <p
          className={`${
            activeTab === title
              ? "text-[#000435]"
              : " text-[#b4b5b6] group-hover:text-[#000435]"
          } uppercase font-medium text-xs`}
        >
          {title}
        </p>
        <p
          className={`${
            activeTab === title
              ? "text-[#000435]"
              : " text-[#b4b5b6] group-hover:text-[#000435]"
          } font-medium text-2xl`}
        >
          {priceValue}
        </p>
      </div>
    </div>
  );
}
