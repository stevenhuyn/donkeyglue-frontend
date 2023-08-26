import { createSignal } from "solid-js";
import { GameState } from "../model/GameTypes";
import { getGame, postGame } from "./ServerApi";

export class GameService {
  static #instance: GameService;

  readonly #gameStateSignal = createSignal<GameState | null>(null);
  #gameId: string | null = null;
  #eventSource: EventSource | null = null;

  public get gameState() {
    return this.#gameStateSignal[0];
  }

  private get setGameState() {
    return this.#gameStateSignal[1];
  }

  public static Instance(): GameService {
    if (!this.#instance) {
      this.#instance = new GameService();
    }
    return this.#instance;
  }

  public async initialise() {
    this.#gameId = await postGame();
    this.#eventSource = await getGame(this.#gameId);

    if (this.#eventSource) {
      this.#eventSource.onmessage = (event) => {
        const gameState = JSON.parse(event.data) as GameState;
        console.log(gameState);
        this.setGameState(gameState);
      };
    }
  }
}
