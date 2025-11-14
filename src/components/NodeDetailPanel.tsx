import React from "react";
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
      className="pointer-events-auto fixed inset-y-0 right-0 z-30 w-full max-w-md px-6 py-8 text-slate-50 animate-panel-slide-in"
      aria-label="Synapse detail panel"
      style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.75) 100%)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderLeft: '1px solid transparent',
        backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.75) 100%), linear-gradient(to right, rgba(56, 189, 248, 0.3), rgba(14, 165, 233, 0.2), transparent)',
        boxShadow: '0 0 80px rgba(15, 23, 42, 0.8), -20px 0 60px rgba(56, 189, 248, 0.15), inset 1px 0 0 rgba(56, 189, 248, 0.1)',
      }}
    >
      {/* Gradient border accent */}
      <div 
        className="absolute left-0 top-0 h-full w-[1px]"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(56, 189, 248, 0.4) 20%, rgba(14, 165, 233, 0.5) 50%, rgba(56, 189, 248, 0.4) 80%, transparent 100%)',
        }}
      />
      
      {/* Header section */}
      <div className="mb-8 flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="mb-3 flex items-center gap-2.5">
            <div className="relative">
              <div className="h-2 w-2 rounded-full bg-sky-400 animate-pulse"></div>
              <div className="absolute inset-0 h-2 w-2 rounded-full bg-sky-400/40 animate-ping"></div>
            </div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-sky-400/80 font-semibold">
              Active Node
            </p>
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-2 bg-gradient-to-r from-sky-50 via-cyan-50 to-sky-50 bg-clip-text text-transparent leading-tight">
            {node.label}
          </h2>
          <p className="text-sm text-slate-300/90 leading-relaxed font-light">{node.shortDescription}</p>
        </div>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="rounded-lg border border-slate-700/40 bg-slate-900/40 backdrop-blur-sm px-3 py-1.5 text-[11px] text-slate-300/90 transition-all duration-200 hover:border-sky-400/40 hover:bg-sky-500/10 hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
        >
          Esc
        </button>
      </div>

      {/* EEG-style divider */}
      <div className="mb-6 flex items-center gap-2">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-1 w-0.5 rounded-full bg-sky-400/40"
              style={{
                animation: `eeg-pulse ${1.2 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
      </div>

      {/* Content section */}
      <div className="space-y-6">
        {/* Detail text */}
        <div 
          className="rounded-xl p-5 backdrop-blur-sm"
          style={{
            background: 'rgba(15, 23, 42, 0.4)',
            border: '1px solid rgba(148, 163, 184, 0.1)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          }}
        >
          <p className="text-[15px] text-slate-200/95 leading-relaxed font-light tracking-wide">
            {node.detail}
          </p>
        </div>

        {/* Category badge */}
        <div 
          className="flex items-center justify-between rounded-xl px-5 py-4 backdrop-blur-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.5) 0%, rgba(30, 41, 59, 0.4) 100%)',
            border: '1px solid rgba(148, 163, 184, 0.1)',
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400/70 font-semibold">
            Category
          </span>
          <span 
            className="rounded-full px-4 py-1.5 text-[11px] font-semibold text-sky-200"
            style={{
              background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(14, 165, 233, 0.15) 100%)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              boxShadow: '0 0 20px rgba(56, 189, 248, 0.1)',
            }}
          >
            {node.category}
          </span>
        </div>

        {/* Intensity meter */}
        <div 
          className="flex items-center justify-between rounded-xl px-5 py-4 backdrop-blur-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.5) 0%, rgba(30, 41, 59, 0.4) 100%)',
            border: '1px solid rgba(148, 163, 184, 0.1)',
          }}
        >
          <span className="text-[11px] text-slate-400/80 font-medium uppercase tracking-wide">Activation Intensity</span>
          <div className="flex items-center gap-3">
            <div 
              className="h-2.5 w-32 rounded-full overflow-hidden"
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.3)',
              }}
            >
              <div 
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{ 
                  width: `${node.intensity * 100}%`,
                  background: 'linear-gradient(90deg, rgba(56, 189, 248, 0.9) 0%, rgba(14, 165, 233, 0.9) 50%, rgba(56, 189, 248, 0.9) 100%)',
                  boxShadow: '0 0 12px rgba(56, 189, 248, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                }}
              />
            </div>
            <span className="text-base font-bold text-sky-300 w-14 text-right tabular-nums">{Math.round(node.intensity * 100)}%</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default NodeDetailPanel;