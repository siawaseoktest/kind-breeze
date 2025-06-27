import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import TrendingList from "./components/TrendingList";
import VideoDetail from "./components/VideoDetail";
import SearchPage from "./components/SearchPage";

export default function App() {
  return (
    <BrowserRouter>
      <header style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
        <nav>
          <Link to="/" style={{ marginRight: 10 }}>
            急上昇
          </Link>
          <Link to="/search">検索</Link>
        </nav>
      </header>
      <main style={{ padding: 10 }}>
        <Routes>
          <Route path="/" element={<TrendingList />} />
          <Route path="/video/:videoId" element={<VideoDetail />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
