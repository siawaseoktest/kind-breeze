import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function VideoDetail() {
  const { videoId } = useParams();
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/api/video/${videoId}`)
      .then((res) => {
        setVideoData(res.data);
        setError(null);
      })
      .catch((e) => {
        setError(e.message);
        setVideoData(null);
      })
      .finally(() => setLoading(false));
  }, [videoId]);

  if (loading) return <p>読み込み中...</p>;
  if (error) return <p>エラー: {error}</p>;
  if (!videoData) return <p>動画データがありません</p>;

  const d = videoData.ytdl;

  return (
    <div>
      <h1>{d.title}</h1>
      <p>投稿者: {d.author.name}</p>
      <p>再生時間: {d.lengthSeconds} 秒</p>
      <p>再生回数: {d.viewCount}</p>
      <p>説明: {d.shortDescription}</p>
      <img
        src={d.thumbnails[d.thumbnails.length - 1].url}
        alt="サムネイル"
        style={{ maxWidth: "100%" }}
      />
      <div style={{ marginTop: 20 }}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
