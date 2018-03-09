import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=hellopp1234';

export function fetchUsers() {
    const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({ type: 'FETCH_PROFILES', payload: data })
        });
    };
}
