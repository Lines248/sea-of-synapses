import React from "react";
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

  // Size scales with intensity: base 32px + up to 28px
  const baseSize = 32;
  const size = baseSize + node.intensity * 28; // 32–60px range
  
  // Glow intensity scales with node intensity
  const baseGlow = 0.25;
  const glowIntensity = baseGlow + node.intensity * 0.45; // 0.25–0.7 range
  const bloomIntensity = 0.15 + node.intensity * 0.3; // 0.15–0.45 range
  
  // Pulse timing varies with intensity
  const pulseDelay = node.intensity * 2;
  
  // Hover scale factor
  const hoverScale = 1.08;
  const hoverGlowMultiplier = 1.4;

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
          "group relative flex items-center justify-center rounded-full border outline-none transition-all duration-500 ease-out",
          "bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95",
          "border-sky-500/40 hover:border-sky-300/70",
          isSelected 
            ? "ring-2 ring-sky-300/80 ring-offset-2 ring-offset-slate-950" 
            : "ring-0",
        ].join(" ")}
        style={{
          width: size,
          height: size,
          transform: 'scale(1)',
          transition: 'transform 400ms ease-out, box-shadow 400ms ease-out',
        }}
        onMouseEnter={(e) => {
          onHover(node.id);
          e.currentTarget.style.transform = `scale(${hoverScale})`;
        }}
        onMouseLeave={(e) => {
          onHover(null);
          e.currentTarget.style.transform = 'scale(1)';
        }}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onFocus={() => onHover(node.id)}
        onBlur={() => onHover(null)}
        aria-pressed={isSelected}
        aria-label={`${node.label} — ${node.shortDescription}`}
      >
        {/* Outer bloom - soft expanding glow */}
        <div 
          className="absolute inset-0 rounded-full transition-all duration-500 ease-out group-hover:scale-125"
          style={{
            width: `${100 + node.intensity * 40}%`,
            height: `${100 + node.intensity * 40}%`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, rgba(56, 189, 248, ${bloomIntensity}) 0%, rgba(14, 165, 233, ${bloomIntensity * 0.6}) 40%, transparent 70%)`,
            filter: 'blur(12px)',
            opacity: 0.6,
            animation: `pulse-bloom ${4 + pulseDelay}s ease-in-out infinite`,
            boxShadow: `0 0 ${30 + node.intensity * 40}px rgba(56, 189, 248, ${bloomIntensity * 0.8})`,
          }}
          aria-hidden="true"
        />
        
        {/* Middle glow layer - neural membrane */}
        <div 
          className="absolute inset-0 rounded-full transition-all duration-500 ease-out group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle, rgba(56, 189, 248, ${glowIntensity * 0.4}) 0%, rgba(14, 165, 233, ${glowIntensity * 0.25}) 50%, transparent 80%)`,
            filter: 'blur(8px)',
            opacity: 0.7,
            boxShadow: `0 0 ${20 + node.intensity * 25}px rgba(56, 189, 248, ${glowIntensity * 0.5})`,
            animation: `pulse-glow ${3 + pulseDelay}s ease-in-out infinite`,
          }}
          aria-hidden="true"
        />
        
        {/* Button base glow - scales with intensity and hover */}
        <div
          className="absolute inset-0 rounded-full transition-all duration-500 ease-out"
          style={{
            boxShadow: `0 0 ${15 + node.intensity * 20}px rgba(56, 189, 248, ${glowIntensity}), 
                        0 0 ${8 + node.intensity * 12}px rgba(14, 165, 233, ${glowIntensity * 0.7}),
                        inset 0 0 ${10 + node.intensity * 8}px rgba(56, 189, 248, ${glowIntensity * 0.3})`,
          }}
          aria-hidden="true"
        />
        
        {/* Inner blurred core - biological center */}
        <div
          className="absolute rounded-full transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-105"
          style={{
            width: `${60 + node.intensity * 15}%`,
            height: `${60 + node.intensity * 15}%`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, 
              rgba(186, 230, 253, ${0.7 + node.intensity * 0.2}) 0%,
              rgba(125, 211, 252, ${0.6 + node.intensity * 0.25}) 30%,
              rgba(56, 189, 248, ${0.5 + node.intensity * 0.2}) 60%,
              rgba(14, 165, 233, ${0.3 + node.intensity * 0.15}) 100%)`,
            filter: `blur(${3 + node.intensity * 2}px)`,
            opacity: 0.85,
            boxShadow: `inset 0 0 ${12 + node.intensity * 10}px rgba(56, 189, 248, ${0.6 + node.intensity * 0.3}),
                        0 0 ${8 + node.intensity * 6}px rgba(56, 189, 248, ${glowIntensity * 0.8})`,
            animation: `pulse-core ${2.5 + pulseDelay}s ease-in-out infinite`,
          }}
          aria-hidden="true"
        />
        
        {/* Innermost bright core - neural signal */}
        <div
          className="absolute rounded-full transition-all duration-500 ease-out group-hover:opacity-100"
          style={{
            width: `${35 + node.intensity * 10}%`,
            height: `${35 + node.intensity * 10}%`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, 
              rgba(224, 242, 254, ${0.8 + node.intensity * 0.15}) 0%,
              rgba(186, 230, 253, ${0.6 + node.intensity * 0.2}) 50%,
              rgba(125, 211, 252, ${0.4 + node.intensity * 0.15}) 100%)`,
            filter: `blur(${1 + node.intensity * 0.5}px)`,
            opacity: 0.9,
            boxShadow: `0 0 ${6 + node.intensity * 4}px rgba(224, 242, 254, ${0.7 + node.intensity * 0.2})`,
            animation: `pulse-inner ${2 + pulseDelay}s ease-in-out infinite`,
          }}
          aria-hidden="true"
        />
        
        {/* Label */}
        <span className="pointer-events-none absolute z-20 text-[10px] font-semibold text-sky-50/95 opacity-90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] transition-all duration-500 ease-out group-hover:opacity-100 group-hover:text-sky-100 group-hover:drop-shadow-[0_1px_4px_rgba(0,0,0,1)]">
          {node.label}
        </span>

        {/* Tooltip */}
        {isHovered && (
          <div className="pointer-events-none absolute -top-2 left-1/2 z-30 -translate-x-1/2 -translate-y-full transform animate-in fade-in-0 zoom-in-95 duration-200">
            <Tooltip label={node.label} description={node.shortDescription} />
          </div>
        )}
      </button>
    </div>
  );
};

export default SynapseNode;