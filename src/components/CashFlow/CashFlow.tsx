import { useState } from "react";
import { Download, StarRingsIcon, Upload } from "../../assets/svgs";
import CashFlowTab, { CashFlowTabProps } from "../CashFlowTab/CashFlowTab";
import DashboardDetailHeader from "../DashboardDetailHeader/DashboardDetailHeader";
import PaymentCashFlow, {
  PaymentCashFlowProps,
} from "../PaymentCashFlow/PaymentCashFlow";

export default function CashFlow() {
  const [activeTab, setActiveTab] = useState<"money in" | "money out">(
    "money in"
  );

  const cashFlowTabItems: CashFlowTabProps[] = [
    {
      activeTab: activeTab,
      setActiveTab: setActiveTab,
      title: "money in",
      priceValue: "$5,083",
      icon: <Download className=" w-5 h-5" stroke="#fff" />,
    },
    {
      activeTab: activeTab,
      setActiveTab: setActiveTab,
      title: "money out",
      priceValue: (
        <span>
          $485<span className=" !text-lg text-gray-200 font-normal">.64</span>
        </span>
      ),
      icon: <Upload className=" w-5 h-5" stroke="#fff" />,
    },
  ];

  const paymentCashFlowItems: PaymentCashFlowProps[] = [
    {
      title: "Stripe",
      percent: 70,
      price: (
        <div className=" text-black">
          $3,514<span className=" text-gray-300">.72</span>
        </div>
      ),
      backgroundColour: "bg-purple-300",
    },
    {
      title: "Crypto Academy",
      percent: 20,
      price: (
        <div className=" text-black">
          $1,017<span className=" text-gray-300">.49</span>
        </div>
      ),
      backgroundColour: " bg-blue-300",
    },
    {
      title: "Wire Return",
      percent: 6,
      price: (
        <div className=" text-black">
          $318<span className=" text-gray-300">.44</span>
        </div>
      ),
      backgroundColour: " bg-pink-300",
    },
  ];

  return (
    <div className=" flex-1">
      <DashboardDetailHeader
        title="Cash Flow"
        activityText="Last 30 days"
        image={StarRingsIcon}
      />
      <div className="flex">
        {cashFlowTabItems?.map((item) => {
          return (
            <CashFlowTab
              key={item?.title}
              priceValue={item?.priceValue}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              title={item?.title}
              icon={item?.icon}
            />
          );
        })}
      </div>
      <div className=" py-4 grid gap-y-5">
        {paymentCashFlowItems?.map((item) => {
          return (
            <PaymentCashFlow
              key={item?.title}
              title={item?.title}
              percent={item?.percent}
              price={item?.price}
              backgroundColour={item?.backgroundColour}
            />
          );
        })}
      </div>
    </div>
  );
}
