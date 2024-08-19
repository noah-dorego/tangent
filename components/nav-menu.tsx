import * as React from "react";
import Image from "next/image";
import { GoHome, GoGlobe, GoCircle, GoPerson } from "react-icons/go";
import Link from "next/link";

export function NavMenu() {
  return (
    <div className="flex flex-col w-[20%] text-left fixed top-3 left-3">
      <Link key={"home"} href={"/"} className="w-max">
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
        className="flex items-center gap-3 rounded-lg border border-transparent px-2 py-4 hover:bg-gray-100 hover:dark:bg-neutral-800/70"
      >
        <GoHome size={28} />
        <h2 className="text-2xl font-semibold">Home</h2>
      </Link>

      <Link
        key={"explore"}
        href={"/explore"}
        className="flex items-center gap-3 rounded-lg border border-transparent px-2 py-4 hover:bg-gray-100 hover:dark:bg-neutral-800/70"
      >
        <GoGlobe size={28} />
        <h2 className="text-2xl font-semibold">Explore</h2>
      </Link>

      <Link
        key={"purl"}
        href={"/purl"}
        className="flex items-center gap-3 rounded-lg border border-transparent px-2 py-4 hover:bg-gray-100 hover:dark:bg-neutral-800/70"
      >
        <GoCircle size={28} />
        <h2 className="text-2xl font-semibold">Purl</h2>
      </Link>

      <Link
        key={"profile"}
        href={"/profile"}
        className="flex items-center gap-3 rounded-lg border border-transparent px-2 py-4 hover:bg-gray-100 hover:dark:bg-neutral-800/70"
      >
        <GoPerson size={28} />
        <h2 className="text-2xl font-semibold">Profile</h2>
      </Link>
    </div>
  );
}
