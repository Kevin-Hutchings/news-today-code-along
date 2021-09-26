import axios from 'axios';

const initalState = {
    loading: false,
    articles: [],
}

const REQUEST_ARTICLES = 'REQUEST_ARTICLES';

export const requestArticles = () => {
    let articles = axios.get('/api/reddit')
    .then(res => res.data)
    .catch(err => console.log(err))
    return {
        type: REQUEST_ARTICLES,
        payload: articles,
    }
}

export default function (state = initalState, action) {
    switch (action.type) {
        case `${REQUEST_ARTICLES}_PENDING`:
            return {
                ...state,
                loading: true
            }
        case `${REQUEST_ARTICLES}_FULFILLED`:
            return {
                ...state,
                loading: false,
                articles: action.payload,
            }
        default: return state;
    }
}