import { getPostsData } from "@/lib/posts";
import PostCard from '../components/PostCard';

export async function getStaticProps() {
  const allPostsData = getPostsData();
  return {
    props: { allPostsData },
  };
};
export default function Home({ allPostsData }: any) {
  return (
    <div className="my-8 rounded-lg">
    <div className="grid grid-cols-3 ">
      {allPostsData.map((post: any) => (
        <PostCard key={post.postId} post={post} />
      ))}
    </div>
  </div>
  );
}
