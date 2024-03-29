export interface CluePhase {
  type: "Clue";
  team: Team;
}

export interface GuessPhase {
  type: "Guess";
  team: Team;
  clue: Clue;
}

export interface EndPhase {
  type: "End";
}

export type Phase = CluePhase | GuessPhase | EndPhase;

export const enum Team {
  Red = "Red",
  Blue = "Blue",
}

export interface Clue {
  word: String;
  count: number;
  remaining: number;
}
