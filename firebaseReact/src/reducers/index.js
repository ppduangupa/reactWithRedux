import { combineReducers } from 'redux';
import { FETCH_USERS, CREATE_USER } from '../actions';

const rootReducer = combineReducers({
  users: (state = {}, action) => {
      switch (action.type) {
          case FETCH_USERS:
              return action.payload;
          case CREATE_USER:
              return action.payload;
          default:
              return state;
      }
  }
});

export default rootReducer;
