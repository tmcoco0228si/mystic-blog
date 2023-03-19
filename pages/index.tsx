import { getPostsData } from "@/lib/posts";
import PostCard from "../components/PostCard";
import ThreeObject from "@/components/ThreeObject";

export async function getStaticProps() {
  const allPostsData = getPostsData();
  return {
    props: { allPostsData },
  };
}

export default function Home({ allPostsData }: any) {
  return (
    <>
    <div className="w-full">
      <ThreeObject />
      <div className="flex justify-center font-bold sm:text-base container">
        My name is trailstem. I work as a backend engineer in Osaka.
      </div>
      <div className="my-9 sm:px-4 container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allPostsData.map((post: any) => (
            <PostCard key={post.postId} post={post} />
          ))}
        </div>
      </div>

    </div>

    </>
  );
}
