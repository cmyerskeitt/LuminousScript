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
        let body = document.querySelector('#user-container')
        body.innerHTML = ''
        let UserWelcome = document.createElement('p')
        UserWelcome.innerHTML = `<h1>Welcome back, ${this.name}!</h1>`
        body.append(UserWelcome)
    }
}