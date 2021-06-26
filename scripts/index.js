console.log("All Files Connected!")
//const ul = document.getElementById('memes-container')
const memeImg = document.querySelector("#meme-img")
const reloadMemeBttn = document.getElementById('button')
const upvoteCount = document.getElementById('upvotes')

reloadMemeBttn.addEventListener('click', getMeme)

upvoteCount.addEventListener('mouseover', (e) => {
    e.target.style.color = "yellow"
});

upvoteCount.addEventListener('mouseout', (e) => {
    e.target.style.color = "black"
});

memeImg.addEventListener("dblclick", (e) => {
    e.target.style.filter="invert(100%)"
}); 

getMeme()

