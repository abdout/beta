'use client';
import { useState } from 'react';
import { Inter } from "next/font/google";
import "./../globals.css";
import Side from "@/component/layout/side";
import Header from "@/component/layout/header";
import { MainProvider } from "@/provider/main";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();
  const NoLayout = ['/', '/error', '/password', '/verification', '/join', '/reset']
  if (NoLayout.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <MainProvider>
      <html lang="en">
        <body className={`${inter.className} flex`}>
        <div className="flex w-full h-full">
          <div 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Side />
          </div>
          <div className={`transition-all duration-200 ease-in-out ${hovered ? 'pl-[13rem]' : 'pl-28'} pt-4 flex flex-col `}>
            {/* <Header /> */}
            {children}
          </div>
        </div>
        </body>
      </html>
    </MainProvider>
  );
}