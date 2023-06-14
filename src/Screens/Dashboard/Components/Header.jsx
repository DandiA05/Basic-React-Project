import sideBarIcon from "../../../assets/sideBar.png";

const Header = ({ sidebar, isShow }) => {
  return (
    <div className="bg-neutral-200 p-4 justify-between flex items-center">
      <h1 className="font-extrabold lg:block hidden">The Dashboard</h1>

      <h1 className="lg:hidden block" onClick={sidebar}>
        {isShow ? "X" : <img src={sideBarIcon} />}
      </h1>
      <div className="bg-white h-7 w-7 rounded-full "></div>
    </div>
  );
};

export default Header;
