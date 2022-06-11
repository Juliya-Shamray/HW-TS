/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

interface Props {
  item: { id: number; name: string; url: string };
}

export const MenuNavItem = ({ item: { id, name, url } }: Props) => (
  <li>
    <Link
      css={css`
        color: black;
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
        :hover {
          color: red;
        }
      `}
      to={url}
    >
      {name}
    </Link>
  </li>
);
