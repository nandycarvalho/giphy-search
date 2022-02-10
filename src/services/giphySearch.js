import axios from 'axios';

const API = 'https://api.giphy.com/v1/gifs/search';

// quando chamar a função, ele retornar uma promise 
function giphySearch(value){
    return axios.get(API, {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            rating: 'g',
            lang: 'en',
            q: value,
            limit: 20
        }
    })
}

export default giphySearch;