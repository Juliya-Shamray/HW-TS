import { useEffect, useState } from "react";

import { PostInterface } from "../interfaces";

export const useDataPosts = () => {
  const [posts, setPosts] = useState([] as PostInterface[]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
      });
  }, []);
  return {
    posts,
  };
};
