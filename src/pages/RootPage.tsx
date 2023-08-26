import { createSignal } from "solid-js";
import { Board } from "../components/Board";
import { Counter } from "../components/Counter";

export const RootPage = () => {
  const [clueCount, setClueCount] = createSignal(1);

  return (
    <>
      <h1 class="font-light text-4xl m-6">Welcome to Donkey Glue</h1>
      <Board></Board>
      <input
        type="text"
        placeholder="Clue word"
        class="m-10 input input-bordered w-full max-w-xs"
      />
      <Counter
        decrement={() => setClueCount((prev) => prev - 1)}
        increment={() => setClueCount((prev) => prev + 1)}
        count={clueCount}
        minCount={1}
        maxCount={5}
      ></Counter>
    </>
  );
};
