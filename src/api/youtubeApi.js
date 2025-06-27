import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

/**
 * 動画IDから詳細情報を取得
 * @param {string} videoId
 * @returns {Promise<object>}
 */
export async function fetchVideoDetail(videoId) {
  const res = await axios.get(`${BASE_URL}/video/${videoId}`);
  return res.data;
}

/**
 * キーワードで動画検索
 * @param {string} query
 * @returns {Promise<object>}
 */
export async function searchVideos(query) {
  const res = await axios.get(`${BASE_URL}/search`, { params: { q: query } });
  return res.data;
}
