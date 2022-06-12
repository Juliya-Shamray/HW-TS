/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const PageFeature = ({ children }: any) => (
  <div
    css={css`
      max-width: 1100px;
      margin: auto;
      font-family: Arial, sans-serif;
    `}
  >
    {children}
  </div>
);
