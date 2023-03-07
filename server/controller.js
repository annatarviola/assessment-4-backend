const playlists = [
    {
        "id": 1,
        "name": "Castlevania Lo-fi",
        "energy": "medium",
        "url": "https://www.youtube.com/watch?v=kdA_3sk4tKU"
    }
]

let globalId = 2;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = [
            "A faithful friend is a strong defense.", 
            "A short pencil is usually better than a long memory any day.", 
            "A soft voice may be awfully persuasive.", 
            "Do not make extra work for yourself.", 
            "Your first love has never forgotten you."
        ];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    
    // Playlist:

    getPlaylist: (req, res) => res.status(200).send(playlists),

    deletePlaylist: (req, res) => {
        let index = playlists.findIndex(elem => elem.id === +req.params.id)
        playlists.splice(index, 1)
        res.status(200).send(playlists)
    },

    createPlaylist: (req, res) => {
        let { name, energy, url } = req.body
        let newPlaylist = {
            id: globalId,
            name,
            energy,
            url
        }
        playlists.push(newPlaylist)
        res.status(200).send(playlists)
        globalId++
    },

}