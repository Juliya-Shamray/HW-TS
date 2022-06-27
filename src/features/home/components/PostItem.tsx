/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Link } from "react-router-dom";

import { PostInterface } from "../interfaces";

import { EditPostPopup } from "./EditPostPopup";

interface Props {
  post: PostInterface;
}
export const PostItem = ({ post }: Props) => (
  <div
    css={css`
      width: 300px;
      min-height: 200px;
      padding: 20px 20px;
      margin: 30px 0px;
      border-radius: 10px;
      background-color: white;
      display: flex;
      flex-direction: column;
      :hover {
        transform: scale3d(1.2, 1.2, 0.5);
        box-shadow: 0px 0px 7px 3px #403939;
      }
      h3 {
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        flex-grow: 3;
      }
      div {
        display: flex;
        justify-content: space-between;
      }
    `}
  >
    <h3>
      <Link
        css={css`
          color: black;
        `}
        to={`/post/${post.id}`}
      >
        {post.title}
      </Link>
    </h3>
    <div>
      <span>userId: {post.userId}</span>
      <span>likes: {post.reactions}</span>
    </div>
    <EditPostPopup post={post} />
  </div>
);
