import { useState } from "react";

export function Feed() {
  return (
    <div className="flex min-h-screen flex-col gap-3 items-center justify-between p-8 overflow-auto">
      <div className="w-[450px] md:w-[600px] pt-2 pb-4 px-2 bg-gray-800 rounded-lg text-md">
        This is a post
      </div>
      <div className="w-[450px] md:w-[600px] pt-2 pb-4 px-2 bg-gray-800 rounded-lg text-md h-screen">
        This is a post
      </div>
    </div>
  );
}
