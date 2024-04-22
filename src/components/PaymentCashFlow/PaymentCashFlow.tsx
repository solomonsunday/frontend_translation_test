import { ReactElement } from "react";
import { TriangleIcon } from "../../assets/svgs";

export type PaymentCashFlowProps = {
  title: string;
  percent: number;
  price: ReactElement;
  backgroundColour: string;
};

export default function PaymentCashFlow({
  title,
  percent,
  price,
  backgroundColour,
}: PaymentCashFlowProps) {
  return (
    <div className=" px-5">
      <div className=" flex justify-between">
        <div className=" flex gap-x-2 items-center">
          <div
            className={` ${backgroundColour} flex justify-center items-center p-1 h-fit w-fit rounded-full`}
          >
            <img
              src={TriangleIcon}
              alt="TriangleIcon"
              className="w-4 h-4 cursor-pointer"
            />
          </div>
          <p>{title}</p>
          <div className=" bg-gray-100 flex justify-center items-center px-2 font-medium py-[1px] text-xs">
            %{percent}
          </div>
        </div>
        {price}
      </div>
      <div className=" mt-2">
        <div className="w-full h-2 bg-slate-200 ">
          <div
            className={` h-2 ${backgroundColour}`}
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
