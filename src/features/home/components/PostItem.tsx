/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
  data: {
    id: number;
    title: string;
  };
}
export const PostItem = ({ data: { title } }: Props) => (
  <div
    css={css`
      width: 280px;
      font-size: 20px;
      font-weight: bold;
      padding: 60px 20px;
      margin: 30px 0px;
      box-shadow: 0px 0px 7px 3px #403939;
      text-align: center;
      cursor: pointer;
      background-color: #c8b7e7;
      border-radius: 5px;
    `}
  >
    {title}
  </div>
);
