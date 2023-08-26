import "./App.css";
import { Route, Routes } from "@solidjs/router";
import { RootPage } from "./pages/RootPage";

interface PostGameResponse {
  game_id: string;
}

const App = () => {
  return (
    <Routes>
      <Route path="/" component={RootPage}></Route>
    </Routes>
  );
};

export default App;
