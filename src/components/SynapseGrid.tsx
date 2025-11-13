import type React from "react";
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
      className="relative flex-1 overflow-hidden bg-slate-950"
    >
      {/* Grid / “sea” background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),rgba(15,23,42,1))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
      <div className="pointer-events-none absolute inset-0 animate-[pulse_12s_ease-in-out_infinite] bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.12),transparent_55%)]" />

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