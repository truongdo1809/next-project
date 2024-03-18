import React from "react";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Navigation from "./components/Navigation";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Navigation/>
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default ClientLayout;
