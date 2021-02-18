const endPoint = "http://localhost:3000/api/v1/images"

document.addEventListener("DOMContentLoaded", () => {
    getImages()
})

function getImages(){
    fetch(endPoint)
        .then(response => response.json())
        .then(images => {
            images.data.forEach(image => {
                const imageMarkup = `
                    <div data-id=${image.id}>
                        <img src=${image.attributes.image_url} height="200" width="250">
                        <h3>${image.attributes.caption}</h3>
                        <p>${image.attributes.user.name}</p>
                        <button data-id=${image.id}>delete</button>
                    </div>`
        
            })
        })
}