export {};

declare global {
  /* INTERFACES */

  interface Post {
    post_id: string;
    user_id: string;
    created_at: string;
    description: string;
    media: {};
    likes: {};
    comments: {};
  }

  /* TYPES */

  type FeedType = "HOME" | "PERSONAL" | "EXPLORE";
  type Tags = "Self-Improvement" | "Scenery" | "Advice" | "Hobbies";
}
