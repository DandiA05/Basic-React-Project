import { useState } from "react";

export const Menu = () => {
  const menu = [
    { id: 1, title: "Menu 1" },
    { id: 2, title: "Menu 2" },
    { id: 3, title: "Menu 3" },
  ];

  return (
    <div>
      {menu.map((item) => (
        <div className="cursor-pointer mb-2 hover:bg-slate-300" key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};
