import { type Author } from "@/interfaces/author";
import { PostBody } from "./post-body";
import markdownToHtml from "@/lib/markdownToHtml";

type Props = {
  content: string;
};

export async function FullPost({ content }: Props) {
  const htmlContent = await markdownToHtml(content || "");

  return (
    <article className="max-w-4xl mx-auto">
      <PostBody content={htmlContent} />
    </article>
  );
}
