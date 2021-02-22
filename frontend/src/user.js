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
                let newUser = new User(user)
                newUser.showUser()
            })
        })
    }

    showUser(){
        let body = document.querySelector('#user-container')
        body.innerHTML = ''
    }
}