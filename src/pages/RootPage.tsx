import { createSignal } from "solid-js";
import { Board } from "../components/Board";

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
      <label>
        <div class="join">
          <input class="join-item btn" type="radio" name="options" aria-label="1" />
          <input class="join-item btn" type="radio" name="options" aria-label="2" />
          <input class="join-item btn" type="radio" name="options" aria-label="3" />
        </div>
      </label>
      <label class="w-1/2">
        <div class="flex justify-center">
          <div class="w-1/2">
            <input type="range" min="1" max="4" value="1" class="range range-accent" step="1" />
            <div class="w-full flex justify-between text-xs px-2">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
            </div>
          </div>
        </div>
      </label>
    </>
  );
};
