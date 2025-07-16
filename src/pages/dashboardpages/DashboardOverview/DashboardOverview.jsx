import MonthlyEarnings from "../../../components/dashboardcomponents/MonthlyEarnings";
import StatsOverview from "../../../components/dashboardcomponents/StatsOverview";

const DashboardOverview = () => {
  return (
    <div className=" space-y-6">
      {/* Stats Overview */}
      <StatsOverview />
      {/* Monthly Earnings */}
      <MonthlyEarnings />
    </div>
  );
};

export default DashboardOverview;
