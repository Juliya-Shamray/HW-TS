/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { PostItem } from "./PostItem";
import { PostInterface } from "../interfaces";

interface Props {
  posts: PostInterface[];
}

export const PostList = ({ posts }: Props) => {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        background-color: #ddd;
        margin-bottom: 20px;
      `}
    >
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};
