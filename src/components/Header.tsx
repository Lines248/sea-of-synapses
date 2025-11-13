import type React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-950/60 px-6 py-4 backdrop-blur-md">
      <h1 className="text-lg font-semibold tracking-tight text-slate-50">
        Sea of Synapses
      </h1>
      <p className="max-w-md text-xs text-slate-400">
        An interactive map of cognitive states — built in React, TypeScript,
        and Tailwind.
      </p>
    </header>
  );
};

export default Header;