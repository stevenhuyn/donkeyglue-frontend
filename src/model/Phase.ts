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

export const phaseToString = (phase?: Phase): string => {
  if (!phase) return "Loading";

  if (phase.type === "Clue") {
    return `${phase.team} Spymaster to give a Clue`;
  } else if (phase.type === "Guess") {
    return `${phase.team} Operative to Guess - Clue: ${phase.clue.word} - Remaining ${phase.clue.remaining}`;
  } else {
    return "Game Ended";
  }
};

const enum Team {
  Red = "Red",
  Blue = "Blue",
}

export interface Clue {
  word: String;
  count: number;
  remaining: number;
}
