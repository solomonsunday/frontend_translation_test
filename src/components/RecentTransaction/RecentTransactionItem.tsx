import { ReactElement } from "react";

export type RecentTransactionItemProps = {
  title: string;
  icon: ReactElement;
  date: string;
  category: string;
  price: ReactElement;
};

export default function RecentTransactionItem({
  title,
  icon,
  date,
  category,
  price,
}: RecentTransactionItemProps) {
  return (
    <div className="flex justify-between items-center hover:bg-gray-200 border-b p-3 cursor-pointer hover:p-4">
      <div className=" flex gap-x-2">
        {icon}
        <div>
          <p className=" text-[#000435] font-medium">{title}</p>
          <p className=" text-sm text-[#b4b5b6]">{date}</p>
        </div>
      </div>
      <div className=" bg-gray-100 flex justify-center items-center px-3 py-1">
        {category}
      </div>
      {price}
    </div>
  );
}
