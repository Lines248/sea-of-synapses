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
    <div className="w-screen min-h-screen flex flex-col bg-slate-950 overflow-hidden">
      <Header />

      <main className="relative flex w-full h-[calc(100vh-140px)] overflow-hidden">
        <SynapseGrid
          nodes={nodes}
          selectedId={selectedId}
          hoveredId={hoveredId}
          onSelect={setSelectedId}
          onHover={setHoveredId}
        />

        <NodeDetailPanel
          node={selectedNode}
          isOpen={!!selectedNode}
          onClose={() => setSelectedId(null)}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;