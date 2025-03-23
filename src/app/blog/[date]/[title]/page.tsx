import posts from "@/assets/posts.json";
import ReactMarkdown from "react-markdown";

export const generateStaticParams = () => posts;

interface PostProps {
  params: Promise<{ date: string; title: string }>;
}

const PostPage = async ({ params }: PostProps) => {
  const { date, title } = await params;

  const post = posts.find((post) => post.date === date && post.title === title);

  const postContent = await fetch(`http://localhost${post?.src}` || "");

  const text = await postContent.text();

  return (
    <section className="post">
      <ReactMarkdown>{text}</ReactMarkdown>
    </section>
  );
};

export default PostPage;
