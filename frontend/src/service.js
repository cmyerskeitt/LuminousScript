class ApiService {

    constructor(){
        this.baseUrl = `http://localhost:3000/api/v1`
    }

    locateOrCreateUser(e){
        return fetch(`${this.baseUrl}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user: {
                    name: e.target.children[1].value
                }
            })
        })
        .then(resp => {
            let json = resp.json()
            // console.log(json)
            return json
        })
    }

    postImage(e, user_id){
         console.log(e)
     return fetch(`${this.baseUrl}/images`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            image: {
                    image_url: e.target.children[2].value,
                    caption: e.target.children[6].value,
                    user_id: user_id
                    }
                })
        })
         .then(resp => resp.json())
    }

    deleteImage(e){
        fetch(`${this.baseUrl}/images/${e.target.parentNode.dataset.id}`,{
            method: "DELETE"
        })
    }

}    