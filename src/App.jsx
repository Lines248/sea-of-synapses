// src/App.jsx
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SynapseGrid from "./components/SynapseGrid";
import NodeDetailPanel from "./components/NodeDetailPanel";
import { useNodeData } from "./hooks/useNodeData";
import "./styles/globals.css";

function App() {
  const { nodes, getNodeById } = useNodeData();
  const [selectedId, setSelectedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const selectedNode = selectedId ? getNodeById(selectedId) : null;

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
      <Header />

      <main className="relative flex flex-1 overflow-hidden h-full min-h-[80vh]">
        <SynapseGrid
          nodes={nodes}
          selectedId={selectedId}
          hoveredId={hoveredId}
          onSelect={setSelectedId}
          onHover={setHoveredId}
        />

        <NodeDetailPanel
          node={selectedNode}
          isOpen={Boolean(selectedNode)}
          onClose={() => setSelectedId(null)}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;