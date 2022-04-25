const onResponse = (response) => {
    if (response.ok) {
        return response.json()
    }
    return Promise.reject( response )
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

    getPost(id) {
        return fetch(`${this._url}/posts/${id}`, {headers: this._headers})
            .then(onResponse);
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {headers: this._headers})
            .then(onResponse);
    }

    createPost(data) {
        return fetch(`${this._url}/posts`, {
          method: "POST",
          headers: this._headers,
          body: JSON.stringify(data),
        }).then(onResponse);
    }

    updatePostInfo({ data, id }) {
        return fetch(`${this._url}/posts/${id}`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify(data),
        }).then(onResponse);
      }

    changePostLike(isLike, id) {
        return fetch(`${this._url}/posts/likes/${id}`, {
                method: isLike ? "PUT" : "DELETE",
                headers: this._headers,
            })
            .then(onResponse)
    }

    deletePost(id) {
        return fetch(`${this._url}/posts/${id}`, {
                method: "DELETE",
                headers: this._headers,
            })
            .then(onResponse)
    }
}

const api = new Api({
    url: 'https://api.react-learning.ru',
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYjMiLCJpYXQiOjE2NDcwMTM4ODYsImV4cCI6MTY3ODU0OTg4Nn0.v2qKJI2jlIG92Uqgds6RGoUW_ycXOiIK_pABL_yGoZw'
        }
})


 
export default api;