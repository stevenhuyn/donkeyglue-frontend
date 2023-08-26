import { createSignal, onMount } from "solid-js";
import { Board } from "../components/Board";
import { Counter } from "../components/Counter";
import { GameService } from "../services/GameService";
import { phaseToString } from "../model/Phase";

export const RootPage = () => {
  const [clueCount, setClueCount] = createSignal(1);
  const gameService = GameService.Instance();

  onMount(() => {
    gameService.initialise();
  });

  return (
    <>
      <h1 class="font-light text-4xl m-6">Welcome to Donkey Glue</h1>
      <h1 class="font-light text-2xl m-6">{phaseToString(gameService.gameState()?.phase)}</h1>
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
      <button class="btn mx-10">Submit</button>
    </>
  );
};
