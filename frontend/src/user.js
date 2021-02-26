class User {
    static allUsers =[]

    constructor(user){
        this.id = user.id
        this.name = user.attributes.name
        this.images = user.attributes.images
        User.allUsers.push(this)
    }

    static fakeLogin(){
        const newUserForm = document.querySelector('#new-user-form')
        newUserForm.addEventListener('submit', function(e){
            e.preventDefault()
            apiService.locateOrCreateUser(e)
            .then(user => {
                console.log(user)
                let newUser = new User(user.data)
                console.log(newUser)
                newUser.showUser()
            })
        })
    }

    showUser(){
        let body = document.querySelector('#user-container')
        body.innerHTML = ''
        let userWelcome = document.createElement('p')
        userWelcome.innerHTML = `<h1>Welcome back, ${this.name}!</h1>`
        body.append(userWelcome)
        this.renderImages()
        console.log(this)
        Image.newImageForm(this.id)
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