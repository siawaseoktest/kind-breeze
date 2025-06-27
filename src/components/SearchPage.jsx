import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3000/api/search", {
        params: { q: query },
      });
      setResults(res.data.videos || []);
    } catch (e) {
      alert("検索エラー: " + e.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>動画検索</h1>
      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={search}
        loading={loading}
      />
      <SearchResults results={results} />
    </div>
  );
}
