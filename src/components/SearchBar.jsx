import React from "react";

export default function SearchBar({ query, setQuery, onSearch, loading }) {
  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="検索キーワードを入力"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearch();
        }}
        disabled={loading}
        style={{ width: "300px", marginRight: "8px" }}
      />
      <button onClick={onSearch} disabled={loading}>
        {loading ? "検索中..." : "検索"}
      </button>
    </div>
  );
}
