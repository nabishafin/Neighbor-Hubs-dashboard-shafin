import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const earningsData = [
  { month: "Jan", amount: 4000, date: new Date(2024, 0, 1) },
  { month: "Feb", amount: 2200, date: new Date(2024, 1, 8) },
  { month: "Mar", amount: 8000, date: new Date(2024, 2, 1) },
  { month: "Apr", amount: 8400, date: new Date(2024, 3, 1) },
  { month: "May", amount: 8000, date: new Date(2024, 4, 1) },
  { month: "Jun", amount: 8200, date: new Date(2024, 5, 1) },
  { month: "Jul", amount: 8400, date: new Date(2024, 6, 1) },
  { month: "Aug", amount: 4200, date: new Date(2024, 7, 1) },
  { month: "Sep", amount: 2400, date: new Date(2024, 8, 1) },
  { month: "Oct", amount: 7800, date: new Date(2024, 9, 1) },
  { month: "Nov", amount: 8000, date: new Date(2024, 10, 1) },
  { month: "Dec", amount: 7600, date: new Date(2024, 11, 1) },
];

const formatCurrency = (value) => {
  if (value >= 1000) {
    return `€${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 2)}k`;
  }
  return `€${value}`;
};

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg text-xs">
        <p className="font-medium text-gray-900">{label}</p>
        <p className="text-gray-600">
          Earnings:{" "}
          <span className="font-semibold text-[#D46A6A]">
            {formatCurrency(payload[0].value)}
          </span>
        </p>
      </div>
    );
  }
  return null;
};

const Earnings = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const filteredData = selectedDate
    ? earningsData.filter(
        (item) => formatDate(item.date) === formatDate(selectedDate)
      )
    : earningsData;

  return (
    <div
      className="select-none outline-none focus:outline-none"
      style={{
        outline: "none",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
      }}
      tabIndex={-1}
      onFocus={(e) => e.preventDefault()}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div
        className="p-5 text-white bg-[#D46A6A] outline-none focus:outline-none"
        tabIndex={-1}
      >
        Earning
      </div>
      <div
        className="w-full rounded-none border-none shadow-none outline-none focus:outline-none"
        tabIndex={-1}
      >
        <div
          className="flex justify-between p-4 outline-none focus:outline-none"
          tabIndex={-1}
        >
          <div
            className="text-black font-medium outline-none focus:outline-none"
            tabIndex={-1}
          ></div>
          <div
            className="flex items-center gap-4 outline-none focus:outline-none"
            tabIndex={-1}
          >
            <input
              type="date"
              value={selectedDate ? formatDate(selectedDate) : ""}
              onChange={(e) =>
                setSelectedDate(
                  e.target.value ? new Date(e.target.value) : null
                )
              }
              className="px-2 py-1 text-sm bg-white text-black rounded outline-none ring-0 border-none shadow-none focus:outline-none focus:ring-0 focus:border-none focus:shadow-none active:outline-none active:ring-0 active:border-none active:shadow-none"
              placeholder="YYYY/MM/DD"
              style={{
                outline: "none",
                boxShadow: "none",
                border: "none",
              }}
            />
          </div>
        </div>
        <div
          className="p-4 shadow-none border-none outline-none focus:outline-none"
          style={{
            outline: "none",
            userSelect: "none",
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
          }}
          tabIndex={-1}
          onFocus={(e) => e.preventDefault()}
          onMouseDown={(e) => e.preventDefault()}
        >
          <div
            className="h-120 outline-none focus:outline-none"
            style={{
              outline: "none",
              userSelect: "none",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              msUserSelect: "none",
            }}
            tabIndex={-1}
            onFocus={(e) => e.preventDefault()}
            onMouseDown={(e) => e.preventDefault()}
          >
            <ResponsiveContainer width="100%" height={500}>
              <BarChart
                data={filteredData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#e2e8f0"
                  horizontal={true}
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#64748b" }}
                  height={60}
                  padding={{ left: 20, right: 20 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#64748b" }}
                  tickFormatter={formatCurrency}
                  domain={[0, 10000]}
                  ticks={[0, 2000, 4000, 6000, 8000, 10000]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="amount"
                  fill="#D46A6A"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={35}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
