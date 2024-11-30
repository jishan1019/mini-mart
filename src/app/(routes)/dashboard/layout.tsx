import React from "react";
import Sidebar from "./(share)/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      {children}
    </div>
  );
};

export default DashboardLayout;
