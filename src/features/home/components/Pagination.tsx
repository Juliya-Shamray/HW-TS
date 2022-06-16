import PaginationMUA from "@mui/material/Pagination";
import { PaginationInterface } from "../interfaces";

interface Props {
  pagination: PaginationInterface;
  onChange: (e: any, value: number) => void;
}

export const Pagination = ({
  onChange,
  pagination: { page, total },
}: Props) => (
  <PaginationMUA
    onChange={onChange}
    page={page}
    count={total}
    variant="outlined"
    shape="rounded"
  />
);
