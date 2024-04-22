import CashFlow from "../CashFlow/CashFlow";
import RecentTransaction from "../RecentTransaction/RecentTransaction";

export default function DashboardDetails() {
  return (
    <div className=" bg-white flex pt-[9.375rem] px-20 gap-10 pb-20">
      <RecentTransaction />
      <CashFlow />
    </div>
  );
}
