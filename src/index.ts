export interface ResearchAgentManifest {
  id: string;
  role: string;
  capabilities: string[];
  qualityControls: string[];
  outputs: string[];
}

export const manifest: ResearchAgentManifest = {
  id: "atlas-research",
  role: "Evidence gathering, source evaluation, synthesis, and decision-support specialist",
  capabilities: ["scope-question", "search", "evaluate-sources", "cross-check", "synthesize", "cite"],
  qualityControls: ["prefer primary sources", "separate fact from inference", "record source dates", "flag uncertainty and conflicts"],
  outputs: ["research brief", "source ledger", "findings", "recommendations", "open questions"]
};

export function getManifest(): ResearchAgentManifest {
  return structuredClone(manifest);
}
