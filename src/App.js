import "./App.css";
import React from "react";
// import ReactDOM from "react-dom/client";
import Landingpage from "./stores/pages/Landingpage";
import Navbar from "./stores/components/Navbar";
import Products from "./stores/components/Products";
import Mobiles from "./stores/components/Mobiles";
import MobilePage from "./stores/pages/MobilePage";
import Computerpage from "./stores/pages/Computerpage";
import Speakerpage from "./stores/pages/Speakerpage";

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import MobileSingle from "./singles/MobileSingle";
import UserCart from "./stores/UserCart";
import Signin from "./stores/components/Signin";
import SignupPage from "./stores/pages/SignupPage";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Main App Component
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpage />} />

        <Route path="/mobiles" element={<MobilePage />} />
        <Route path="/computers" element={<Computerpage />} />
        <Route path="/speakers" element={<Speakerpage />} />
        <Route path="/mobiles/:id" element={<MobileSingle />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cart" element={<UserCart />} />
      </Routes>
    </div>
  );
};

export default App;
