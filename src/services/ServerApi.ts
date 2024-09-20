import { GameState, Role } from "../model/GameTypes";

const BACKEND_BASE_URL = window.location.host.includes("donkeyglue")
  ? new URL("https://api.donkeyglue.stevenhuyn.com")
  : new URL("http://localhost:3000");

export interface PostGameResponse {
  game_id: string;
}

export const postGame = async (role: Role): Promise<string> => {
  const endpoint = new URL(`/game`, BACKEND_BASE_URL);
  const gameId = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ role: role }),
  })
    .then((res) => res.json() as Promise<PostGameResponse>)
    .then((data) => {
      return data.game_id;
    });

  return gameId;
};

export interface GetGameResponse {
  type: "Playing";
  gameState: GameState;
  role: Role;
}

export const getGame = async (gameId: string): Promise<GetGameResponse> => {
  const endpoint = new URL(`/game/${gameId}`, BACKEND_BASE_URL);
  return await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json() as Promise<GetGameResponse>)
    .then((data) => data);
};

export const postStartGame = async (gameId: string): Promise<boolean> => {
  const endpoint = new URL(`/game/start/${gameId}`, BACKEND_BASE_URL);
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.ok;
};

export interface ClueRequest {
  word: string;
  count: number;
}

export const postClue = async (
  gameId: string,
  clue: ClueRequest
): Promise<boolean> => {
  const endpoint = new URL(`/clue/${gameId}`, BACKEND_BASE_URL);
  let res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(clue),
  });

  return res.ok;
};

export interface GuessRequest {
  guess: string;
}

export const postGuess = async (
  gameId: string,
  guess: GuessRequest
): Promise<boolean> => {
  const endpoint = new URL(`/guess/${gameId}`, BACKEND_BASE_URL);
  let res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(guess),
  });

  return res.ok;
};
