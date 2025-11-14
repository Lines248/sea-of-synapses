import React from "react";

interface TooltipProps {
  label: string;
  description: string;
}

const Tooltip: React.FC<TooltipProps> = ({ label, description }) => {
  return (
    <div className="pointer-events-none rounded-lg border border-sky-500/30 bg-gradient-to-b from-slate-900/98 to-slate-950/98 px-3 py-2 text-left text-[11px] shadow-2xl shadow-sky-500/20 backdrop-blur-md animate-in fade-in-0 zoom-in-95 duration-200">
      <div className="font-semibold text-sky-100">{label}</div>
      <div className="mt-0.5 text-[10px] text-slate-400">{description}</div>
    </div>
  );
};

export default Tooltip;