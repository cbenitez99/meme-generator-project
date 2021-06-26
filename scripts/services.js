const URL = "https://meme-api.herokuapp.com/gimme/me_irl"

function getMeme() {
    return fetch(URL)
}