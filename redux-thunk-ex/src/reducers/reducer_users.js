import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case 'FETCH_PROFILES':
            return action.payload;
        default:
            return state;
    }
}
