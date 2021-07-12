const wholesome = "/wholesomememes"
//Commenting out  the '+' and `${wholesome}` from concatenating string will provide more edgy memes.
const URL = "https://meme-api.herokuapp.com/gimme" + `${wholesome}`
function getMeme() {
    fetch(URL, {
        headers: {
            "Accept" : "application/json"
        }
    })
    .then(res => res.json()) 
    .then(data => {
        memeImg.src = data.url
        upvoteCount.innerHTML = data.ups + " People have upvoted this meme 🔥 (hover me)"
        const title = data.title
        memeTitle.innerHTML = `${"Meme Title:  "}` + title 
        invertImg();
    });
};