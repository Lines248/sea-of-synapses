import React from "react";
import type { SynapseNodeData } from "../hooks/useNodeData";

interface Props {
  node: SynapseNodeData;
  isSelected: boolean;
  isHovered: boolean;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
}

const SynapseNode = ({
  node,
  isSelected,
  isHovered,
  onSelect,
  onHover,
}: Props) => {
  const isActive = isSelected || isHovered;

  const size = 38 + node.intensity * 40;

  return (
    <div
      className="absolute"
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
   
      <button
        type="button"
        onClick={() => onSelect(node.id)}
        onMouseEnter={() => onHover(node.id)}
        onMouseLeave={() => onHover(null)}
        onFocus={() => onHover(node.id)}
        onBlur={() => onHover(null)}
        aria-label={node.label}
        className={`
          relative rounded-full
          transition-all duration-300 
          hover:scale-110 focus:scale-110 active:scale-110
          outline-none
        `}
        style={{
          width: size,
          height: size,
        }}
      >
     
        <div
          className={`
            absolute rounded-full blur-3xl
            pointer-events-none
            animate-slowPulse animate-slowDrift
          `}
          style={{
            width: size * 2.3,
            height: size * 2.3,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background: isActive
              ? "rgba(56,189,248,0.55)"
              : "rgba(56,189,248,0.32)",
            filter: "blur(40px)",
          }}
        />

        <div
          className="absolute rounded-full transition-all duration-300 shadow-xl
                     animate-slowPulse"
          style={{
            width: size,
            height: size,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background: isActive
              ? "radial-gradient(circle, #ecfeff 0%, #38bdf8 65%, #0ea5e9 100%)"
              : "radial-gradient(circle, #dbeafe 0%, #60a5fa 65%, #0ea5e9 100%)",
            boxShadow: isActive
              ? "0 0 34px rgba(56,189,248,0.85)"
              : "0 0 18px rgba(56,189,248,0.55)",
          }}
        />
      </button>
      
      <div
        className="mt-2 text-center text-sky-50 text-xs font-medium transition-opacity duration-300"
        style={{
          opacity: isActive ? 1 : 0.8,
          textShadow: "0 2px 7px rgba(0,0,0,0.65)",
        }}
      >
        {node.label}
      </div>
    </div>
  );
};

export default SynapseNode;