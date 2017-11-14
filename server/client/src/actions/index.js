import axios from 'axios';

import { LOGIN_USER } from './types'

export const loginUser = (data) => {
    return function(dispatch) {
        axios
            .post('/api/login', data)
            .then(res => dispatch({ type: LOGIN_USER, payload: res.data}));
    }
};