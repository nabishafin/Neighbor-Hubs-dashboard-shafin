import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, LogOut, User, Settings } from "lucide-react"; // Removed Search as it wasn't used
import { Link, useNavigate } from "react-router-dom";
import { MobileSidebar } from "./DashboardSidebar"; // Import MobileSidebar

export default function DashboardHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/signin");
    // You might also want to clear user session/token here
  };

  return (
    <header className="bg-[#FCEED3] text-[#D46A6A] px-4 py-4 sm:px-8 sm:py-4">
      <div className="flex items-center justify-between">
        {/* Left section of the header */}
        <div className="flex items-center gap-4">
          {/* Mobile Sidebar Trigger (Burger Button) - Visible only on small screens */}
          <div className="lg:hidden">
            <MobileSidebar />
          </div>

          {/* Welcome back! text - Hidden on small screens if MobileSidebar is present,
              or always visible depending on desired layout */}
          <h1 className="text-lg sm:text-xl font-semibold">
            <span className="hidden sm:inline font-bold text-3xl">
              Welcome back!
            </span>
            {/* Show a simpler greeting on mobile if needed, or rely on desktop only */}
            <span className="inline sm:hidden font-semibold text-xl text-gray-800">
              Hello!
            </span>
          </h1>
        </div>

        {/* Right section of the header */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Notifications Button */}
          <Link to={"/dashboard/notificatons"}>
            <Button
              variant="ghost"
              size="icon"
              className="text-white bg-white rounded-full relative"
            >
              <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center text-[10px] sm:text-xs">
                3
              </span>
            </Button>
          </Link>

          {/* User Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10"
              >
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />{" "}
                  {/* Replace with actual user image */}
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => navigate("/dashboard/settings/profile")}
              >
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/dashboard/settings")}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
