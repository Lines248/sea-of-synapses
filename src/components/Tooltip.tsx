import type React from "react";

interface TooltipProps {
  label: string;
  description: string;
}

const Tooltip: React.FC<TooltipProps> = ({ label, description }) => {
  return (
    <div className="pointer-events-none rounded-xl border border-slate-700 bg-slate-900/95 px-3 py-2 text-left text-[11px] text-slate-100 shadow-xl shadow-black/40">
      <div className="font-semibold">{label}</div>
      <div className="mt-0.5 text-[10px] text-slate-400">{description}</div>
    </div>
  );
};

export default Tooltip;