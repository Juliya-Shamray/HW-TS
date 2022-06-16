export interface PostInterface {
  id: number;
  title: string;
  reactions: number;
  userId: number;
}

export interface PaginationInterface {
  limit: number;
  total: number;
  page: number;
}
