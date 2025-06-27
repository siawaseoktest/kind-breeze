import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TREND_URL =
  "https://raw.githubusercontent.com/siawaseok3/wakame/refs/heads/master/trend.json";

export default function TrendingList() {
  const [videos, setVideos] = useState([]);
  const [updated, setUpdated] = useState(null);

  useEffect(() => {
    fetch(TREND_URL)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.topVideos || []);
        setUpdated(data.updated);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>急上昇動画一覧</h1>
      <p>更新日時: {updated}</p>
      <ul>
        {videos.map(([videoId, info]) => (
          <li key={videoId}>
            <Link to={`/video/${videoId}`}>
              {info.videoTitle} - {info.channelName} ({info.publishedAt})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
