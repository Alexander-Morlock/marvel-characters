import React from "react";
import imageUrl from "./spinner.gif";
import cx from "classnames";

interface Props {
  className?: string;
}

const Spinner: React.FC<Props> = ({ className }) => (
  <div
    className={cx("w-32 h-32 bg-center bg-contain rounded-full", className)}
    style={{ backgroundImage: `url(${imageUrl})` }}
  />
);

export default Spinner;
