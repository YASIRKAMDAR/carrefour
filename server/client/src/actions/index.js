import axios from 'axios';

import { LOGIN_USER } from './types'
import { GET_RESULTS } from './types'

export const loginUser = (data) => {
    return function(dispatch) {
        axios
            .post('/api/login', data)
            .then(res => dispatch({ type: LOGIN_USER, payload: res.data}));
    }
};

export const getResults = () => {
    return function(dispatch) {
        axios
            .get('/api/results')
            .then(res => dispatch({ type: GET_RESULTS, payload: res.data}));
    }
};