import { createSignal } from "solid-js";
import { CardModel, Identity } from "../model/GameTypes";
import { classNames } from "../utils/ClassNames";

export interface CardGridProps {
  board?: CardModel[];
}

export const Board = (props: CardGridProps) => {
  const { board } = props;

  console.log("Board", board);

  return (
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div class="grid grid-cols-5 gap-4">
        {board?.map((card, i) => (
          <Cell key={i} word={card.word} guessed={card.guessed} identity={card.identity} />
        ))}
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
        identity === Identity.Assassin && "bg-gray-400",
        identity === Identity.Red && "bg-red",
        identity === Identity.Blue && "bg-blue",
        identity === Identity.Bystander && "bg-orange-100",
        identity === Identity.Hidden && "bg-white"
      )}
      onClick={toggleActive}
    >
      {word}
      {guessed || "hmm?"}
      {identity}
    </div>
  );
};
