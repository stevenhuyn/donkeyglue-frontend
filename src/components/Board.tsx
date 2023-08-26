import { createSignal, onMount } from "solid-js";
import { CardModel, Identity } from "../model/GameTypes";
import { classNames } from "../utils/ClassNames";
import { GameService } from "../services/GameService";
import { Phase } from "../model/Phase";

export const Board = () => {
  const gameService = GameService.Instance();

  onMount(() => {
    gameService.initialise().then(() => {
      console.log(gameService.gameState()?.phase);
    });
  });

  return (
    <div class="flex flex-col items-center justify-center">
      <div class="grid grid-cols-5 gap-4">
        {gameService.gameState()?.board.map((card, i) => {
          return (
            <Cell
              phase={gameService.gameState()?.phase}
              word={card.word}
              guessed={card.guessed}
              identity={card.identity}
            />
          );
        })}
      </div>
    </div>
  );
};

export type CardProps = Partial<CardModel> & { phase?: Phase };

export const Cell = (props: CardProps) => {
  const { key, word, guessed, identity } = props;
  const [isActive, setIsActive] = createSignal(false);

  const toggleActive = () => {
    setIsActive(!isActive());
  };

  return (
    <div
      class={classNames(
        "w-full p-4 text-center rounded text-black border border-black",
        "font-light",
        identity === Identity.Assassin && "bg-gray-200",
        identity === Identity.Red && "bg-red-200",
        identity === Identity.Blue && "bg-blue-200",
        identity === Identity.Bystander && "bg-orange-200",
        identity === Identity.Hidden && "bg-white"
      )}
      onClick={toggleActive}
    >
      {word}
    </div>
  );
};
