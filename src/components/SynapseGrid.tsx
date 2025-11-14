import React from "react";
import type { SynapseNodeData } from "../hooks/useNodeData";
import SynapseNode from "./SynapseNode";

interface Props {
  nodes: SynapseNodeData[];
  selectedId: string | null;
  hoveredId: string | null;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
}

const SynapseGrid = ({
  nodes,
  selectedId,
  hoveredId,
  onSelect,
  onHover,
}: Props) => {
  // Safety check
  if (!nodes || nodes.length === 0) {
    return (
      <section className="relative w-full h-full overflow-hidden flex items-center justify-center">
        <p className="text-slate-400">No nodes found. Check data loading.</p>
      </section>
    );
  }

  // Debug: verify nodes are loading
  console.log('SynapseGrid rendering with', nodes.length, 'nodes', nodes);

  return (
    <section className="relative w-full h-full overflow-hidden bg-slate-950">
      {/* neural ocean */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.13),transparent_65%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.12),transparent_65%),#020617] animate-slowPulse pointer-events-none" />

      {/* drifting grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:90px_90px] opacity-[0.18] animate-slowDrift pointer-events-none" />

      {/* brain silhouette mask */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[70%] h-[80%] rounded-[45%_55%_50%_60%/50%_45%_55%_50%] bg-slate-900/10 blur-3xl shadow-[0_0_100px_40px_rgba(56,189,248,0.06)]" />
      </div>

      {/* nodes */}
      <div className="absolute inset-0 z-20">
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