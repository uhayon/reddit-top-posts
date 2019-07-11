import { combineReducers } from 'redux';

import postReducer from './post/post.reducer';

export default combineReducers({
  post: postReducer
});