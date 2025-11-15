import TileGrid from "../UI/TileGrid";
import { TileCell } from "../UI/TileCell";
import type { SynapseNodeData } from "../../hooks/useNodeData";
import SynapseNode from "./SynapseNode";
import SynapseConnections from "./SynapseConnections";

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
  return (
    <section className="relative w-full h-full overflow-hidden bg-slate-950">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_65%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.10),transparent_65%),#020617] animate-slowPulse pointer-events-none" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:90px_90px] opacity-[0.18] animate-slowDrift pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="
             w-[50%] h-[60%]
             rounded-[60%_40%_60%_40%/50%_50%_50%_50%]
             bg-sky-900/10
             blur-2xl
    shadow-[0_0_120px_50px_rgba(56,189,248,0.06)]" />
      </div>

<div className="absolute inset-0 z-[5] pointer-events-none">

  <TileGrid>
    {Array.from({ length: 64 }).map((_, i) => (
      <TileCell key={i} />
    ))}
  </TileGrid>
</div>
      <SynapseConnections nodes={nodes} />

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