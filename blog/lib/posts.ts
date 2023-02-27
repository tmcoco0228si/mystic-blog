import fs from "fs";
import matter from "gray-matter";
export const getPostsData = () => {
  //配列でposts配下のファイル情報取得
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const postId = fileName.replace(/\.md$/, "");
    //ファイル内容取得
    const fileContent = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      postId,
    };
  });
  return posts;
};
