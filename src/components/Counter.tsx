import { Accessor, Setter } from "solid-js";
import { classNames } from "../utils/ClassNames";
import { GameService } from "../services/GameService";
import { CardModel, Identity } from "../model/GameTypes";

export interface CounterProps {
  decrement: () => void;
  increment: () => void;
  setCount: Setter<number>;
  count: Accessor<number>;
}

export const Counter = (props: CounterProps) => {
  const gameService = GameService.Instance();
  const { count, setCount, decrement, increment } = props;

  const maxClueCount = (): number => {
    let board = gameService.gameState()?.board;

    if (!board) {
      return 1;
    }

    let maxCount = board.filter((card: CardModel) => card.identity === Identity.Red).length;

    setCount(Math.min(count(), maxCount));

    return maxCount;
  };

  return (
    <div class="join join-horizontal">
      <button
        class={classNames("join-item btn w-11", count() <= 1 && "btn-disabled")}
        onClick={decrement}
      >
        -
      </button>
      <div class="join-item bg-base-200 px-3 w-7 flex justify-center items-center z-10">
        <span class="select-none">{count()}</span>
      </div>
      <button
        class={classNames("join-item btn w-11", count() >= maxClueCount() && "btn-disabled")}
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};
