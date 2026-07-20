# ATLAS Research Agent

The evidence and decision-support specialist for ATLAS. It scopes questions, gathers sources, evaluates credibility, cross-checks claims, and returns cited synthesis to the manager.

## Responsibilities

- Prefer primary and authoritative sources where available.
- Separate verified facts, interpretations, and recommendations.
- Record source publication dates and flag stale evidence.
- Surface uncertainty, disagreement, and unanswered questions.

## Package

```bash
npm install
npm run typecheck
npm run build
```

`src/index.ts` exports the initial research-agent manifest. Search providers, browsing tools, citation storage, and memory integration should be supplied through runtime adapters.
