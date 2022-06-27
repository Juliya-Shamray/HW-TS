/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { EditPostForm } from "./EditPostForm";
import { PostInterface } from "../interfaces";
import EditIcon from "@mui/icons-material/Edit";

interface Props {
  post: PostInterface;
}

export const EditPostPopup = ({ post }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        css={css`
          border: none;
          :hover {
            border: none;
          }
        `}
        variant="outlined"
        onClick={handleClickOpen}
      >
        <EditIcon
          css={css`
            width: 15px;
          `}
        />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          css={css`
            text-align: center;
            padding: 15px;
            font-weight: bold;
          `}
          id="alert-dialog-title"
        >
          Edit post
        </DialogTitle>
        <DialogContent>
          <EditPostForm post={post} handleClose={handleClose} />\
        </DialogContent>
      </Dialog>
    </div>
  );
};
