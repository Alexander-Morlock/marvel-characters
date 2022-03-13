import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setIsFetchingDisabled, setOffset } from "../../store/reducer";
import cx from "classnames";

interface Props {
  limit: number;
}

const Pagination: React.FC<Props> = ({ limit }) => {
  const { total, offset } = useAppSelector((state) => state.rootReducer);
  const dispatch = useAppDispatch();

  const numberOfPages = Math.floor(total / limit);
  const pages = new Array(numberOfPages).fill(0).map((x, index) => ({
    pageNumber: index + 1,
    offset: index * limit,
  }));

  return (
    <ul className="flex flex-wrap gap-2 mt-8 mb-4">
      {pages.map((p) => {
        const isActivePage = offset === p.offset;

        return (
          <li
            key={p.offset}
            className={cx(
              "w-8 h-8 rounded-md flex",
              { "bg-blue-300 hover:bg-blue-400 cursor-pointer": !isActivePage },
              {
                "bg-blue-600 text-white": isActivePage,
              }
            )}
          >
            <p
              className="m-auto"
              onClick={() => {
                dispatch(setOffset(p.offset));
                dispatch(setIsFetchingDisabled(false));
              }}
            >
              {p.pageNumber}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
