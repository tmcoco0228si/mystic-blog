import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }: any) => {
  return (
    <Link href={`/posts/${post.postId}`}>
      <div className="mx-2 h-auto">
        <div className="rounded-md">
          <Image
            src={`/${post.frontMatter.image}`}
            width={1200}
            height={700}
            alt={post.frontMatter.title}
          />
        </div>
      </div>
      <div className="px-2 py-4">
        <h1 className="font-bold text-lg">{post.frontMatter.title}</h1>
        <span>{post.frontMatter.date}</span>
      </div>
    </Link>
  );
};

export default PostCard;
