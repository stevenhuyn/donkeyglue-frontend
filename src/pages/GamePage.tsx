import { Show, createSignal, onCleanup, onMount } from "solid-js";
import { Board } from "../components/Board";
import { Counter } from "../components/Counter";
import { GameService } from "../services/GameService";
import { PhaseText } from "../components/PhaseText";
import { Team } from "../model/Phase";
import { Role } from "../model/GameTypes";

export const GamePage = () => {
  const [clueCount, setClueCount] = createSignal(1);
  const [clueWord, setClueWord] = createSignal("");
  const gameService = GameService.Instance();

  onMount(() => {
    gameService.initialise().then(() => {
      console.log("Initialised");
      gameService.start();
    });
  });

  onCleanup(() => {
    gameService.reset();
  });

  const cluePhase = () => {
    let phase = gameService.gameState()?.phase;

    return phase?.type === "Clue" && phase?.team === Team.Red;
  };

  const canSubmitClue = () => {
    if (clueWord().length === 0) {
      return false;
    }

    if (/[^a-zA-Z]/.test(clueWord())) {
      return false;
    }

    return true;
  };

  const submitClue = () => {
    gameService.provideClue({ word: clueWord(), count: clueCount() });
  };

  return (
    <>
      <h1 class="font-light text-4xl m-6">Welcome to Donkey Glue</h1>
      <PhaseText></PhaseText>
      <Board></Board>
      <Show when={gameService.role() === Role.RedSpymaster}>
        <input
          type="text"
          placeholder="Single Clue Word"
          class="m-10 input input-bordered w-full max-w-xs"
          value={clueWord()}
          enterkeyhint="send"
          onInput={(e) => setClueWord(e.currentTarget.value)}
          disabled={!cluePhase()}
        />
        <Counter
          decrement={() => setClueCount((prev) => prev - 1)}
          increment={() => setClueCount((prev) => prev + 1)}
          setCount={setClueCount}
          count={clueCount}
        ></Counter>
        <button class="btn mx-10" disabled={!cluePhase() || !canSubmitClue()} onClick={submitClue}>
          Submit
        </button>
      </Show>
    </>
  );
};
