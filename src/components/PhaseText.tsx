import { Role } from "../model/GameTypes";
import { Phase, Team } from "../model/Phase";
import { GameService } from "../services/GameService";
import { classNames } from "../utils/ClassNames";

export const PhaseText = () => {
  const gameService = GameService.Instance();

  const colorClass = () => phaseToColorClass(gameService.gameState()?.phase);
  const message = () => phaseToString(gameService.gameState()?.phase, gameService.role());

  return <h2 class={classNames("font-light text-xl m-6", colorClass())}>{message()}</h2>;
};

const phaseToString = (phase: Phase | undefined, role: Role | null): string => {
  if (!phase) return "Loading";

  if (phase.type === "Clue") {
    return `${phase.team} Spymaster ${role === Role.RedSpymaster ? "(You)" : ""} to give a Clue`;
  } else if (phase.type === "Guess") {
    return `${phase.team} Operative ${role === Role.RedOperative ? "(You)" : ""} to Guess - Clue: ${
      phase.clue.word
    } - Remaining ${phase.clue.remaining}`;
  } else {
    return "Game Ended";
  }
};

const phaseToColorClass = (phase?: Phase): string => {
  if (!phase) return "";

  if (phase.type === "Clue" || phase.type === "Guess") {
    return phase.team === Team.Red ? `text-red-600` : `text-blue-600`;
  } else {
    return "Game Ended";
  }
};
