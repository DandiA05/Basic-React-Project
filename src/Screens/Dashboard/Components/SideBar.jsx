import { useState } from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const [idMenu, setIdMenu] = useState(1);

  const menu = [
    { id: 1, title: "UP COMING", path: "up_coming" },
    { id: 2, title: "POPULAR", path: "popular" },
    { id: 3, title: "NOW PLAYING", path: "now_playing" },
  ];

  return (
    <div>
      {menu.map((item) => (
        <Link key={item.id} to={`./${item.path}`}>
          <div
            className={`${
              idMenu === item.id ? "bg-gray-200" : ""
            } cursor-pointer p-4 hover:bg-gray-200`}
            onClick={() => setIdMenu(item.id)}
          >
            <p>{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
