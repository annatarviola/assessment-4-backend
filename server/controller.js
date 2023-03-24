const tracks = []
let globalId = 1

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

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune)
    },

    getTracks: (req, res) => res.status(200).send(tracks),

    createTrack: (req, res) => {
        let { link } = req.body;
        let newTrack = {
            id: globalId,
            link
        }

        tracks.push(newTrack);
        res.status(200).send(tracks);
        globalId++
        console.log(tracks)
    },

    updateURL: (req, res) => {
        let { id } = req.params;
        let { newLink } = req.body;
        let index = tracks.findIndex(elem => elem.id === +req.params.id)

        //for (let i = 0; i < tracks.length; i++) {
            if (tracks.id === index) {
                tracks.link = newLink
                res.status(200).send(tracks)
                console.log(tracks[i])
            }
        //}
    },
    

    deleteTrack: (req, res) => {
        let index = tracks.findIndex(elem => elem.id === +req.params.id)
        tracks.splice(index, 1)
        res.status(200).send(tracks)
    }

}