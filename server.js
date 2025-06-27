const express = require("express");
const cors = require("cors");
const ytdl = require("@distube/ytdl-core");
const { Innertube } = require("youtubei.js");
const ytSearch = require("yt-search");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/video/:videoId", async (req, res) => {
  try {
    const videoId = req.params.videoId;
    const info = await ytdl.getInfo(videoId);
    const yt = await Innertube.create();
    const detail = await yt.getInfo(videoId);
    res.json({ ytdl: info.videoDetails, innertube: detail });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get("/api/search", async (req, res) => {
  try {
    const q = req.query.q;
    if (!q) return res.status(400).json({ error: "query param q is required" });
    const r = await ytSearch(q);
    res.json(r);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API server running on port ${PORT}`));
