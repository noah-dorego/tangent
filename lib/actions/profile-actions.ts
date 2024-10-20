import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export const fetchBanner = async (user_id: string | undefined) => {
  const { data, error } = await supabase.storage
    .from("avatars")
    .download("profile_media/user_id/avatar1.png");

  return data;
};
