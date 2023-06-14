import { useState } from "react";

export const SideBar = ({ selected, items }) => {
  const menu = [
    { id: 1, title: "Menu 1" },
    { id: 2, title: "Menu 2" },
    { id: 3, title: "Menu 3" },
  ];

  return (
    <div>
      {menu.map((item) => (
        <div
          className={`${
            items === item.id ? "bg-gray-200" : ""
          } cursor-pointer p-4 hover:bg-gray-200`}
          key={item.id}
          onClick={() => {
            selected(item.id);
          }}
        >
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};
