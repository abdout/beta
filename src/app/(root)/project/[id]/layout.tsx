'use client';
import Header from "@/component/project/layout/header";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  params: any; 
  
}

const Layout: React.FC<LayoutProps> = ({ children, params}) => {
  return (
    <div>
      <Header params={params} />
      <main className="mt-4">
      {children}
      </main>
    </div>
  );
};

export default Layout;
