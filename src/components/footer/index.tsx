import React from "react";

const year = new Date().getFullYear();

const Footer: React.FC = () => (
  <div className="border-t pt-2 mt-4">
    <p className="text-center">{`©${year} Alexander Morlock`}</p>
  </div>
);

export default Footer;
