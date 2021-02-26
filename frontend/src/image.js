
class Image {
    static allImages = []

    constructor(image){
        this.id = image.id 
        this.image_url = image.image_url
        this.caption = image.caption
        this.user_id = image.user_id
        Image.allImages.push(this)
    }

    static newImageForm(user_id){
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
        Image.makeImage(user_id)
    }

    static makeImage(user_id){
        let newForm = document.getElementById('add-image-form')
        newForm.addEventListener('submit', function(e){
            e.preventDefault()
            apiService.postImage(e, user_id)
            .then (json => {
                console.log(json)
                newForm.reset()
                let newImage = new Image(json)
                newImage.createImageCard()
            })
            
        })
    }


    createImageCard(){
        let card = document.createElement('p')
            card.setAttribute('data-id', this.id)
            card.innerHTML=
           ` <img src=${this.image_url} height="300" width="350">
            <h3>${this.caption}</h3>
            </div>`
            let deleteForm = `<button type="button" id="${this.id}" class="delete-image"> Delete</button>`
            card.insertAdjacentHTML('beforeend', deleteForm)
            this.appendImages(card)

       
        
    }

    appendImages(card){
        let images = document.getElementsByClassName('image-form-container')
        images[0].append(card)
        let button = document.getElementById(`${this.id}`)
        this.delete(button)
    }

    delete(button){
        button.addEventListener('click', function(e){
            e.preventDefault()
            apiService.deleteProblem(e) 
        })
    }
}



