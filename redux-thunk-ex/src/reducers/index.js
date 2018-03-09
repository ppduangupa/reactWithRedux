import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    users: (state = {}, action) => {
        switch (action.type) {
            case 'FETCH_PROFILES':
                return action.payload;
            default:
                return state;
        }
    }
});

export default rootReducer;
