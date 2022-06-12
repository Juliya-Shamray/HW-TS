/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import { PostInterface } from "../interfaces";

interface Props {
  post: PostInterface;
}
export const PostItem = ({ post: { id, title, reactions, userId } }: Props) => (
  <Link
    css={css`
      color: black;
    `}
    to={`/post/${id}`}
  >
    <div
      css={css`
        width: 300px;
        padding: 40px 20px;
        margin: 30px 0px;
        border-radius: 10px;
        background-color: white;
        :hover {
          transform: scale3d(1.2, 1.2, 0.5);
          box-shadow: 0px 0px 7px 3px #403939;
        }
        h3 {
          cursor: pointer;
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 50px;
        }
        span {
          margin-right: 20px;
        }
      `}
    >
      <h3>{title}</h3>
      <span>userId: {userId}</span>
      <span>likes: {reactions}</span>
    </div>
  </Link>
);
