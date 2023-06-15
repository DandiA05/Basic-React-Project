import { useEffect, useState } from "react";
import Content from "./Components/UpComing";
import Header from "./Components/Header";
import { SideBar } from "./Components/SideBar";
import { Outlet } from "react-router-dom";

const Dashboard = ({ id }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      <Header
        isShow={showSidebar}
        sidebar={() => setShowSidebar((prev) => !prev)}
      />
      <div className="flex flex-row h-screen ">
        <div
          className={`${
            showSidebar
              ? "lg:block z-20 absolute h-screen w-3/4 bg-gray-100"
              : "lg:block hidden basis-1/4 bg-gray-100"
          }`}
        >
          <SideBar />
        </div>
        {/* basis-3/4 */}
        <div className={" basis-3/4"}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
