import {
  LayoutDashboard,
  Users2,
  Settings,
  UserCog,
  Info,
  FileText,
  ScrollText,
  LogOut,
  ChevronRight,
  ChevronDown,
  Menu,
  User,
  DollarSign,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Or replace with your own Button
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Or use Dialog/Drawer if needed
import logo from "../../assets/logo.png";

// Utility: classNames
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Sidebar Items
const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Client",
    href: "/dashboard/clients",
    icon: User,
  },
  {
    title: "Freelancer",
    href: "/dashboard/freelancer",
    icon: Users2,
  },
  {
    title: "Earning",
    href: "/dashboard/earning",
    icon: DollarSign,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    children: [
      {
        title: "Profile",
        href: "/dashboard/settings/profile",
        icon: UserCog,
      },
      {
        title: "Terms & Condition",
        href: "/dashboard/settings/terms",
        icon: ScrollText,
      },
      {
        title: "Privacy Policy",
        href: "/dashboard/settings/privacy",
        icon: FileText,
      },
      {
        title: "About Us",
        href: "/dashboard/settings/about",
        icon: Info,
      },
    ],
  },
];

// Logo Section
function LogoSection() {
  return (
    <Link to="/dashboard">
      <div className="flex items-center p-6 flex-col justify-center">
        <div className="relative  mb-2">
          <img
            src={logo}
            alt="NeighborHubs Logo"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold text-gray-800">NeighborHubs</h2>
        </div>
      </div>
    </Link>
  );
}

// Sidebar Navigation
function SidebarNav({ onLinkClick }) {
  const location = useLocation();
  const pathname = location.pathname;
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpanded = (href) =>
    setExpandedItems((prev) =>
      prev.includes(href) ? prev.filter((i) => i !== href) : [...prev, href]
    );

  const isExpanded = (href) => expandedItems.includes(href);

  return (
    <nav className="flex-1 px-4 overflow-y-auto">
      <ul className="space-y-1">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          const isChildActive = item.children?.some(
            (child) => pathname === child.href
          );
          const hasChildren = !!item.children?.length;
          const expanded = isExpanded(item.href);

          return (
            <li key={item.href}>
              {hasChildren ? (
                <>
                  <Button
                    variant="ghost"
                    onClick={() => toggleExpanded(item.href)}
                    className={cn(
                      "w-full justify-between gap-3 h-12 rounded-lg mb-1",
                      isActive || isChildActive
                        ? "bg-gradient-to-r from-[#D46A6A] to-white text-white"
                        : "text-gray-700 hover:bg-orange-50 hover:text-orange-800"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </div>
                    {expanded ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                  <div
                    className={cn(
                      "transition-all overflow-hidden duration-200 ml-4",
                      expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <ul className="space-y-1 mt-1">
                      {item.children.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <li key={child.href}>
                            <Link to={child.href} onClick={onLinkClick}>
                              <Button
                                variant="ghost"
                                className={cn(
                                  "w-full justify-start gap-3 h-10 text-sm rounded-lg",
                                  isChildActive
                                    ? "bg-gradient-to-r from-[#D46A6A] to-white text-white"
                                    : "text-gray-600 hover:bg-orange-50 hover:text-orange-800"
                                )}
                              >
                                <child.icon className="h-4 w-4" />
                                {child.title}
                              </Button>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </>
              ) : (
                <Link to={item.href} onClick={onLinkClick}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-3 h-12 rounded-lg mb-1",
                      isActive
                        ? "bg-gradient-to-r from-[#D46A6A] to-white text-white"
                        : "text-gray-700 hover:bg-orange-50 hover:text-orange-800"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.title}</span>
                  </Button>
                </Link>
              )}
            </li>
          );
        })}
      </ul>

      {/* Log Out Button */}
      <div className="mt-auto ">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-12 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700"
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Log Out</span>
        </Button>
      </div>
    </nav>
  );
}

// Desktop Sidebar
function DesktopSidebar() {
  return (
    <div className="hidden lg:flex h-full w-64 flex-col bg-[#FCEED3]">
      <LogoSection />
      <SidebarNav />
    </div>
  );
}

// Mobile Sidebar
function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-gray-700 hover:bg-orange-100"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <div className="flex h-full flex-col bg-gradient-to-b from-orange-50 to-orange-100">
          <LogoSection />
          <SidebarNav onLinkClick={() => setOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
}

// Final Export
export default function DashboardSidebar() {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
}
