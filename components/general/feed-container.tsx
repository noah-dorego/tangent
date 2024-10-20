import { createClient } from "@/utils/supabase/server";

import { Post } from "./post";

interface Props {
  feedType: FeedType;
}

export async function Feed({ feedType }: Props) {
  const supabase = createClient();
  const { data, error } = await supabase.from("posts").select();
  const posts = data as Post[];

  const postList = posts?.map((post) => (
    <Post key={post.post_id} postData={post} />
  ));

  return (
    <div className="flex min-h-screen flex-col gap-3 items-center p-8 overflow-auto">
      {postList ? postList : error?.details}
    </div>
  );
}
