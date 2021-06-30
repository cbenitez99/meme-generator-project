console.log("All Files Connected!");
const memeImg = document.querySelector("#meme-img");
const reloadMemeBttn = document.getElementById('button');
const upvoteCount = document.getElementById('upvotes');
const memeTitle = document.getElementById("meme-title");
const saveMemeBttn = document.getElementById("save-button")


saveMemeBttn.addEventListener('click', saveMeme)

reloadMemeBttn.addEventListener('click', getMeme)

upvoteCount.addEventListener('mouseover', (e) => {
    e.target.style.color = "yellow"
});

upvoteCount.addEventListener('mouseout', (e) => {
    e.target.style.color = "black"
});

function invertImg (){
    memeImg.addEventListener("dblclick", (e) => {
        e.target.style.filter=e.target.style.filter==="invert(100%)" ? "invert(0%)" : "invert(100%)"
        console.log(e.target.style.filter);
    });
};

function saveMeme(){
    const ol = document.getElementById("saved-memes")
    const li = document.createElement("li")
    
    //li.createElement("#meme-links")
    li.textContent = meme
    //li.appendChild(document.createElement("button"))
    //li.textContent = title
    ol.appendChild(li)
    li.addEventListener("dblclick", (e) => {removeMeme(e)}); 
    
};

function removeMeme(e){
    e.target.remove()
};

removeMeme();
saveMeme();
getMeme();

