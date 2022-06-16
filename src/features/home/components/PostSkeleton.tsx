/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Skeleton } from "@mui/material";

export const PostSkeleton = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 50px;
      `}
    >
      {data.map((key) => (
        <Skeleton key={key} variant="rectangular" width={310} height={230} />
      ))}
    </div>
  );
};
