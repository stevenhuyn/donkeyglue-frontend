import { Role } from "../model/GameTypes";

const BACKEND_BASE_URL = window.location.host.includes("donkeyglue")
  ? new URL("https://donkeyglue-frontend.onrender.com")
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

export const getGame = async (gameId: string): Promise<EventSource> => {
  const endpoint = new URL(`/game/${gameId}`, BACKEND_BASE_URL);
  const eventSource = new EventSource(endpoint);
  return eventSource;
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

export const postClue = async (gameId: string, clue: ClueRequest): Promise<boolean> => {
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

export const postGuess = async (gameId: string, guess: GuessRequest): Promise<boolean> => {
  const endpoint = new URL(`/guess/${gameId}`, BACKEND_BASE_URL);
  let res = await fetch(`endpoint`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(guess),
  });

  return res.ok;
};
