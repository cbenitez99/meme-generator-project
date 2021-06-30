console.log("All Files Connected!");
const memeImg = document.querySelector("#meme-img");
const reloadMemeBttn = document.getElementById('button');
const upvoteCount = document.getElementById('upvotes');
const memeTitle = document.getElementById("meme-title");
const saveMemeBttn = document.getElementById("save-button")


saveMemeBttn.addEventListener('click', saveMeme)



reloadMemeBttn.addEventListener('click', getMeme)


//document.addEventListener('click', removeMeme)

upvoteCount.addEventListener('mouseover', (e) => {
    e.target.style.color = "yellow"
});

upvoteCount.addEventListener('mouseout', (e) => {
    e.target.style.color = "black"
});


//let global varibale? while loop (true/false)
//let inverted = e.target.style.filter="invert(100%)"
function invertImg (){
    memeImg.addEventListener("dblclick", (e) => {
        e.target.style.filter="invert(100%)"
    });
};


function saveMeme(){
    const ol = document.getElementById("saved-memes")
    const li = document.createElement("li");
    li.textContent = meme
    ol.appendChild(li)
    li.addEventListener("click", () => {removeMeme(li)});  
};

function removeMeme(li){
   li.remove()
};


removeMeme();
saveMeme();
getMeme();

