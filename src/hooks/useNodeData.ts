import { useCallback, useMemo } from "react";
import rawNodes from "../data/nodes.json";

export interface SynapseNodeData {
  id: string;
  label: string;
  shortDescription: string;
  detail: string;
  x: number; 
  y: number; 
  intensity: number; // 0–1
  category: string;
}

export function useNodeData() {
  const nodes: SynapseNodeData[] = useMemo(
    () => rawNodes as SynapseNodeData[],
    []
  );

  const getNodeById = useCallback(
    (id: string) => nodes.find((node) => node.id === id),
    [nodes]
  );

  return { nodes, getNodeById };
}