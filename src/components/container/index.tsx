import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => (
  <div className="pt-[4.5rem] lg:pt-24 px-5 max-w-5xl mx-auto">{children}</div>
);

export default Container;
