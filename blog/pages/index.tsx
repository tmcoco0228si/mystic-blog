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
      <ThreeObject />
      <div className="flex justify-center font-bold	sm:text-base">
        My name is tmcoco0228si. I work as a backend engineer in Osaka.
      </div>
      <div className="my-9 rounded-lg">
        <div className="grid grid-cols-3 ">
          {allPostsData.map((post: any) => (
            <PostCard key={post.postId} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
