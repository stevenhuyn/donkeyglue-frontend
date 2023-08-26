import { createSignal, onMount } from "solid-js";
import { CardModel, Identity } from "../model/GameTypes";
import { classNames } from "../utils/ClassNames";
import { GameService } from "../services/GameService";

export const Board = (props: undefined) => {
  const gameService = GameService.Instance();

  onMount(() => {
    gameService.initialise();
  });

  return (
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div class="grid grid-cols-5 gap-4">
        {gameService.gameState()?.board.map((card, i) => {
          console.log(card.identity);
          return <Cell key={i} word={card.word} guessed={card.guessed} identity={card.identity} />;
        })}
      </div>
    </div>
  );
};

export type CardProps = Partial<CardModel> & { key: number };

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
