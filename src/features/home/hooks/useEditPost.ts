import { useState } from "react";

import { PostInterface } from "../interfaces";

interface Props {
  post: PostInterface;
}

export const useEditPost = (handleClose: () => void, { post }: Props) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const onChangeTitle = (event: any) => {
    setTitle(event.target.value);
  };
  const onChangeBody = (event: any) => {
    setBody(event.target.value);
  };

  const onSubmitEditPost = (event: any) => {
    event.preventDefault();
    const newPost = {
      title: event.target.title.value,
      body: event.target.description.value,
    };

    fetch(`https://dummyjson.com/posts/${post.id}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        handleClose();
        setTimeout(() => {
          alert("Your post has been successfully updated");
        }, 200);
      });
  };

  return {
    onSubmitEditPost,
    onChangeBody,
    onChangeTitle,
    body,
    title,
  };
};
