import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  HashRouter,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Users from "./components/Users.jsx";
import Dashboard from "./Screens/Dashboard/index.jsx";
import Content from "./Screens/Dashboard/Components/UpComing.jsx";
import Content2 from "./Screens/Dashboard/Components/Popular.jsx";
import Content3 from "./Screens/Dashboard/Components/NowPlaying.jsx";
import Detail from "./Screens/Dashboard/Components/Detail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { path: "up_coming", element: <Content /> },
      { path: "popular", element: <Content2 /> },
      { path: "now_playing", element: <Content3 /> },
      { path: "popular/:id", element: <Detail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // </React.StrictMode>,

  <RouterProvider router={router} />

  // <BrowserRouter>
  //   <Routes>
  //     <Router path="/" element={<App />} />
  //   </Routes>
  // </BrowserRouter>

  // <HashRouter>
  //   <Routes>
  //     <Router path="/" element={<App />} />
  //     <Router path="/users" element={<Users />} />
  //   </Routes>
  // </HashRouter>
);
