"use client";
import Link from 'next/link';
import { Icon } from "@iconify/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/component/auth/ui/dropdown-menu";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/component/auth/ui/avatar";
import { useCurrentUser } from "@/hook/use-current-user";
import { LogoutButton } from "@/component/auth/logout-button";

export const UserButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-black">
            <Icon icon={"iconamoon:profile-fill"} height="17" color="white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#fcfcfc] w-44 mt-2 z-50" align="end">
        <Link href="/profile">

          <DropdownMenuItem>
            <Icon icon={"iconamoon:profile-thin"} height="25" />
            Profile
          </DropdownMenuItem>

        </Link>
        <Link href="/setting">

          <DropdownMenuItem>
            <Icon icon={"circum:settings"} height="25" />
            Setting
          </DropdownMenuItem>

        </Link>
        <Link href="/community">

          <DropdownMenuItem>
            <Icon icon={"ph:circle-thin"} height="25" />
            Community
          </DropdownMenuItem>

        </Link>
        <LogoutButton>
          <DropdownMenuItem>
            <Icon icon={"material-symbols-light:logout-rounded"} height="25" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};