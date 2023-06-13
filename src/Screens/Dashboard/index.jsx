import Content from "./Components/Content";
import Header from "./Components/Header";
import { Menu } from "./Components/Menu";

const Dashboard = () => {
  return (
    <div className="container mx-auto ">
      <Header />
      <div className="flex flex-row">
        <div className="basis-1/4">
          <Menu />
        </div>
        <div className="basis-3/4">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
