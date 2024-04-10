"use client";
import SmIcon from "@/component/atom/icon/sm";
import Burger from "@/component/atom/icon/burger";
import { UserButton } from "@/component/auth/user-button";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <>
      <div className="fixed right-0 top-3 flex justify-end items-center gap-4 pr-7">
        <Icon icon={"ri:search-fill"} height="30" className="opacity-70 hover:opacity-100 transition-opacity duration-200" />
        <Icon icon={"ri:notification-fill"} height="30" className="opacity-70 hover:opacity-100 transition-opacity duration-200" />
        <Icon icon={"fluent:dark-theme-24-regular"} height="32" className="opacity-70 hover:opacity-100 transition-opacity duration-200" />
        <div className="profile opacity-70 hover:opacity-100 transition-opacity duration-200">
          <div className="profile-overlay"></div>
          <div className="z-20 w-full h-full">
            <UserButton />
          </div>
        </div>
      </div>

      <div className="hidden">
        <Burger />
      </div>
    </>
  );
};

export default Header;