import { Accessor } from "solid-js";
import { classNames } from "../utils/ClassNames";

export interface CounterProps {
  decrement: () => void;
  increment: () => void;
  minCount: number;
  maxCount: number;
  count: Accessor<number>;
}

export const Counter = (props: CounterProps) => {
  const { count, minCount, maxCount, decrement, increment } = props;

  return (
    <div class="join join-horizontal">
      <button
        class={classNames("join-item btn w-11", count() <= minCount && "btn-disabled")}
        onClick={decrement}
      >
        -
      </button>
      <div class="join-item bg-base-200 px-3 w-7 flex justify-center items-center z-10">
        <span class="select-none">{count()}</span>
      </div>
      <button
        class={classNames("join-item btn w-11", count() >= maxCount && "btn-disabled")}
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};
