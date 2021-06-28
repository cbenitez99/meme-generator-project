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

// function invertColors(e){
//     e.target.style.filter="invert(100%)"
// }; 

memeImg.addEventListener("dblclick", (e) => {
    if(e.target.style.filter="invert(0%)"){
        e.target.style.filter="invert(100%)"
    }else if( e.target.style.filter = "invert(100%"){
        e.target.style.filter="invert(0%)"
    }
});

getMeme()

