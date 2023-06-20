import { useState } from "react";
import "./App.css";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/ForgotPassword/NewPassword";
import Home from "./pages/Dashboard/Home";
import Fleets from "./pages/Dashboard/Fleets";
import Tracker from "./pages/Dashboard/Fleets/Tracker";

function App() {
  
  const routes = [
    { path: "/", Component: Login },
    { path: "/login", Component: Login },
    { path: "/register", Component: Register },
    { path: "/forgot-password", Component: ForgotPassword },
    { path: "/new-password", Component: NewPassword },
    { path: "/dashboard", Component: Home },
    { path: "/fleets", Component: Fleets },
    { path: "/fleets/track-fleet", Component: Tracker },
  ];

  return (
    <Routes>
      {routes.map((item, idx) => (
        <Route key={idx} path={item.path} Component={item.Component} />
      ))}
    </Routes>
  );
}

export default App;
