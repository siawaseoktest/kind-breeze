import React from "react";
import { Link } from "react-router-dom";

export default function SearchResults({ results }) {
  if (!results.length) return <p>検索結果がありません</p>;

  return (
    <ul>
      {results.map((v) => (
        <li key={v.videoId}>
          <Link to={`/video/${v.videoId}`}>
            {v.title} - {v.author.name} ({v.timestamp})
          </Link>
        </li>
      ))}
    </ul>
  );
}
