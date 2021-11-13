
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
        // console.log(this)
        let body = document.querySelector('#user-container')
        let form = 
            `<form id="add-image-form" style="color: red; background-color: white; border: solid; border-color: blue; font-family: Segoe UI,Arial,sans-serif; font-size:20px; margin:10px 0">
                <h3>Add A Luminous Image!</h3>
                <label>Image Url:</label>
                <input id='input-url' type="text" name="image" value="" placeholder="Enter image URL here." class="input-text">
                <br><br>
                <label>Caption:</label>
                <input id='input-caption' type="text" name="caption" value="" placeholder="Enter caption here." class="input-text">
                <br><br>
                <input id= "create-button" type="submit" name="submit" value="Create A Luminous Image" style="color: white; background-color: red" class="submit">
                <br><br>
            </form>`
        body.insertAdjacentHTML('afterend', form)
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
           `<img src=${this.image_url} height="500" width="550">
            <h3 style="color: red; background-color: blue">${this.caption}</h3>`
            let deleteForm = `<button type="button" id="${this.id}" class="delete-image" style="color: white; font-size:20px; background-color: red" > Delete</button>`
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
            apiService.deleteImage(e) 
                e.target.parentElement.remove()
        })
    }

    static filterImages(){
        let body = document.getElementsByClassName('image-form-container')[0]
        let form= 
        `<form id="filter-form" style="color: red; background-color: white; font-family: Segoe UI,Arial,sans-serif; font-size:20px">
          <label> Enter a keyword to filter your photos: </label>
          <br>
          <input id='input-filter' type='text' value="" class='input-filter'>
          <input id='filter-button' type='submit' name='Filter' value='On/Off' class="filter" style="color: white; background-color: red">
        </form>`
        body.insertAdjacentHTML('afterbegin', form)
        let filterForm = document.getElementById('filter-form')
        filterForm.addEventListener('submit', function(e){
            e.preventDefault()
            console.log(e)
            console.log(filterForm)
            let substring = e.target.children[2].value
            console.log(substring)
            let results = Image.allImages.filter(image => image.caption.toLowerCase().includes(substring.toLowerCase()))
            console.log(results)
            let body = document.getElementsByClassName('image-form-container')[0]
            while (body.childNodes.length > 1){
                body.removeChild(body.lastChild)
            }
            filterForm.reset()
            results.forEach(image => image.createImageCard())
        })
    }

}



