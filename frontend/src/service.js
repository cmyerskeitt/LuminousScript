class ApiService {

    constructor(){
        this.baseUrl = "http://localhost:3000/api/v1"
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
        .then(resp =>{
            let json = resp.json()
            console.log(json)
            return json
        })
    }

    postImage(e, user_id){
        
    }

    


}