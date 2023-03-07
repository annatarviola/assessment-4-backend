const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

const form = document.querySelector('form')
const playlistDisplay = document.querySelector('playlist-display')

const basePlaylistURL = "http://localhost:4000/api/playlist/"

const playlistCallback = ({ data: playlists }) => displayPlaylists(playlists)
const errCallback = err => console.log(err)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/") // This is where I ran into my big issue. I'm still fuzzy on accessing these api urls. I couldn't get this to work.
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getAllPlaylists = () => axios.get(baseURL).then(playlistsCallback).catch(errCallback)
const createPlaylist = body => axios.post(baseURL, body).then(playlistsCallback).catch(errCallback)
const deletePlaylist = id => axios.delete(`${baseURL}/${id}`).then(playlistsCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#playlistTitle')
    let energy = document.querySelector('#energy')
    let url = document.querySelector('#link')

    let bodyObj = {
        name: name.value,
        energy: energy.value, 
        url: url.value
    }

    createHouse(bodyObj)

    name.value = ''
    energy.value = ''
    url.value = ''
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)