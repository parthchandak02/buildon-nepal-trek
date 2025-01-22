import { FullPost } from "@/app/_components/full-post";
import { getAllPosts } from "@/lib/api";

export default async function Index() {
  const allPosts = getAllPosts();
  const mainPost = allPosts[0];

  return (
    <main className="py-8">
      <FullPost content={mainPost.content} />
    </main>
  );
}
