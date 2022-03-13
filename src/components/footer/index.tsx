import React from "react";

const year = new Date().getFullYear();

const Footer: React.FC = () => (
  <div className="border-t pt-2 px-5 text-center">
    <p>{`©${year} Alexander Morlock`}</p>
    <a
      className="text-xs text-gray-500 hover:underline pb-3"
      href="https://github.com/Alexander-Morlock/marvel-characters"
    >
      Project's GitHub page
    </a>
  </div>
);

export default Footer;
