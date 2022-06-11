/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MenuNavigation } from "./components";

export const HeaderFeature = () => (
  <header
    css={css`
      padding: 50px; ;
    `}
  >
    <MenuNavigation />
  </header>
);
