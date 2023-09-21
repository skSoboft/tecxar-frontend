import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute"; // Import your ProtectedRoute component

// Import your page components
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Registration from "./pages/Registration";
import {nav} from "./navigations"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        {nav.map((r, i) => {
            if (r.isPrivate) {
              return <Route key={i} path={r.path} element={r.element} />;
            } else if (!r.isPrivate) {
              return <Route key={i} path={r.path} element={r.element} />;
            } else return false;
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
