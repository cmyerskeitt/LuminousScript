class User {
    static allUsers =[]

    constructor(user){
        this.id = user.id
        this.name = user.name
        this.images = user.images
        User.allUsers.push(this)
    }

    static fakeLogin(){
        const newUserForm = document.querySelector('#new-user-form')
        newUserForm.addEventListener('submit', function(e){
            e.preventDefault()
            apiService.locateOrCreateUser(e)
            .then(user => {
                console.log(user)
                let newUser = new User(user.data.attributes)
                newUser.showUser()
            })
        })
    }

    showUser(){
        console.log(this)
        let body = document.querySelector('#user-container')
        body.innerHTML = ''
        let UserWelcome = document.createElement('p')
        UserWelcome.setAttribute('user_id', this.images[0].id)
        UserWelcome.innerHTML = `<h1>Welcome back, ${this.name}!</h1>`
        body.append(UserWelcome)
        console.log(body)
        this.renderImages()
        Image.newImageForm(this.images[0].user_id)
    }

    renderImages(){
        if (this.images){

            this.images.forEach(function(image){
                console.log(image)
                let newImage = new Image(image)
                console.log(newImage)
                newImage.createImageCard()
            })
        }
    }


}