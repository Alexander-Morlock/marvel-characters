import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterPage from "./components/character-page";
import MainPage from "./components/main-page";
import { Provider } from "react-redux";
import { store } from "./store";

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path=":id" element={<CharacterPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
