'use client';
import Navbar from "@/component/docs/layout/navbar";
import React, { ReactNode } from "react";



interface LayoutProps {
  children: React.ReactNode;
  
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      
      <main className="pt-14">
      <Navbar  />
      {children}
      </main>
    </div>
  );
};

export default Layout;