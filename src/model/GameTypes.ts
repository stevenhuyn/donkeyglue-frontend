import { Phase } from "./Phase";

export interface GameState {
  board: Card[];
  phase: Phase;
}

export interface Card {
  word: string;
  guessed: boolean;
  identity: Identity;
}

export const enum Identity {
  Red,
  Blue,
  Assassin,
  Bystander,
  Hidden,
}
