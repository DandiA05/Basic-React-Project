import { useEffect, useState } from "react";
import Content from "./Components/Content";
import Header from "./Components/Header";
import { SideBar } from "./Components/SideBar";

const Dashboard = () => {
  const [idMenu, setIdMenu] = useState(1);
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
          <SideBar selected={setIdMenu} items={idMenu} />
        </div>
        <div className="basis-3/4">
          <Content item={idMenu} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
