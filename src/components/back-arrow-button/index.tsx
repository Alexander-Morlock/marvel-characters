import React from "react";
import { Link } from "react-router-dom";

interface Props {
  url?: string;
}

const BackArrowButton: React.FC<Props> = ({ url = "/" }) => (
  <Link to={url}>
    <div className="text-gray-400 hover:text-gray-300 h-6 flex items-center">
      <svg
        version="1.1"
        viewBox="0 0 512 512"
        fill="currentColor"
        className="w-10"
      >
        <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
      </svg>
      <p>Back</p>
    </div>
  </Link>
);

export default BackArrowButton;
