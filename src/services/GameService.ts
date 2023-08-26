import { createSignal } from "solid-js";
import { GameState, Role, ServerMessage } from "../model/GameTypes";
import { getGame, postGame } from "./ServerApi";

export class GameService {
  static #instance: GameService;

  readonly #gameStateSignal = createSignal<GameState | null>(null);
  #role: Role | null = null;
  #gameId: string | null = null;
  #eventSource: EventSource | null = null;

  public get gameState() {
    return this.#gameStateSignal[0];
  }

  public get role(): Role | null {
    return this.#role;
  }

  public set role(role: Role) {
    this.#role = role;
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

  public reset() {
    this.#gameStateSignal[1](null);
    this.#role = null;
    this.#gameId = null;
    this.#eventSource?.close();
    this.#eventSource = null;
  }

  public async initialise() {
    const searchParams = new URLSearchParams(window.location.search);
    const role = searchParams.get("role");

    if (role) {
      this.#gameId = await postGame(role as Role);
      this.#eventSource = await getGame(this.#gameId);

      if (this.#eventSource) {
        this.#eventSource.onmessage = (event) => {
          console.log(event.data);
          const serverMessage = JSON.parse(event.data) as ServerMessage;
          this.setGameState(serverMessage.gameState);
        };
      }
    }

    console.log("INITIALISED");
  }
}
