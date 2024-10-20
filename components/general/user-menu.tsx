"use client";
import { UserButton } from "@clerk/nextjs";
import { FaGear } from "react-icons/fa6";

export function UserMenu() {
  return (
    <UserButton
      appearance={{
        elements: {
          userButtonAvatarBox: "w-10 h-10", // Custom width and height
          userButtonPopoverActionButton__manageAccount: "hidden",
        },
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Link
          labelIcon={<FaGear size={12} />}
          label="Settings"
          href="/profile/settings"
        />
        <UserButton.Action label="signOut" />
      </UserButton.MenuItems>
    </UserButton>
  );
}
