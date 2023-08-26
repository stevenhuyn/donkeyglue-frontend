export interface PostGameResponse {
  game_id: string;
}

export const postGame = async (): Promise<string> => {
  const gameId = await fetch("http://localhost:3000/game", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json() as Promise<PostGameResponse>)
    .then((data) => {
      return data.game_id;
    });

  return gameId;
};

export const getGame = async (gameId: string): Promise<EventSource> => {
  const eventSource = new EventSource(`http://localhost:3000/game/${gameId}`);
  return eventSource;
};

export interface ClueRequest {
  word: string;
  count: number;
}

export const postClue = async (gameId: string, clue: ClueRequest): Promise<boolean> => {
  let res = await fetch(`http://localhost:3000/clue/${gameId}`, {
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
  let res = await fetch(`http://localhost:3000/clue/${gameId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(guess),
  });

  return res.ok;
};
