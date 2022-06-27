/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Button, TextField } from "@mui/material";

import { useEditPost } from "../hooks";

import { PostInterface } from "../interfaces";

interface Props {
  handleClose: () => void;
  post: PostInterface;
}

export const EditPostForm = ({ handleClose, post }: Props) => {
  const { onSubmitEditPost, onChangeTitle, title, onChangeBody, body } =
    useEditPost(handleClose, {
      post,
    });

  return (
    <form
      onSubmit={onSubmitEditPost}
      css={css`
        width: 350px;
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        gap: 15px;
      `}
    >
      <TextField
        name="title"
        label="Title"
        value={title}
        onChange={onChangeTitle}
      />

      <TextField
        name="description"
        label="Description"
        variant="outlined"
        value={body}
        onChange={onChangeBody}
      />

      <Button
        css={css`
          width: 120px;
          align-self: flex-end;
        `}
        type="submit"
        variant="contained"
      >
        Save
      </Button>
    </form>
  );
};
