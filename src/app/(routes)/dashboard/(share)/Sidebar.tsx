"use client";

import { USER_ROLE } from "@/config/site-config";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  Warehouse,
  ShoppingCart,
  ShoppingBag,
  ChartBar,
  LogOut,
  UserPlus,
  Users,
  ListCheck,
  UserRoundPen,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const Sidebar = () => {
  const router = useRouter();

  const auth = JSON.parse(localStorage.getItem("auth") as any);

  useEffect(() => {
    if (!auth?.email) {
      router.push("/");
    }
  }, [auth?.email, router]);

  const adminSidebarItem = [
    {
      icon: LayoutDashboard,
      label: "Admin Dashboard",
      href: "/dashboard/admin",
    },
    {
      icon: UserPlus,
      label: "Create User",
      href: "/dashboard/admin/create-user",
    },
    { icon: Users, label: "Manage User", href: "/dashboard/admin/manage-user" },
    { icon: LogOut, label: "Logout", href: "/" },
  ];

  const managerSidebarItem = [
    { icon: LayoutDashboard, label: "Manager Dashboard", href: "/dashboard" },
    {
      icon: Package,
      label: "Product Management",
      href: "/dashboard/manager/products",
    },
    {
      icon: Warehouse,
      label: "Inventory Management",
      href: "/dashboard/manager/inventory",
    },
    {
      icon: ShoppingCart,
      label: "Sales & POS",
      href: "/dashboard/manager/sales",
    },
    { icon: LogOut, label: "Logout", href: "/" },
  ];

  const employeeSidebarItem = [
    {
      icon: UserRoundPen,
      label: "Profile",
      href: "/dashboard/employee/profile",
    },
    {
      icon: ListCheck,
      label: "Manage Checkin/Checkout",
      href: "/dashboard/employee/manage-checkin-checkout",
    },
    { icon: LogOut, label: "Logout", href: "/" },
  ];

  const menuItems =
    auth?.role == USER_ROLE.ADMIN
      ? adminSidebarItem
      : auth?.role == USER_ROLE.MANAGER
      ? managerSidebarItem
      : employeeSidebarItem;

  const navigate = (nItem: any) => {
    if (nItem.label === "Logout") {
      localStorage.removeItem("auth");
      router.push("/");
      toast.success("Logout Success");
    } else {
      router.push(nItem.href);
    }
  };

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Mini Market
        </h2>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <p
            key={item.href}
            onClick={() => navigate(item)}
            className={cn(
              "flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 cursor-pointer",
              "hover:bg-gray-100 transition-colors duration-200",
              "active:bg-gray-200"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </p>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
