import type React from "react";
import type { SynapseNodeData } from "../hooks/useNodeData";
import Tooltip from "./Tooltip";

interface SynapseNodeProps {
  node: SynapseNodeData;
  isSelected: boolean;
  isHovered: boolean;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
}

const SynapseNode: React.FC<SynapseNodeProps> = ({
  node,
  isSelected,
  isHovered,
  onSelect,
  onHover,
}) => {
  const handleClick = () => onSelect(node.id);

  const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (
    event
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(node.id);
    }
  };

  const size = 36 + node.intensity * 24; // px, 36–60 range

  return (
    <div
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
      }}
      className="absolute"
    >
      <button
        type="button"
        className={[
          "group relative flex items-center justify-center rounded-full border bg-slate-900/70 shadow-lg shadow-sky-500/10 outline-none transition-all duration-200",
          "border-sky-500/40 hover:border-sky-300/80",
          isSelected ? "ring-2 ring-sky-300" : "ring-0",
        ].join(" ")}
        style={{
          width: size,
          height: size,
          boxShadow: `0 0 25px rgba(56, 189, 248, ${0.25 + node.intensity *
            0.4})`,
        }}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => onHover(node.id)}
        onMouseLeave={() => onHover(null)}
        onFocus={() => onHover(node.id)}
        onBlur={() => onHover(null)}
        aria-pressed={isSelected}
        aria-label={`${node.label} — ${node.shortDescription}`}
      >
        <div
          className="h-[70%] w-[70%] rounded-full bg-gradient-to-br from-sky-300/90 to-sky-500/60 opacity-80 blur-[1px] transition group-hover:opacity-100"
          aria-hidden="true"
        />
        <span className="pointer-events-none absolute text-[10px] font-medium text-sky-100 opacity-80 group-hover:opacity-100">
          {node.label}
        </span>

        {/* Tooltip */}
        {isHovered && (
          <div className="pointer-events-none absolute -top-3 left-1/2 z-20 -translate-x-1/2 -translate-y-full transform">
            <Tooltip label={node.label} description={node.shortDescription} />
          </div>
        )}
      </button>
    </div>
  );
};

export default SynapseNode;