import React from "react";
import { MarvelLogo } from "../marvel-logo";

const Header: React.FC = () => (
  <div className="bg-black fixed left-0 top-0 w-full">
    <MarvelLogo className="mx-auto" />
  </div>
);

export default Header;
