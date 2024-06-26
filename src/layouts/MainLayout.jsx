import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-148px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
