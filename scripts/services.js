const wholesome = "/wholesomememes"
//Removing ${wholesome} will provide edgy memes.
const URL = `https://meme-api.herokuapp.com/gimme${wholesome}` 
function getMeme() {
    fetch(URL, { 
        headers: {
            "Accept" : "application/json"
        }
    })
    .then(res => res.json()) 
    .then(data => {
        const title = data.title
        memeImg.src = data.url
        memeImg.style.filter = "invert(0%)"
        upvoteCount.innerHTML = `${data.ups} People have upvoted this meme 🔥 (hover me)`
        memeTitle.innerHTML = `Meme Title: ${title}` 
        invertImg();
    });
};