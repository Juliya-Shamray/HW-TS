/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useDataPosts } from "../hooks";
import { PostItem } from "./PostItem";

export const PostList = () => {
  const { posts } = useDataPosts();
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      `}
    >
      {posts.map((post) => (
        <PostItem key={post.id} data={post} />
      ))}
    </div>
  );
};
