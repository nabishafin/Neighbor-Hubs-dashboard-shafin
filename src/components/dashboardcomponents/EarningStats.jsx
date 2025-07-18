import { Users, Globe, DollarSign, Coins, DollarSignIcon } from "lucide-react";
const EarningStats = () => {
  return (
    <div className="bg-[#FCEED3]   p-4 rounded-lg shadow-sm flex flex-col md:flex-row justify-around items-center text-center space-y-4 md:space-y-0 md:space-x-4">
      {/* Total Client */}
      <div className="flex flex-col items-center flex-1 min-w-0 px-4 py-2 md:border-r md:border-[#5EAAA8]">
        <h2 className="text-lg font-semibold text-neutral-800 mb-2">
          Total Amount
        </h2>
        <div className="flex items-center gap-2">
          <DollarSignIcon className="w-10 h-10 text-[#e57373]" />
          <span className="text-4xl font-bold text-[#5EAAA8]">560</span>
        </div>
      </div>

      {/* Total Freelancer */}
      <div className="flex flex-col items-center flex-1 min-w-0 px-4 py-2 md:border-r md:border-[#5EAAA8]">
        <h2 className="text-lg font-semibold text-neutral-800 mb-2">
          Withdrawable
        </h2>
        <div className="flex items-center gap-2">
          <DollarSignIcon className="w-10 h-10 text-[#e57373]" />
          <span className="text-4xl font-bold text-[#5EAAA8]">560</span>
        </div>
      </div>

      {/* Total Earning */}
      <div className="flex flex-col items-center flex-1 min-w-0 px-4 py-2">
        <h2 className="text-lg font-semibold text-neutral-800 mb-2">
          Total Earning
        </h2>
        <div className="flex items-center gap-2">
          <DollarSignIcon className="w-10 h-10 text-[#e57373]" />
          <span className="text-4xl font-bold text-[#5EAAA8]">560</span>
        </div>
      </div>
    </div>
  );
};

export default EarningStats;
