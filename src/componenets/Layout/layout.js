import React from "react";
import Footer from "./Footer/Footer";
import Menubar from "./navbar/Menubar";

function Layout({ children }) {
  return (
    <div>
      <Menubar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
