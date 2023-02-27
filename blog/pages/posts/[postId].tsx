import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

//SSG
export async function getStaticProps({ params }: any) {
  const file = fs.readFileSync(`posts/${params.postId}.md`, "utf-8");
  const { data, content } = matter(file);
  return { props: { frontMatter: data, content } };
}

//SSG
export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      postId: fileName.replace(/\.md$/, ""),
    },
  }));
  console.log("paths:", paths);
  return {
    paths,
    fallback: false,
  };
}
const Post = ({ frontMatter, content }: any) => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="border-none">
        <Image
          src={`/${frontMatter.image}`}
          width={1200}
          height={700}
          alt={frontMatter.title}
        />
      </div>
      <h1 className="mt-12">{frontMatter.title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Post;
