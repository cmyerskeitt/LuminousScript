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
                let newUser = new User(user.data)
                newUser.showUser()
            })
        })
    }

    showUser(){
        let body = document.querySelector('#user-container')
        body.innerHTML = ''
        let userWelcome = document.createElement('p')
        userWelcome.innerHTML = `<h1>Welcome, ${this.name}!</h1>`
        body.append(userWelcome)
        this.renderImages()
        // console.log(this)
        Image.newImageForm(this.id)
        Image.filterImages()
        this.logout()
    }

    renderImages(){
        if (this.images){
            this.images.forEach(function(image){
                let newImage = new Image(image)
                newImage.createImageCard()
            })
        }
    }

    logout(){
    let logoutButton = document.createElement("button")
      logoutButton.innerHTML = `<id="${this.id}" class="logout"> Logout</button>`
      let page = document.getElementsByClassName('logout-form-container')[0]
      page.appendChild(logoutButton)
      logoutButton.addEventListener('click', function(e){
          console.log(e)
          e.preventDefault()
          location.reload()
      } )
    
    }


}