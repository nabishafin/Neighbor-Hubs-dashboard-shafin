import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Sample data with additional fields for the modal
const neighborData = [
  {
    id: 1,
    slNo: "#1234",
    name: "Rakib Hasan",
    email: "rakib123@gmail.com",
    joiningDate: "03-16-25",
    phone: "+8801634425785",
    location: "Pine street",
    profileImage: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    slNo: "#1235",
    name: "John Doe",
    email: "john.doe@gmail.com",
    joiningDate: "03-17-25",
    phone: "+8801634425786",
    location: "Oak avenue",
    profileImage: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    slNo: "#1236",
    name: "Sarah Wilson",
    email: "sarah.wilson@gmail.com",
    joiningDate: "03-18-25",
    phone: "+8801634425787",
    location: "Maple drive",
    profileImage: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    slNo: "#1237",
    name: "Mike Johnson",
    email: "mike.johnson@gmail.com",
    joiningDate: "03-19-25",
    phone: "+8801634425788",
    location: "Cedar lane",
    profileImage: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    slNo: "#1238",
    name: "Emily Davis",
    email: "emily.davis@gmail.com",
    joiningDate: "03-20-25",
    phone: "+8801634425789",
    location: "Birch road",
    profileImage: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 6,
    slNo: "#1239",
    name: "David Brown",
    email: "david.brown@gmail.com",
    joiningDate: "03-21-25",
    phone: "+8801634425790",
    location: "Elm street",
    profileImage: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 7,
    slNo: "#1240",
    name: "Lisa Anderson",
    email: "lisa.anderson@gmail.com",
    joiningDate: "03-22-25",
    phone: "+8801634425791",
    location: "Willow way",
    profileImage: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 8,
    slNo: "#1241",
    name: "James Miller",
    email: "james.miller@gmail.com",
    joiningDate: "03-23-25",
    phone: "+8801634425792",
    location: "Spruce circle",
    profileImage: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 1,
    slNo: "#1234",
    name: "Rakib Hasan",
    email: "rakib123@gmail.com",
    joiningDate: "03-16-25",
    phone: "+8801634425785",
    location: "Pine street",
    profileImage: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    slNo: "#1235",
    name: "John Doe",
    email: "john.doe@gmail.com",
    joiningDate: "03-17-25",
    phone: "+8801634425786",
    location: "Oak avenue",
    profileImage: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    slNo: "#1236",
    name: "Sarah Wilson",
    email: "sarah.wilson@gmail.com",
    joiningDate: "03-18-25",
    phone: "+8801634425787",
    location: "Maple drive",
    profileImage: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    slNo: "#1237",
    name: "Mike Johnson",
    email: "mike.johnson@gmail.com",
    joiningDate: "03-19-25",
    phone: "+8801634425788",
    location: "Cedar lane",
    profileImage: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    slNo: "#1238",
    name: "Emily Davis",
    email: "emily.davis@gmail.com",
    joiningDate: "03-20-25",
    phone: "+8801634425789",
    location: "Birch road",
    profileImage: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 6,
    slNo: "#1239",
    name: "David Brown",
    email: "david.brown@gmail.com",
    joiningDate: "03-21-25",
    phone: "+8801634425790",
    location: "Elm street",
    profileImage: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 7,
    slNo: "#1240",
    name: "Lisa Anderson",
    email: "lisa.anderson@gmail.com",
    joiningDate: "03-22-25",
    phone: "+8801634425791",
    location: "Willow way",
    profileImage: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 8,
    slNo: "#1241",
    name: "James Miller",
    email: "james.miller@gmail.com",
    joiningDate: "03-23-25",
    phone: "+8801634425792",
    location: "Spruce circle",
    profileImage: "/placeholder.svg?height=80&width=80",
  },
];

const Neighbor = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNeighbor, setSelectedNeighbor] = useState(null);
  const itemsPerPage = 12;

  // Filter data based on search term
  const filteredData = neighborData.filter(
    (neighbor) =>
      neighbor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      neighbor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handleViewProfile = (neighbor) => {
    setSelectedNeighbor(neighbor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNeighbor(null);
  };

  return (
    <div className="">
      {/* Header */}
      <div
        className="px-6 py-4 rounded-lg"
        style={{ backgroundColor: "#D46A6A" }}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">Neighbor List</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64 bg-white"
            />
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="">
        <div className="">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold text-[#D46A6A] text-center">
                  Sl NO.
                </TableHead>
                <TableHead className="font-semibold text-[#D46A6A] text-center">
                  Name
                </TableHead>
                <TableHead className="font-semibold text-[#D46A6A] text-center">
                  Email
                </TableHead>
                <TableHead className="font-semibold text-[#D46A6A] text-center">
                  Joining Date
                </TableHead>
                <TableHead className="font-semibold text-[#D46A6A] text-center">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentData.map((neighbor) => (
                <TableRow key={neighbor.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium text-center">
                    {neighbor.slNo}
                  </TableCell>
                  <TableCell className="text-center">{neighbor.name}</TableCell>
                  <TableCell className="text-center">
                    {neighbor.email}
                  </TableCell>
                  <TableCell className="text-center">
                    {neighbor.joiningDate}
                  </TableCell>
                  <TableCell className="text-center">
                    <Button
                      size="sm"
                      className="text-white"
                      style={{ backgroundColor: "#D46A6A" }}
                      onClick={() => handleViewProfile(neighbor)}
                    >
                      View profile
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>
              {[...Array(Math.min(totalPages, 7))].map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(pageNumber);
                      }}
                      isActive={currentPage === pageNumber}
                      style={
                        currentPage === pageNumber
                          ? {
                              backgroundColor: "#D46A6A",
                              borderColor: "#D46A6A",
                            }
                          : {}
                      }
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              {totalPages > 7 && (
                <>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(totalPages);
                      }}
                    >
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages)
                      setCurrentPage(currentPage + 1);
                  }}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>

      {/* Profile Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md bg-gray-50 border-0">
          <DialogHeader className="relative pb-0">
            <div className="flex justify-center">
              <DialogTitle
                className="text-center font-medium text-lg"
                style={{ color: "#D46A6A" }}
              >
                CLIENT INFORMATION
              </DialogTitle>
            </div>
          </DialogHeader>

          {selectedNeighbor && (
            <div className="flex flex-col items-center space-y-4 py-6">
              {/* Profile Image */}
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={selectedNeighbor.profileImage || "/placeholder.svg"}
                  alt={selectedNeighbor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and subtitle */}
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">
                  See all details about
                </p>
                <h3
                  className="text-xl font-medium"
                  style={{ color: "#D46A6A" }}
                >
                  {selectedNeighbor.name}
                </h3>
              </div>

              {/* Details */}
              <div className="w-full space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">SI No.</span>
                  <span className="font-medium">: {selectedNeighbor.slNo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Full name</span>
                  <span className="font-medium">: {selectedNeighbor.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email</span>
                  <span className="font-medium">
                    : {selectedNeighbor.email}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone</span>
                  <span className="font-medium">
                    : {selectedNeighbor.phone}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium">
                    : {selectedNeighbor.location}
                  </span>
                </div>
              </div>

              {/* OK Button */}
              <Button
                onClick={handleCloseModal}
                className="w-24 text-white mt-6"
                style={{ backgroundColor: "#D46A6A" }}
              >
                OK
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Neighbor;
