console.log("All Files Connected!");
const memeImg = document.querySelector("#meme-img");
const reloadMemeBttn = document.getElementById('button');
const upvoteCount = document.getElementById('upvotes');
const memeTitle = document.getElementById("meme-title");
const saveMemeBttn = document.getElementById("save-button")

document.addEventListener("DOMContentLoaded", () => {
    saveMemeBttn.addEventListener('click', saveMeme)
    
    reloadMemeBttn.addEventListener('click', getMeme)

    upvoteCount.addEventListener('mouseover', (e) => {
        e.target.style.color = "yellow"
    });
    
    upvoteCount.addEventListener('mouseout', (e) => {
        e.target.style.color = "black"
    });
})

function invertImg (){
    memeImg.addEventListener("dblclick", (e) => {
        e.target.style.filter=e.target.style.filter==="invert(100%)" ? "invert(0%)" : "invert(100%)"
    });
};

function saveMeme(e){
    const ol = document.getElementById("saved-memes")
    const li = document.createElement("li")
    const liButton = document.createElement("button")
    const a = document.createElement("a")
    a.innerText = document.querySelector("#meme-title").innerText
    a.href = document.querySelector("img").src
    liButton.innerHTML = "x"
    li.appendChild(a) 
    a.target = "_blank"
    ol.appendChild(li)
    li.appendChild(liButton)
    liButton.addEventListener("click", (e) => removeMeme(e)); 
};

function removeMeme(e){
    e.target.parentNode.remove()
};


//fetch
//scope
//hoisitng