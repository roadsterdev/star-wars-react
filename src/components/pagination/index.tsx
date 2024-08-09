import Pagination from "rc-pagination";

import "rc-pagination/assets/index.css";
import "./style.scss";

interface PaginationProps {
  total: number;
  hasNext: boolean;
  hasPrev: boolean;
  onPageChange: (pageIndex: number) => void;
}

const CustomPagination = ({
  total,
  hasNext,
  hasPrev,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="pagination">
      <Pagination
        total={total}
        showTitle={false}
        onChange={onPageChange}
        showLessItems
        prevIcon={
          <svg
            focusable="false"
            aria-hidden="true"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            data-testid="NavigateBeforeIcon"
            fill={hasPrev ? "currentColor" : "#ABABAB"}
          >
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
          </svg>
        }
        nextIcon={
          <svg
            focusable="false"
            aria-hidden="true"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            data-testid="NavigateNextIcon"
            fill={hasNext ? "currentColor" : "#ABABAB"}
          >
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
          </svg>
        }
      />
    </div>
  );
};

export default CustomPagination;
