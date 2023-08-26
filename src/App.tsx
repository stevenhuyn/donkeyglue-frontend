import "./App.css";
import { Route, Routes } from "@solidjs/router";
import { GamePage } from "./pages/GamePage";
import { RolePage } from "./pages/RolePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" component={RolePage}></Route>
      <Route path="/game" component={GamePage}></Route>
    </Routes>
  );
};

export default App;
