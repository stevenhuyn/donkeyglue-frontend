import { CardModel, Identity, Role } from "../model/GameTypes";
import { classNames } from "../utils/ClassNames";
import { GameService } from "../services/GameService";
import { Phase } from "../model/Phase";

export const Board = () => {
  const gameService = GameService.Instance();

  return (
    <div class="flex flex-col items-center justify-center">
      <div class="grid grid-cols-5 gap-4">
        {gameService.gameState()?.board.map((card, _i) => {
          return (
            <Cell
              phase={gameService.gameState()?.phase}
              word={card.word}
              guessed={card.guessed}
              identity={card.identity}
              role={gameService.role()}
            />
          );
        })}
      </div>
    </div>
  );
};

export type CardProps = Partial<CardModel> & { phase?: Phase; role: Role | null };

export const Cell = (props: CardProps) => {
  const gameService = GameService.Instance();
  const { word, guessed, identity, role } = props;

  const toggleActive = () => {
    if (word) {
      gameService.makeGuess({ guess: word });
    }
  };

  const cursorPhase = () => {
    return gameService.gameState()?.phase?.type === "Guess"
      ? "cursor-pointer"
      : "cursor-not-allowed";
  };

  const backgroundClass = () => {
    console.log(role);
    if (role === Role.RedOperative) {
      return classNames(
        identity === Identity.Assassin && "bg-gray-400",
        identity === Identity.Red && "bg-red-200",
        identity === Identity.Blue && "bg-blue-200",
        identity === Identity.Bystander && "bg-orange-200",
        identity === Identity.Hidden && "bg-gray-200"
      );
    } else if (role === Role.RedSpymaster) {
      return classNames(
        guessed && identity === Identity.Assassin && "bg-gray-400 text-black",
        guessed && identity === Identity.Red && "bg-red-200 text-black",
        guessed && identity === Identity.Blue && "bg-blue-200 text-black",
        guessed && identity === Identity.Bystander && "bg-orange-200 text-black",
        !guessed && identity === Identity.Assassin && "bg-gray-600 text-white font-medium",
        !guessed && identity === Identity.Red && "bg-gray-200 text-red-600",
        !guessed && identity === Identity.Blue && "bg-gray-200 text-blue-600",
        !guessed && identity === Identity.Bystander && "bg-gray-200 text-black-600"
      );
    }
  };

  console.log("backgroundClass", backgroundClass());

  return (
    <div
      class={classNames(
        "w-full p-4 text-center rounded text-black border border-black select-none",
        "font-light",

        cursorPhase(),
        backgroundClass()
      )}
      onClick={toggleActive}
    >
      {word}
    </div>
  );
};
