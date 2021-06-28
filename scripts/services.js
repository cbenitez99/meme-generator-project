const wholesome = "/wholesomememes"
//Removing the '+' and 'wholesome' from concatenating string will provide more edgy memes.
const URL = "https://meme-api.herokuapp.com/gimme" + `${wholesome}`
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
        upvoteCount.innerHTML = data.ups + " People have upvoted this meme 🔥 (hover me)"
        const title = data.title
        memeTitle.innerHTML = `${"Meme Title:  "}` + title 
        invertImg();
    });
};

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