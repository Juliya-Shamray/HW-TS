/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PostList, PostSkeleton } from "./components";
import { Pagination } from "./components/Pagination";
import { useDataPosts } from "./hooks";
import { AddPostPopup } from "./components/AddPostPopup";

export const HomeFeature = () => {
  const { posts, isLoading, pagination, onChangePagination } = useDataPosts();

  return (
    <div
      css={css`
        margin-bottom: 100px;
      `}
    >
      <AddPostPopup />
      {isLoading ? <PostSkeleton /> : <PostList posts={posts} />}
      <Pagination onChange={onChangePagination} pagination={pagination} />
    </div>
  );
};
