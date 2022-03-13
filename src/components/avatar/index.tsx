import React from "react";
import { Character } from "../../types";
import cx from "classnames";

interface Props {
  character: Character;
  className?: string;
}

const Avatar: React.FC<Props> = ({ character, className = "w-10 h-10" }) => (
  <div
    className={cx(
      "flex-shrink-0 bg-center bg-cover bg-gray-400 rounded-full",
      className
    )}
    style={{
      backgroundImage: `url(${character.thumbnail.path}.${character.thumbnail.extension})`,
    }}
  />
);

export default Avatar;
