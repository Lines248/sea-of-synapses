import React from "react";
import type { SynapseNodeData } from "../hooks/useNodeData";
import SynapseNode from "./SynapseNode";

interface SynapseGridProps {
  nodes: SynapseNodeData[];
  selectedId: string | null;
  hoveredId: string | null;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
}

const SynapseGrid: React.FC<SynapseGridProps> = ({
  nodes,
  selectedId,
  hoveredId,
  onSelect,
  onHover,
}) => {
  return (
    <section
      aria-label="Sea of Synapses interactive map"
      className="relative flex-1 h-full w-full overflow-hidden bg-slate-950"
    >
      {/* Deep ocean base */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950" />
      
      {/* Multi-layer radial gradients - neural ocean depths */}
      {/* Layer 1: Deep currents */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(56,189,248,0.06),transparent_60%)]"
        style={{
          animation: 'ocean-pulse 25s ease-in-out infinite',
        }}
      />
      
      {/* Layer 2: Mid-depth flow */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_65%,rgba(14,165,233,0.05),transparent_65%)]"
        style={{
          animation: 'ocean-pulse-slow 30s ease-in-out infinite',
          animationDelay: '5s',
        }}
      />
      
      {/* Layer 3: Surface shimmer */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_45%_50%,rgba(56,189,248,0.04),transparent_70%)]"
        style={{
          animation: 'ocean-pulse 20s ease-in-out infinite',
          animationDelay: '10s',
        }}
      />
      
      {/* Layer 4: Distant glow */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(14,165,233,0.03),transparent_75%)]"
        style={{
          animation: 'ocean-pulse-slow 35s ease-in-out infinite',
          animationDelay: '15s',
        }}
      />
      
      {/* Layer 5: Deep center */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_75%,rgba(56,189,248,0.04),transparent_68%)]"
        style={{
          animation: 'ocean-pulse 28s ease-in-out infinite',
          animationDelay: '7s',
        }}
      />
      
      {/* Drifting grid layers - neural network structure */}
      {/* Primary grid - subtle drift */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:120px_120px]"
        style={{
          animation: 'drift-grid 40s ease-in-out infinite',
        }}
      />
      
      {/* Secondary grid - slower counter-drift */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"
        style={{
          animation: 'drift-grid-slow 50s ease-in-out infinite',
        }}
      />
      
      {/* Tertiary fine grid - very subtle */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"
        style={{
          animation: 'drift-grid 35s ease-in-out infinite',
          animationDelay: '12s',
        }}
      />

      {/* Node layer */}
      <div className="relative z-10 h-full w-full">
        {nodes.map((node) => (
          <SynapseNode
            key={node.id}
            node={node}
            isSelected={node.id === selectedId}
            isHovered={node.id === hoveredId}
            onSelect={onSelect}
            onHover={onHover}
          />
        ))}
      </div>
    </section>
  );
};

export default SynapseGrid;