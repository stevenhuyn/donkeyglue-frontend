import "./App.css";
import { Route, Routes } from "@solidjs/router";
import { GamePage } from "./pages/GamePage";
import { RolePage } from "./pages/RolePage";
import { NotFoundPage } from "./pages/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" component={RolePage}></Route>
      <Route path="/game" component={GamePage}></Route>
      <Route path="/*" component={NotFoundPage}></Route>
    </Routes>
  );
};

export default App;
