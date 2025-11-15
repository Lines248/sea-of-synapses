import React, { memo } from "react";
import NeuralMap from "../assets/NeuralMap.svg";

export const NeuralBackground: React.FC = memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <img
      src={NeuralMap}
      alt=""
      className="w-full h-full object-cover opacity-[0.15]"
      loading="lazy"
      decoding="async"
    />
  </div>
));

NeuralBackground.displayName = "NeuralBackground";