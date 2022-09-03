import React from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { SideMenu } from "../sidemenu/SideMenu";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {/* Side Menu Coming Soon */}
      <SideMenu />
      <main style={{ minHeight: "72vh" }} className="container">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
