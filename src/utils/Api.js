const onResponse = (response) => {
    if (response.ok) {
        return response.json()
    }

    return Promise.reject({
                            message: 'Сервер не доступен',
                            error: response
                        })
}

class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    getAllPosts() {
        return fetch(`${this._url}/posts`, {headers: this._headers})
            .then(onResponse);
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {headers: this._headers})
            .then(onResponse);
    }

    // addCat(bodyData) {
    //     return fetch(`${this._url}/add`, {
    //             method: "POST",
    //             headers: this._headers,
    //             body: JSON.stringify(bodyData)
    //         })
    //         .then(onResponse)
    // }

    // updateCat(id, bodyData) {
    //     return fetch(`${this._url}/update/${id}`, {
    //             method: "PUT",
    //             headers: this._headers,
    //             body: JSON.stringify(bodyData)
    //         })
    //         .then(onResponse)
    // }

    // deleteCat(id) {
    //     return fetch(`${this._url}/delete/${id}`, {
    //             method: "DELETE",
    //             headers: this._headers,
    //         })
    //         .then(onResponse)
    // }

}

const api = new Api({
    url: 'https://api.react-learning.ru',
    headers: {
        //  "Content-type": "application/json",
        //  "Accept": "application/json",
        authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYjMiLCJpYXQiOjE2NDcwMTM4ODYsImV4cCI6MTY3ODU0OTg4Nn0.v2qKJI2jlIG92Uqgds6RGoUW_ycXOiIK_pABL_yGoZw'
        }
})

export default api;