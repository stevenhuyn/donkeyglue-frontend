import { Phase } from "./Phase";

export interface GameState {
  board: CardModel[];
  phase: Phase;
}

export interface CardModel {
  word: string;
  guessed: boolean;
  identity: Identity;
}

export const enum Identity {
  Red = "Red",
  Blue = "Blue",
  Assassin = "Assassin",
  Bystander = "Bystander",
  Hidden = "Hidden",
}
