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
        zIndex: 50, // FORCE HIGH VISIBILITY
      }}
    >
      {/* MAIN ORB */}
      <button
        type="button"
        onClick={() => onSelect(node.id)}
        onMouseEnter={() => onHover(node.id)}
        onMouseLeave={() => onHover(null)}
        onFocus={() => onHover(node.id)}
        onBlur={() => onHover(null)}
        aria-label={node.label}
        className="relative rounded-full transition-all duration-300 hover:scale-110 active:scale-110 focus:outline-none"
        style={{
          width: size,
          height: size,
        }}
      >
        {/* BACK GLOW */}
        <div
          className="absolute rounded-full blur-2xl"
          style={{
            width: size * 2,
            height: size * 2,
            background: isActive
              ? "rgba(56, 189, 248, 0.45)"
              : "rgba(56, 189, 248, 0.25)",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 1,
            zIndex: -1,
          }}
        />

        {/* ORB CORE */}
        <div
          className="absolute rounded-full shadow-lg transition-all duration-300"
          style={{
            width: size,
            height: size,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background: isActive
              ? "radial-gradient(circle, #e0f2fe 0%, #38bdf8 100%)"
              : "radial-gradient(circle, #bae6fd 0%, #0ea5e9 100%)",
            boxShadow: isActive
              ? "0 0 30px rgba(56, 189, 248, 0.8)"
              : "0 0 18px rgba(56, 189, 248, 0.5)",
          }}
        />
      </button>

      {/* LABEL */}
      <div
        className="text-sky-50 text-xs font-semibold text-center mt-2 transition-opacity duration-300"
        style={{
          opacity: isActive ? 1 : 0.8,
          textShadow: "0 2px 6px rgba(0,0,0,0.7)",
        }}
      >
        {node.label}
      </div>
    </div>
  );
};

export default SynapseNode;