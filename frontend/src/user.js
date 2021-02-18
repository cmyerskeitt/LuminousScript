class user {
    static allusers =[]

    constructor(user){
        this.id = user.id
        this.name = user.name
        this.images = user.images
        user.allusers.push(this)
    }
}