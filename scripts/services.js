const URL = "https://meme-api.herokuapp.com/gimme/me_irl"

function getMeme() {
    return fetch(URL, {
        headers: {
            "Accept" : "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        const meme = data.url
        memeImg.src = meme
        upvoteCount.innerHTML = data.ups + " People have upvoted this meme."
    });
}   

// function postMeme(body) {
//     return fetch(URL, {
//         method: 'POST',
//         headers: {
//             "Accept" : "application/json"
//         },
//         body: JSON.stringify(body)
//     })
//     .then(res => res.json())
// }