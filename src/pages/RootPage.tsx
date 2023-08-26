import { onMount } from "solid-js";
import { GameService } from "../services/GameService";
import { Board } from "../components/Board";

export const RootPage = () => {
  const gameService = GameService.Instance();

  onMount(() => {
    gameService.initialise();
  });

  return <Board board={gameService.gameState()?.board}></Board>;
};
