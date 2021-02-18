class Image{
    static allImages = []

    constructor(image){
        this.id = image.id
        this.image_url = image.image_url
        this.caption = image.caption
        this.user_id = image.user_id
        Image.allImages.push(this)
    }
}