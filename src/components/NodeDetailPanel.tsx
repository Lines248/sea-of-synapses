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

  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  if (!node || !isOpen) return null;

  return (
    <aside
      className="pointer-events-auto fixed inset-y-0 right-0 z-30 w-full max-w-md px-7 py-9 text-slate-50 animate-panel-slide-in"
      aria-label="Synapse detail panel"
      style={{
        background: `
          linear-gradient(135deg, rgba(15, 23, 42, 0.88) 0%, rgba(15, 23, 42, 0.78) 50%, rgba(15, 23, 42, 0.82) 100%),
          linear-gradient(to right, rgba(56, 189, 248, 0.08) 0%, rgba(14, 165, 233, 0.05) 30%, transparent 60%)
        `,
        backdropFilter: 'blur(24px) saturate(190%)',
        WebkitBackdropFilter: 'blur(24px) saturate(190%)',
        boxShadow: `
          0 0 100px rgba(15, 23, 42, 0.9),
          -24px 0 80px rgba(56, 189, 248, 0.12),
          inset 0 0 0 1px rgba(255, 255, 255, 0.05),
          inset -1px 0 0 rgba(56, 189, 248, 0.15)
        `,
      }}
    >

      <div 
        className="absolute left-0 top-0 h-full w-[2px]"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(56, 189, 248, 0.2) 15%, rgba(14, 165, 233, 0.5) 35%, rgba(56, 189, 248, 0.6) 50%, rgba(14, 165, 233, 0.5) 65%, rgba(56, 189, 248, 0.2) 85%, transparent 100%)',
          boxShadow: '0 0 20px rgba(56, 189, 248, 0.3), inset 0 0 20px rgba(14, 165, 233, 0.2)',
        }}
      />
      <div 
        className="absolute left-0 top-0 h-full w-[1px] opacity-60"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(224, 242, 254, 0.4) 25%, rgba(186, 230, 253, 0.5) 50%, rgba(224, 242, 254, 0.4) 75%, transparent 100%)',
        }}
      />
      
      <div className="mb-9 flex items-start justify-between gap-5">
        <div className="flex-1">
          <div className="mb-4 flex items-center gap-3">
            <div className="relative">
              <div className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)] animate-pulse"></div>
              <div className="absolute inset-0 h-2.5 w-2.5 rounded-full bg-sky-400/30 animate-ping"></div>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-sky-400/75 font-bold letter-spacing-wider">
              Active Node
            </p>
          </div>
          <h2 className="text-[32px] font-extrabold tracking-[-0.02em] mb-3 bg-gradient-to-r from-sky-50 via-cyan-50 via-sky-50 to-cyan-50 bg-clip-text text-transparent leading-[1.1]">
            {node.label}
          </h2>
          <p className="text-[14px] text-slate-300/85 leading-relaxed font-light tracking-wide">{node.shortDescription}</p>
        </div>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="rounded-lg border border-slate-700/30 bg-slate-900/30 backdrop-blur-md px-3.5 py-2 text-[11px] text-slate-300/80 transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-500/15 hover:text-sky-200 hover:shadow-[0_0_12px_rgba(56,189,248,0.2)] focus:outline-none focus:ring-2 focus:ring-sky-400/40 focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Esc
        </button>
      </div>

      <div className="mb-7 flex items-center gap-3">
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-slate-700/40 to-slate-700/60"></div>
        <div className="flex gap-1.5 items-center">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="rounded-full bg-sky-400/50"
              style={{
                width: '2px',
                height: `${4 + Math.sin(i * 0.8) * 3}px`,
                animation: `eeg-pulse ${1 + i * 0.15}s ease-in-out infinite`,
                animationDelay: `${i * 0.08}s`,
                boxShadow: `0 0 ${4 + i}px rgba(56, 189, 248, 0.4)`,
              }}
            />
          ))}
        </div>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-700/60 via-slate-700/40 to-transparent"></div>
      </div>

      <div className="space-y-6">
        <div 
          className="rounded-xl p-6 backdrop-blur-md"
          style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.45) 0%, rgba(30, 41, 59, 0.35) 100%)',
            border: '1px solid rgba(148, 163, 184, 0.12)',
            boxShadow: `
              inset 0 1px 0 rgba(255, 255, 255, 0.06),
              inset 0 -1px 0 rgba(0, 0, 0, 0.2),
              0 4px 12px rgba(0, 0, 0, 0.1)
            `,
          }}
        >
          <p className="text-[15px] text-slate-200/90 leading-[1.75] font-light tracking-wide">
            {node.detail}
          </p>
        </div>

        <div 
          className="flex items-center justify-between rounded-xl px-5 py-4 backdrop-blur-md"
          style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.5) 0%, rgba(30, 41, 59, 0.4) 100%)',
            border: '1px solid rgba(148, 163, 184, 0.12)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400/65 font-bold">
            Category
          </span>
          <span 
            className="rounded-full px-4 py-1.5 text-[11px] font-bold text-sky-200/95 transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.18) 0%, rgba(14, 165, 233, 0.18) 100%)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              boxShadow: '0 0 24px rgba(56, 189, 248, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
          >
            {node.category}
          </span>
        </div>

        <div 
          className="flex items-center justify-between rounded-xl px-5 py-4 backdrop-blur-md"
          style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.5) 0%, rgba(30, 41, 59, 0.4) 100%)',
            border: '1px solid rgba(148, 163, 184, 0.12)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <span className="text-[11px] text-slate-400/75 font-semibold uppercase tracking-wide">Activation Intensity</span>
          <div className="flex items-center gap-3.5">
            <div 
              className="h-3 w-36 rounded-full overflow-hidden relative"
              style={{
                background: 'rgba(15, 23, 42, 0.7)',
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
              }}
            >
              <div 
                className="h-full rounded-full transition-all duration-700 ease-out relative"
                style={{ 
                  width: `${node.intensity * 100}%`,
                  background: 'linear-gradient(90deg, rgba(56, 189, 248, 0.95) 0%, rgba(14, 165, 233, 0.95) 50%, rgba(56, 189, 248, 0.95) 100%)',
                  boxShadow: `
                    0 0 16px rgba(56, 189, 248, 0.7),
                    inset 0 1px 0 rgba(255, 255, 255, 0.25),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                  `,
                }}
              />
            </div>
            <span className="text-[17px] font-extrabold text-sky-300/95 w-16 text-right tabular-nums tracking-tight">{Math.round(node.intensity * 100)}%</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default NodeDetailPanel;