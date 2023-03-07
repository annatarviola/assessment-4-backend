const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { 
    getCompliment, 
    getFortune,
    getPlaylist,
    deletePlaylist,
    createPlaylist,
    updatePlaylist
} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/compliment", getFortune);
app.get("/api/compliment", getPlaylist)
app.get("/api/compliment/:id", deletePlaylist)
app.get("/api/compliment", createPlaylist)
app.get("/api/compliment/:id", updatePlaylist)

app.listen(4000, () => console.log("Server running on 4000"));
