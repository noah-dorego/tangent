import { Feed } from "@/components/general/feed-container";

export default async function Home() {
  return (
    <main>
      <Feed feedType={"HOME"} />
    </main>
  );
}
