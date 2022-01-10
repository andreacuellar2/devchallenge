import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {
  Routes,
  Route
} from "react-router-dom";

import {Board} from "./tictactoe";
import {Todo} from  "./todo";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <Routes>
    <Route path="tictactoe" element={<Board />} />
    <Route path="todo" element={<Todo />} />
  </Routes>
</BrowserRouter>,
rootElement
);

