const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

const tracksForm = document.querySelector('form')
const trackContainer = document.querySelector('#track-container')
const trackBaseURL = `http://localhost:4000/api/tracks`

const tracksCallback = ({ data: tracks }) => displayTracks(tracks)
const errCallback = err => console.log(err)

const getAllTracks = () => axios.get(trackBaseURL).then(tracksCallback).catch(errCallback)
const createTracks = body => axios.post(trackBaseURL, body).then(tracksCallback).catch(errCallback)
const deleteTrack = id => axios.delete(`${trackBaseURL}/${id}`).then(tracksCallback).catch(errCallback)
const updateURL = id => axios.put(`${trackBaseURL}/${id}`).then(tracksCallback).catch(errCallback)


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

function submitHandler(e) {
    e.preventDefault()

    let link = document.querySelector('#link')
    let bodyObj = {
        link: link.value
    }
    createTracks(bodyObj)
    link.value = ''
}

function createTrackCard(track) {
    const trackCard = document.createElement('div')
    trackCard.classList.add('track-card')
    
    let str = `${track.link}`
    let videoID = str.split("=")
    
    trackCard.innerHTML = `<iframe width="420" height="315"
    src="https://www.youtube.com/embed/${videoID[1]}"></iframe>
    <div class="btns-container">
    <form>
        <input type="text" id="new-link" placeholder="New Link" />
        <button onclick="updateURL(${track.id})">Update URL</button>
    </form>
    <button onclick="deleteTrack(${track.id})">Delete</button>`
    
    trackContainer.appendChild(trackCard)
}

function displayTracks(arr) {
    trackContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createTrackCard(arr[i])
    }
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)

tracksForm.addEventListener('submit', submitHandler)

getAllTracks()