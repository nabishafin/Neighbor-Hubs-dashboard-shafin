import React, { useState, useMemo } from "react";
import { Search, ChevronLeft, ChevronRight, X } from "lucide-react";

const FreelancerPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFreelancer, setSelectedFreelancer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 7;

  // Sample data - in real app this would come from an API
  const freelancers = [
    {
      id: "#1234",
      name: "Rakib Hasan",
      email: "rakib25@gmail.com",
      joiningDate: "03-16-25",
      fullName: "Rakib Hasan",
      phone: "+8801712345678",
      location: "Dhaka, Bangladesh",
      bio: "I'm David, your go-to helping hand for everyday tasks around the neighborhood. I'm available for grocery shopping, dog walking, laundry pickup, pharmacy runs, and other daily errands you might need help with",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "#1235",
      name: "Sarah Ahmed",
      email: "sarah.ahmed@gmail.com",
      joiningDate: "03-15-25",
      fullName: "Sarah Ahmed",
      phone: "+8801812345678",
      location: "Chittagong, Bangladesh",
      bio: "Professional web developer with 5 years of experience. I specialize in React, Node.js, and modern web technologies. Always ready to help with your digital projects.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "#1236",
      name: "John Smith",
      email: "john.smith@gmail.com",
      joiningDate: "03-14-25",
      fullName: "John Smith",
      phone: "+8801912345678",
      location: "Sylhet, Bangladesh",
      bio: "Graphic designer and digital artist. I create stunning visuals for brands and businesses. Let me help bring your creative vision to life with professional designs.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "#1237",
      name: "Maria Garcia",
      email: "maria.garcia@gmail.com",
      joiningDate: "03-13-25",
      fullName: "Maria Garcia",
      phone: "+8801612345678",
      location: "Rajshahi, Bangladesh",
      bio: "Content writer and digital marketer. I help businesses grow their online presence through engaging content and strategic marketing campaigns.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "#1238",
      name: "Ahmed Ali",
      email: "ahmed.ali@gmail.com",
      joiningDate: "03-12-25",
      fullName: "Ahmed Ali",
      phone: "+8801512345678",
      location: "Khulna, Bangladesh",
      bio: "Mobile app developer specializing in iOS and Android applications. I build user-friendly apps that solve real-world problems.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "#1239",
      name: "Lisa Johnson",
      email: "lisa.johnson@gmail.com",
      joiningDate: "03-11-25",
      fullName: "Lisa Johnson",
      phone: "+8801412345678",
      location: "Barisal, Bangladesh",
      bio: "Data analyst and business intelligence specialist. I help companies make data-driven decisions through comprehensive analysis and reporting.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "#1240",
      name: "David Brown",
      email: "david.brown@gmail.com",
      joiningDate: "03-10-25",
      fullName: "David Brown",
      phone: "+8801312345678",
      location: "Rangpur, Bangladesh",
      bio: "Full-stack developer with expertise in Python, Django, and React. I build scalable web applications that deliver exceptional user experiences.",
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "#1241",
      name: "Emma Wilson",
      email: "emma.wilson@gmail.com",
      joiningDate: "03-09-25",
      fullName: "Emma Wilson",
      phone: "+8801212345678",
      location: "Comilla, Bangladesh",
      bio: "UX/UI designer passionate about creating intuitive and beautiful digital experiences. I focus on user-centered design principles.",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "#1242",
      name: "Michael Davis",
      email: "michael.davis@gmail.com",
      joiningDate: "03-08-25",
      fullName: "Michael Davis",
      phone: "+8801112345678",
      location: "Mymensingh, Bangladesh",
      bio: "Digital marketing expert specializing in SEO, social media marketing, and online advertising. I help businesses reach their target audience effectively.",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    },
  ];

  // Handle view profile
  const handleViewProfile = (freelancer) => {
    setSelectedFreelancer(freelancer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFreelancer(null);
  };

  // Filter and paginate data
  const filteredFreelancers = useMemo(() => {
    return freelancers.filter(
      (freelancer) =>
        freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        freelancer.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        freelancer.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const paginatedFreelancers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredFreelancers.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredFreelancers, currentPage]);

  const totalPages = Math.ceil(filteredFreelancers.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="">
      <div className=" mx-auto">
        {/* Header */}
        <div
          className="mb-8 p-6 rounded-lg shadow-sm"
          style={{ backgroundColor: "#D46A6A" }}
        >
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Freelancer List</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Name"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10 pr-4 py-2 border bg-white   rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 w-80"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className=" ">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className=" border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-center text-xs font-medium text-[#D46A6A] uppercase tracking-wider">
                    SI NO.
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-[#D46A6A] uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-[#D46A6A] uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-[#D46A6A] uppercase tracking-wider">
                    Joining Date
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-[#D46A6A] uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className=" divide-y divide-gray-200">
                {paginatedFreelancers.map((freelancer) => (
                  <tr key={freelancer.id} className="">
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-900">
                      {freelancer.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                      {freelancer.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                      {freelancer.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                      {freelancer.joiningDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <button
                        onClick={() => handleViewProfile(freelancer)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: "#D46A6A" }}
                      >
                        View profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className=" px-4 py-6 border-t border-gray-200 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </button>

              {Array.from({ length: Math.min(totalPages, 8) }, (_, i) => {
                let pageNumber;
                if (totalPages <= 8) {
                  pageNumber = i + 1;
                } else {
                  if (currentPage <= 4) {
                    pageNumber = i + 1;
                  } else if (currentPage >= totalPages - 3) {
                    pageNumber = totalPages - 7 + i;
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

              {totalPages > 8 && currentPage < totalPages - 3 && (
                <>
                  <span className="px-2 py-2 text-sm text-gray-500">...</span>
                  <button
                    onClick={() => handlePageChange(totalPages)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                  >
                    25
                  </button>
                </>
              )}

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

      {/* Modal */}
      {isModalOpen && selectedFreelancer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                CLIENT INFORMATION
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Profile Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={selectedFreelancer.avatar}
                  alt={selectedFreelancer.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-gray-200"
                />
              </div>

              {/* "See all details about" text */}
              <div className="text-center mb-2">
                <p className="text-sm text-gray-600">See all details about</p>
                <h3 className="text-xl font-semibold text-red-500 mb-4">
                  {selectedFreelancer.name}
                </h3>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">SI No.</span>
                  <span className="text-sm text-gray-900">
                    : {selectedFreelancer.id}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Full name</span>
                  <span className="text-sm text-gray-900">
                    : {selectedFreelancer.fullName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Email</span>
                  <span className="text-sm text-gray-900">
                    : {selectedFreelancer.email}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Phone</span>
                  <span className="text-sm text-gray-900">
                    : {selectedFreelancer.phone}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Location</span>
                  <span className="text-sm text-gray-900">
                    : {selectedFreelancer.location}
                  </span>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-gray-600">Bio</span>
                  <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {selectedFreelancer.bio}
                    </p>
                  </div>
                </div>
              </div>

              {/* OK Button */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={closeModal}
                  className="px-8 py-2 text-white font-medium rounded-md hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#D46A6A" }}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FreelancerPage;
