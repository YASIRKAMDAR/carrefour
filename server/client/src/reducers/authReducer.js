import { LOGIN_USER } from '../actions/types';

export default function(state = null, action) {
    console.log(action.type);
    switch(action.type) {
        case LOGIN_USER:
            console.log(action.payload);
            return action.payload || false;
        break;
        default:
            return state;
    }
}