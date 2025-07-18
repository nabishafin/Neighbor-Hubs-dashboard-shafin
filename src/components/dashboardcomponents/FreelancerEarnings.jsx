import React, { useState, useMemo } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

const FreelancerEarningsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [freelancers, setFreelancers] = useState([
    {
      id: "#1234",
      name: "Rakib Hasan",
      amount: 240,
      profit: 5,
      payable: 235,
      status: "unpaid",
    },
    {
      id: "#1235",
      name: "Rakib Hasan",
      amount: 240,
      profit: 5,
      payable: 235,
      status: "unpaid",
    },
    {
      id: "#1236",
      name: "Rakib Hasan",
      amount: 240,
      profit: 10,
      payable: 235,
      status: "unpaid",
    },
    {
      id: "#1237",
      name: "Rakib Hasan",
      amount: 240,
      profit: 5,
      payable: 235,
      status: "paid",
    },
    {
      id: "#1238",
      name: "Rakib Hasan",
      amount: 240,
      profit: 10,
      payable: 235,
      status: "unpaid",
    },
    {
      id: "#1239",
      name: "Rakib Hasan",
      amount: 240,
      profit: 5,
      payable: 235,
      status: "unpaid",
    },
    {
      id: "#1240",
      name: "Rakib Hasan",
      amount: 240,
      profit: 10,
      payable: 235,
      status: "paid",
    },
    {
      id: "#1241",
      name: "Sarah Ahmed",
      amount: 320,
      profit: 15,
      payable: 305,
      status: "unpaid",
    },
    {
      id: "#1242",
      name: "John Smith",
      amount: 180,
      profit: 8,
      payable: 172,
      status: "unpaid",
    },
    {
      id: "#1243",
      name: "Maria Garcia",
      amount: 450,
      profit: 20,
      payable: 430,
      status: "paid",
    },
    {
      id: "#1244",
      name: "Ahmed Ali",
      amount: 290,
      profit: 12,
      payable: 278,
      status: "unpaid",
    },
    {
      id: "#1245",
      name: "Lisa Johnson",
      amount: 380,
      profit: 18,
      payable: 362,
      status: "unpaid",
    },
    {
      id: "#1246",
      name: "David Brown",
      amount: 210,
      profit: 9,
      payable: 201,
      status: "paid",
    },
    {
      id: "#1247",
      name: "Emma Wilson",
      amount: 350,
      profit: 16,
      payable: 334,
      status: "unpaid",
    },
    {
      id: "#1248",
      name: "Michael Davis",
      amount: 275,
      profit: 11,
      payable: 264,
      status: "unpaid",
    },
  ]);

  const handlePaymentAction = (id, action) => {
    setFreelancers((prev) =>
      prev.map((freelancer) =>
        freelancer.id === id
          ? { ...freelancer, status: action === "pay" ? "paid" : "unpaid" }
          : freelancer
      )
    );
  };

  const filteredFreelancers = useMemo(() => {
    return freelancers.filter(
      (freelancer) =>
        freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        freelancer.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [freelancers, searchTerm]);

  const paginatedFreelancers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredFreelancers.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredFreelancers, currentPage]);

  const totalPages = Math.ceil(filteredFreelancers.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mt-5">
      <div className="mx-auto">
        {/* Header */}
        <div className="p-6" style={{ backgroundColor: "#D46A6A" }}>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Freelancer List</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search freelancers..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10 pr-4 py-2 bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 w-80"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-center text-xs font-medium text-[#D46A6A] uppercase tracking-wider">
                    SI NO.
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-[#D46A6A] uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-[#D46A6A] uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-[#D46A6A] uppercase tracking-wider">
                    Profit
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-[#D46A6A] uppercase tracking-wider">
                    Payable
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-[#D46A6A] uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paginatedFreelancers.map((freelancer) => (
                  <tr key={freelancer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                      {freelancer.id}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">
                      {freelancer.name}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">
                      ${freelancer.amount}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">
                      ${freelancer.profit}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">
                      ${freelancer.payable}
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-medium">
                      {freelancer.status === "paid" ? (
                        <span className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-green-100 text-green-800">
                          Paid
                        </span>
                      ) : (
                        <button
                          onClick={() =>
                            handlePaymentAction(freelancer.id, "pay")
                          }
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white hover:opacity-90 transition-opacity"
                          style={{ backgroundColor: "#D46A6A" }}
                        >
                          Pay Now
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-4 py-6 border-t border-gray-200 flex justify-center">
            <nav className="flex items-center space-x-2">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </button>

              {/* Page Numbers */}
              {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                let pageNumber;
                if (totalPages <= 7) {
                  pageNumber = i + 1;
                } else {
                  if (currentPage <= 4) {
                    pageNumber = i + 1;
                  } else if (currentPage >= totalPages - 3) {
                    pageNumber = totalPages - 6 + i;
                  } else {
                    pageNumber = currentPage - 3 + i;
                  }
                }

                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md border ${
                      pageNumber === currentPage
                        ? "border-red-400 text-white shadow-sm"
                        : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                    style={
                      pageNumber === currentPage
                        ? { backgroundColor: "#D46A6A" }
                        : {}
                    }
                  >
                    {pageNumber}
                  </button>
                );
              })}

              {totalPages > 7 && currentPage < totalPages - 3 && (
                <>
                  <span className="px-2 py-2 text-sm text-gray-500">...</span>
                  <button
                    onClick={() => handlePageChange(totalPages)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                  >
                    {totalPages}
                  </button>
                </>
              )}

              {/* Next Button */}
              <button
                onClick={() =>
                  handlePageChange(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerEarningsPage;
