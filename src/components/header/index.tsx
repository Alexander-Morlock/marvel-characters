import React from "react";
import { MarvelLogo } from "../marvel-logo";

interface Props {
  leftComponent?: React.ReactNode;
}

const Header: React.FC<Props> = ({ leftComponent }) => (
  <div className="bg-black fixed left-0 top-0 w-full">
    {leftComponent && (
      <div className="absolute left-1 top-1/2 -translate-y-1/2">
        {leftComponent}
      </div>
    )}
    <MarvelLogo className="mx-auto" />
  </div>
);

export default Header;
