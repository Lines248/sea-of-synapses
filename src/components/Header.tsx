import React from "react";

const Header: React.FC = () => {
  return (
    <header className="relative flex items-center justify-between border-b border-slate-800/50 bg-gradient-to-b from-slate-950/95 via-slate-950/80 to-slate-950/60 px-6 py-5 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-sky-500/20 to-cyan-500/20 blur opacity-60"></div>
          <h1 className="relative text-xl font-bold tracking-tight bg-gradient-to-r from-sky-100 via-cyan-100 to-sky-100 bg-clip-text text-transparent">
            Sea of Synapses
          </h1>
        </div>
        <div className="h-4 w-px bg-gradient-to-b from-transparent via-slate-600 to-transparent"></div>
        <p className="max-w-md text-xs text-slate-400/90 leading-relaxed">
          An interactive map of cognitive states
        </p>
      </div>
      <div className="flex items-center gap-2 text-[10px] text-slate-500">
        <span className="rounded-full bg-slate-800/50 px-2 py-1">Neural Network</span>
      </div>
    </header>
  );
};

export default Header;