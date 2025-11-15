import React from "react";

interface Props {
  elevated?: boolean;
  children?: React.ReactNode;
}

export const TileCell = ({ elevated = false, children }: Props) => {
  return (
<div
  className={`
    relative rounded-xl 
    border border-[#0c1a29]/40 
    bg-[#06101e]/30 
    shadow-[0_0_12px_rgba(16,57,94,0.25)]
    backdrop-blur-[3px]
    transition-all duration-500
    ${elevated ? "translate-y-[-2px] shadow-[0_0_20px_rgba(16,57,94,0.45)]" : ""}
  `}
>
  {children}
</div>
  );
};