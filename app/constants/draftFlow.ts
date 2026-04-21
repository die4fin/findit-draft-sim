export type DraftPhase = "ban" | "pick";
export type TeamTurn = "A" | "B";

export interface DraftStep {
  type: DraftPhase;
  team: TeamTurn;
}

export const MPL_DRAFT_FLOW: DraftStep[] = [
  // BAN PHASE 1
  { type: "ban", team: "A" },
  { type: "ban", team: "B" },
  { type: "ban", team: "B" },
  { type: "ban", team: "A" },
  { type: "ban", team: "A" },
  { type: "ban", team: "B" },

  // PICK PHASE 1
  { type: "pick", team: "A" },
  { type: "pick", team: "B" },
  { type: "pick", team: "B" },
  { type: "pick", team: "A" },
  { type: "pick", team: "A" },
  { type: "pick", team: "B" },

  // BAN PHASE 2
  { type: "ban", team: "B" },
  { type: "ban", team: "A" },
  { type: "ban", team: "B" },
  { type: "ban", team: "A" },

  // PICK PHASE 2
  { type: "pick", team: "B" },
  { type: "pick", team: "A" },
  { type: "pick", team: "A" },
  { type: "pick", team: "B" },
];