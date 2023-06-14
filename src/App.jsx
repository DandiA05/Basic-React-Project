import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import Users from "./components/Users";
import ReducerState from "./components/ReducerState";
import Dashboard from "./Screens/Dashboard";
const App = () => {
  return (
    <div className="container mx-auto">
      {/* <ReducerState></ReducerState> */}
      {/* <Users /> */}
      <Dashboard></Dashboard>
    </div>
  );
};

export default App;
