"use client";

import * as React from "react";
import { useUser } from "@clerk/clerk-react";
import { PostDialog } from "@/components/dialogs/post-dialog";
import Image from "next/image";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  GoHome,
  GoGlobe,
  GoCircle,
  GoPerson,
  GoPlus,
  GoSearch,
} from "react-icons/go";
import Link from "next/link";

export function NavMenu() {
  const { user } = useUser();

  return (
    <Dialog>
      <div className="flex flex-row xl:flex-col w-screen xl:w-[225px] justify-center xl:justify-start gap-8 md:gap-12 xl:gap-3 text-left fixed bottom-0 xl:top-3 xl:left-3">
        <Link key={"home"} href={"/"} className="w-max hidden xl:inline">
          <Image
            className="relative dark:invert mb-4 hover:cursor-pointer invisible md:visible"
            src="/tangent_title.svg"
            alt="Next.js Logo"
            width={140}
            height={20}
            priority
          />
        </Link>
        <Link
          key={"home-page"}
          href={"/"}
          className="flex items-center xl:gap-3 rounded-lg border border-transparent px-2 py-3 hover:bg-gray-100 hover:dark:bg-neutral-800/70"
        >
          <GoHome size={28} />
          <h2 className="hidden xl:inline text-xl font-semibold">Home</h2>
        </Link>
        <div
          key={"search"}
          className="flex items-center xl:gap-3 rounded-lg border border-transparent px-2 py-3 hover:bg-gray-100 hover:dark:bg-neutral-800/70"
        >
          <GoSearch size={28} />
          <h2 className="hidden xl:inline text-xl font-semibold">Search</h2>
        </div>
        <Link
          key={"explore"}
          href={"/explore"}
          className="flex items-center xl:gap-3 rounded-lg border border-transparent px-2 py-3 hover:bg-gray-100 hover:dark:bg-neutral-800/70"
        >
          <GoGlobe size={28} />
          <h2 className="hidden xl:inline text-xl font-semibold">Explore</h2>
        </Link>

        <div
          //key={"purl"}
          //href={"/purl"}
          className="flex items-center xl:gap-3 rounded-lg border border-transparent px-2 py-3" // hover:bg-gray-100 hover:dark:bg-neutral-800/70
        >
          <GoCircle size={28} color="grey" />
          <h2 className="hidden xl:inline text-xl font-semibold text-gray-500 select-none">
            Purl
          </h2>
        </div>

        <Link
          key={"profile"}
          href={`/profile/${user?.username}`}
          className="flex items-center xl:gap-3 rounded-lg border border-transparent px-2 py-3 hover:bg-gray-100 hover:dark:bg-neutral-800/70"
        >
          <GoPerson size={28} />
          <h2 className="hidden xl:inline text-xl font-semibold">Profile</h2>
        </Link>
        <DialogTrigger asChild>
          <div
            onClick={() => console.log("start a branch")}
            className="flex items-center cursor-pointer gap-3 rounded-lg border border-transparent px-2 py-3 bg-blue-500"
          >
            <GoPlus size={28} />
            <h2 className="hidden xl:inline text-xl font-semibold">
              Start a tangent
            </h2>
          </div>
        </DialogTrigger>
        <PostDialog />
      </div>
    </Dialog>
  );
}
