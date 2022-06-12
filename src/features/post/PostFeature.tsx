/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Link } from "react-router-dom";
import { useDataPost } from "./hooks";

export const PostFeature = () => {
  const { title, body, reactions, userId } = useDataPost();
  return (
    <div
      css={css`
        max-width: 800px;
        margin: auto;
        border: 2px solid black;
        border-radius: 10px;
        padding: 30px 25px;
        background-color: #e6e2e7;
        margin-bottom: 100px;
        h1 {
          font-size: 30px;
          text-align: center;
          text-shadow: 3px 3px 5px #a37a7a;
          margin-bottom: 50px;
        }
        p {
          font-size: 20px;
          line-height: 30px;
        }
        span {
          margin-right: 20px;
        }
        div {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 30px;
        }
      `}
    >
      <h1>{title}</h1>
      <p>{body}</p>
      <div>
        <span>userId: {userId}</span>
        <span>likes: {reactions}</span>
      </div>
      <Link to="/"> Back to Home</Link>
    </div>
  );
};
