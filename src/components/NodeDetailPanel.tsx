import type React from "react";
import { useEffect, useRef } from "react";
import type { SynapseNodeData } from "../hooks/useNodeData";

interface NodeDetailPanelProps {
  node: SynapseNodeData | null;
  isOpen: boolean;
  onClose: () => void;
}

const NodeDetailPanel: React.FC<NodeDetailPanelProps> = ({
  node,
  isOpen,
  onClose,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // ESC key handler
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Focus the close button when panel opens
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  if (!node || !isOpen) return null;

  return (
    <aside
      className="pointer-events-auto fixed inset-y-0 right-0 z-30 w-full max-w-md border-l border-slate-800 bg-slate-950/95 px-6 py-5 text-slate-50 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur-lg"
      aria-label="Synapse detail panel"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-sky-400">
            Active Node
          </p>
          <h2 className="mt-1 text-xl font-semibold tracking-tight">
            {node.label}
          </h2>
          <p className="mt-1 text-xs text-slate-400">{node.shortDescription}</p>
        </div>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="rounded-full border border-slate-700 bg-slate-900 px-2 py-1 text-[11px] text-slate-300 transition hover:border-sky-400 hover:text-sky-200"
        >
          Esc
        </button>
      </div>

      <div className="mt-2 space-y-4 text-sm leading-relaxed text-slate-200">
        <p>{node.detail}</p>

        <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-[11px] text-slate-300">
          <span className="uppercase tracking-[0.18em] text-slate-400">
            Category
          </span>
          <span className="rounded-full bg-sky-500/10 px-2 py-0.5 text-[11px] text-sky-300">
            {node.category}
          </span>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span>Activation intensity</span>
          <span>{Math.round(node.intensity * 100)}%</span>
        </div>
      </div>
    </aside>
  );
};

export default NodeDetailPanel;