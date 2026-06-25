// src/App.jsx
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Albums from "./pages/Albums";
import AlbumDetail from "./pages/AlbumDetail";
import AlbumComments from "./pages/AlbumComments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Albums />}
        />

        <Route
          path="/albums/:id"
          element={<AlbumDetail />}
        />

        <Route
          path="/albums/:id/comments"
          element={<AlbumComments />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;