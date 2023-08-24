import { createSignal, onMount } from "solid-js";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
import "./App.css";

interface PostGameResponse {
  game_id: string;
}

const App = () => {
  const [count, setCount] = createSignal(0);

  onMount(async () => {
    const game_id = await fetch("http://localhost:3000/game", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json() as Promise<PostGameResponse>)
      .then((data) => {
        return data.game_id;
      });

    const eventSource = new EventSource(`http://localhost:3000/game/${game_id}`);

    eventSource.onmessage = (event) => {
      console.log(event.data);
    };
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count()}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">Click on the Vite and Solid logos to learn more</p>
    </>
  );
};

export default App;
