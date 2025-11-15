import type { SynapseNodeData } from "../../hooks/useNodeData";

interface Props {
  nodes: SynapseNodeData[];
}

const SynapseConnections = ({ nodes }: Props) => {
  if (!nodes || nodes.length < 2) return null;


  const categories: Record<string, SynapseNodeData[]> = {};
  nodes.forEach((n) => {
    if (!categories[n.category]) categories[n.category] = [];
    categories[n.category].push(n);
  });

  const connections: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }[] = [];

  Object.values(categories).forEach((group) => {
    if (group.length < 2) return;

    for (let i = 0; i < group.length; i++) {
      for (let j = i + 1; j < group.length; j++) {
        connections.push({
          x1: group[i].x,
          y1: group[i].y,
          x2: group[j].x,
          y2: group[j].y,
        });
      }
    }
  });

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="synGlow">
          <feGaussianBlur stdDeviation="1.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {connections.map((c, i) => {
        const mx = (c.x1 + c.x2) / 2;
        const my = (c.y1 + c.y2) / 2 - 6;

        return (
          <path
            key={i}
            d={`M ${c.x1} ${c.y1} Q ${mx} ${my} ${c.x2} ${c.y2}`}
            className="synapse-line animate-synapsePulse opacity-70"
            strokeWidth="0.2"
            fill="none"
            filter="url(#synGlow)"
          />
        );
      })}
    </svg>
  );
};

export default SynapseConnections;