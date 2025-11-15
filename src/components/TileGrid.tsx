import React from "react";

interface Props {
  children: React.ReactNode;
}

const TileGrid = ({ children }: Props) => {
  return (
    <div className="relative grid grid-cols-8 gap-2 w-full h-full p-4">
      {children}
    </div>
  );
};

export default TileGrid;