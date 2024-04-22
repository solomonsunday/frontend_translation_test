import {
  DropboxIcon,
  SettingPlusIcon,
  SpotifyIcon,
  StripeIcon,
  ZendeskIcon,
} from "../../assets/svgs";
import DashboardDetailHeader from "../DashboardDetailHeader/DashboardDetailHeader";
import RecentTransactionItem, {
  RecentTransactionItemProps,
} from "./RecentTransactionItem";

export default function RecentTransaction() {
  const recentTransactionItems: RecentTransactionItemProps[] = [
    {
      title: "Stripe",
      icon: (
        <div className=" bg-[#000435] flex justify-center items-center px-3 py-3">
          <img
            src={StripeIcon}
            alt="icon"
            className="w-5 h-5 cursor-pointer bg-black"
          />
        </div>
      ),
      date: "Wed, 16 Feb, 18:11",
      category: "Business",
      price: (
        <div className=" text-green-400">
          +$1,223<span className=" text-green-200">.00</span>
        </div>
      ),
    },
    {
      title: "Dropbox",
      icon: (
        <div className=" bg-[#181c49] flex justify-center items-center px-3 py-3">
          <img
            src={DropboxIcon}
            alt="icon"
            className="w-5 h-5 cursor-pointer"
          />
        </div>
      ),
      date: "Tue, 15 Feb, 14:24",
      category: "Equipment",
      price: (
        <div className=" text-black">
          -$200<span className=" text-gray-300">.00</span>
        </div>
      ),
    },
    {
      title: "Zendesk",
      icon: (
        <div className=" bg-[#0a2d2ddf] flex justify-center items-center px-3 py-3">
          <img
            src={ZendeskIcon}
            alt="icon"
            className="w-5 h-5 cursor-pointer"
          />
        </div>
      ),
      date: "Wed, 16 Feb, 18:11",
      category: "Marketing",
      price: (
        <div className=" text-black">
          -$1,223<span className=" text-gray-300">.18</span>
        </div>
      ),
    },
    {
      title: "Spotify",
      icon: (
        <div className=" bg-black flex justify-center items-center px-3 py-3">
          <img
            src={SpotifyIcon}
            alt="icon"
            className="w-5 h-5 cursor-pointer"
          />
        </div>
      ),
      date: "Mon, 14 Feb, 16:40",
      category: "Entertainment",
      price: (
        <div className=" text-black">
          -$19<span className=" text-gray-300">.00</span>
        </div>
      ),
    },
  ];

  return (
    <div className=" flex-1 mr-5">
      <DashboardDetailHeader
        title="Recent Transactions"
        activityText="Last 5 activity"
        image={SettingPlusIcon}
      />
      <div>
        {recentTransactionItems?.map((item) => {
          return (
            <RecentTransactionItem
              key={item?.title}
              title={item?.title}
              icon={item?.icon}
              date={item?.date}
              category={item?.category}
              price={item?.price}
            />
          );
        })}
      </div>
    </div>
  );
}
