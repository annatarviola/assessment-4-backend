const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { 
    getCompliment,
    getFortune,
    getTracks,
    createTrack,
    updateURL,
    deleteTrack 
} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)

app.get("/api/tracks", getTracks)
app.post("/api/tracks", createTrack)
app.delete("/api/tracks/:id", deleteTrack)
app.put("/api/tracks/:id", updateURL)

app.listen(4000, () => console.log("Server running on 4000"));

