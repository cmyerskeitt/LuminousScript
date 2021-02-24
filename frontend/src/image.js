
class Image {
    static allImages = []

    constructor(image){
        this.id = image.id 
        this.image_url = image.image_url
        this.caption = image.caption
        this.user_id = image.user_id
        Image.allImages.push(this)
    }

    static newImageForm(){
        console.log(this)
        let body = document.querySelector('#user-container')
        let form = 
            `<form id="add-image-form" style="">
                <h3>Add a Lumunious Image!</h3>
                <label>Image Url:</label>
                <input id='input-url' type="text" name="image" value=""
                placeholder="Enter your image URL here." class="input-text">
                <br><br>
                <label>Caption:</label>
                <input id='input-caption' type="text" name="caption" value=""
                placeholder="Enter your caption here." class="input-text">
                <br><br>
                <input id= "create-button" type="submit" name="submit" value="Create Luminous Image"
                class="submit">
                <br><br>
            </form>`
        body.insertAdjacentHTML('beforeend', form)
       Image.makeImage()
    }

    static makeImage(){
        let newForm = document.getElementById('add-image-form')
        newForm.addEventListener('submit', function(e){
            e.preventDefault
            
        })
    }


    createImageCard(){
        let card = document.createElement('p')
            console.log(this)
            card.innerHTML=
            `<div data-id=${this.id}>
            <img src=${this.image_url} height="300" width="350">
            <h3>${this.caption}</h3>
            <p>${this.user_id}</p>
            <button data-id=${this.id}>delete</button>
            </div>`
        console.log(card.innerHTML)     
        
    }
}
















// const endPoint = "http://localhost:3000/api/v1/images"

// document.addEventListener("DOMContentLoaded", () => {
//     getImages()
    
//     const createImageForm = document.querySelector("#add-image-form")
//     createImageForm.addEventListener("submit", (e) => (createFormHandler(e)))
   

// })

// function getImages(){
//     fetch(endPoint)
//         .then(response => response.json())
//         .then(images => {
//             images.data.forEach(image => {
//                 const imageMarkup = `
//                     <div data-id=${image.id}>
//                         <img src=${image.attributes.image_url} height="300" width="350">
//                         <h3>${image.attributes.caption}</h3>
//                         <p>${image.attributes.user.name}</p>
//                         <button data-id=${image.id}>delete</button>
//                     </div>
//                     <br><br>`

//                     document.querySelector('#image-container').innerHTML += imageMarkup
//             })
//         })
// }

// function createFormHandler(e) {
//     e.preventDefault()
//     const imageInput = document.querySelector('#input-url').value
//     const captionInput = document.querySelector('#input-caption').value
//     postFetch(imageInput, captionInput)
// }
// // How do I get access to the user_id?

// function postFetch(image_url, caption){
//     fetch(endPoint, {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({
//             image_url: image_url,
//             caption: caption,
//     })
// })
//     .then(response => response.json())
//     .then(image => {
//         console.log(image)
//     })
  
// }


