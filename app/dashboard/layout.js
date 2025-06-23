import React from "react";
import SideBar from "./_components/SideBar.js";
// import Header from "./_components/Header"
function DashboardLayout({ children }) {
  return (
    <div>
      <div className="w-64 h-screen fixed">
        <SideBar />
      </div>
      {/* <Headers/> */}
      <div className="sm:ml-64">{children}</div>
    </div>
  );
}

export default DashboardLayout;
