import { createSignal } from "solid-js";
import { GameState, Role, ServerMessage } from "../model/GameTypes";
import {
  ClueRequest,
  GuessRequest,
  getGame,
  postClue,
  postGame,
  postGuess,
  postStartGame,
} from "./ServerApi";

export class GameService {
  static #instance: GameService;

  readonly #gameStateSignal = createSignal<GameState | null>(null);
  readonly #roleSignal = createSignal<Role | null>(null);
  #gameId: string | null = null;
  #eventSource: EventSource | null = null;

  public get gameState() {
    return this.#gameStateSignal[0];
  }

  public get role() {
    return this.#roleSignal[0];
  }

  public get setRole() {
    return this.#roleSignal[1];
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
    this.setGameState(null);
    this.setRole(null);
    this.#gameId = null;
    this.#eventSource?.close();
    this.#eventSource = null;
  }

  public async initialise() {
    this.reset();

    // TODO: Fix this delayed search param issue load time race condition, below is a hack
    await new Promise((resolve) => setTimeout(resolve, 200));
    const searchParams = new URLSearchParams(window.location.search);
    const role = searchParams.get("role");

    if (role) {
      console.log("Role Receieved");
      this.#gameId = await postGame(role as Role);
      this.#eventSource = await getGame(this.#gameId);
      this.setRole(role as Role);

      if (this.#eventSource) {
        this.#eventSource.onmessage = (event) => {
          // console.log(event.data);
          const serverMessage = JSON.parse(event.data) as ServerMessage;
          this.setGameState(serverMessage.gameState);
        };
      }
    }

    console.log("INITIALISED");
  }

  public async start() {
    if (this.#gameId) {
      postStartGame(this.#gameId);
    }
  }

  public async makeGuess(guess: GuessRequest) {
    if (this.#gameId) {
      postGuess(this.#gameId, guess);
    }
  }

  public async provideClue(clue: ClueRequest) {
    if (this.#gameId) {
      postClue(this.#gameId, clue);
    }
  }
}
