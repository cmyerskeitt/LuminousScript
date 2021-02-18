const endPoint = "http://localhost:3000/api/v1/images"

document.addEventListener("DOMContentLoaded", () => {
    getImages()
})

function getImages(){
    fetch(endPoint)
        .then(response => response.json())
        .then(images => {
            console.log(images);
    })
}