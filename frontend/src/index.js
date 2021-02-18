const endPoint = "http://localhost:3000/api/v1/images"

document.addEventListener("DOMContentLoaded", () => {
    getImages()
    
    const createImageForm = document.querySelector("#add-image-form")
    createImageForm.addEventListener("submit", (e) => (createFormHandler(e)))
   

})

function getImages(){
    fetch(endPoint)
        .then(response => response.json())
        .then(images => {
            images.data.forEach(image => {
                const imageMarkup = `
                    <div data-id=${image.id}>
                        <img src=${image.attributes.image_url} height="300" width="350">
                        <h3>${image.attributes.caption}</h3>
                        <p>${image.attributes.user.name}</p>
                        <button data-id=${image.id}>delete</button>
                    </div>
                    <br><br>`

                    document.querySelector('#image-container').innerHTML += imageMarkup
            })
        })
}

function createFormHandler(e) {
    e.preventDefault()
    debugger
    const imageInput = document.querySelector('#input-url').value
    const captionInput = document.querySelector('#input-caption').value
    postFetch(imageInput, captionInput)
}
