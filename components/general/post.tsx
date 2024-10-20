import { Suspense } from "react";
import { clerkClient } from "@clerk/nextjs/server";

import { Skeleton } from "../ui/skeleton";
import { BiLike } from "react-icons/bi";
import { MdOutlineModeComment } from "react-icons/md";

interface PostProps {
  postData: Post;
}

export async function Post({ postData }: PostProps) {
  let userData = await clerkClient().users.getUser(postData.user_id);
  let username = userData.username;

  return (
    <Suspense
      fallback={<Skeleton className="w-[450px] md:w-[600px] h-150px" />}
    >
      <div
        key={postData.post_id}
        className="w-[450px] md:w-[600px] p-4 bg-gray-800 rounded-lg text-md"
      >
        {postData.description}
        <div className="flex justify-between items-center mt-4">
          <a href="x">{username}</a>
          <div className="flex justify-end gap-4">
            <BiLike
              className="hover:cursor-pointer  hover:text-gray-500"
              size={24}
            />
            <MdOutlineModeComment
              className="hover:cursor-pointer hover:text-gray-500"
              size={24}
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
