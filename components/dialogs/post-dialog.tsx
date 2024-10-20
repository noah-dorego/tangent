"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/clerk-react";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function PostDialog() {
  const { user } = useUser();

  const [postText, setPostText] = useState("");

  const supabase = createClient();

  const createPost = async () => {
    const { data, error } = await supabase
      .from("posts")
      .insert({
        post_id: uuidv4(),
        user_id: user?.id,
        created_at: new Date().toString(),
        description: postText,
        media: {},
        likes: {},
        comments: {},
      })
      .select();
    console.log(data);
    error && console.log(error);
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Start a Tangent</DialogTitle>
      </DialogHeader>
      <div className="py-2">
        <Textarea
          placeholder="What's up?"
          onChange={(e) => setPostText(e.target.value)}
        />
      </div>
      <DialogFooter>
        <Button type="submit" onClick={createPost}>
          Post
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
