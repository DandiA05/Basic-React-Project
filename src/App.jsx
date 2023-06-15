import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import Users from "./components/Users";
import ReducerState from "./components/ReducerState";
import Dashboard from "./Screens/Dashboard";
import FetchAPI from "./components/FetchAPI";
const App = () => {
  return (
    <div>
      {/* <ReducerState></ReducerState> */}
      {/* <Users /> */}
      {/* <Dashboard></Dashboard> */}
      <FetchAPI />
    </div>
  );
};

export default App;
