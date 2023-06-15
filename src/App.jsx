import { useState } from "react";
import "./App.css";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  const routes = [
    { path: "/", Component: Login },
    { path: "/login", Component: Login },
    { path: "/register", Component: Register },
  ];

  return (
    <Routes>
      {routes.map((item, idx) => (
        <Route key={idx} path={item.path} Component={item.Component } />
      ))}
    </Routes>
  );
}

export default App;
