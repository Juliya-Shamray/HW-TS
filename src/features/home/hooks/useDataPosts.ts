import { useEffect, useRef, useState } from "react";

import { PostInterface } from "../interfaces";

export const useDataPosts = () => {
  const [posts, setPosts] = useState([] as PostInterface[]);
  const [isLoading, setIsLoading] = useState(true);
  const isSetTotal = useRef(false);

  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1,
  });

  const onChangePagination = (e: any, value: number) => {
    setPagination({ ...pagination, page: value });
    console.log(value);
  };

  useEffect(() => {
    const { page, limit } = pagination;

    const nextSkip = page === 1 ? 0 : (page - 1) * limit;

    fetch(
      `https://dummyjson.com/posts?limit=${pagination.limit}&skip=${nextSkip}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        setIsLoading(false);

        if (!isSetTotal.current) {
          setPagination({
            ...pagination,
            total: Math.round(data.total / pagination.limit),
          });
          isSetTotal.current = true;
        }
      });
  }, [pagination.page]);
  return {
    posts,
    isLoading,
    onChangePagination,
    pagination,
  };
};
