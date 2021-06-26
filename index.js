function fetchData(url){
    return fetch(url).then(res => res.json());
}

document.addEventListener('DOMContentLoaded', () => {
    memeImages("https://meme-api.herokuapp.com/gimme/50");

});

function memeImages(imgUrl){
    fetchData(imgUrl)
    .then(data => {
        data.preview.forEach(image => addImage(image))
    });
}

function addImage(memePic) {
    const memeImgContainer = document.getElementById("meme-image-container");
    const img = document.createElement('img');
    img.src = memePic;
    memeImgContainer.appendChild(img);
}