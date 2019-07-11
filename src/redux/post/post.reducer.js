import PostActionTypes from './post.types';

const INITIAL_STATE = {
  searching: false,
  errorSearching: false,
  posts: []
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS:
      return {
        ...state,
        searching: true,
        errorSearching: false,
        posts: []
      };
    case PostActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        searching: false,
        posts: action.payload
      };
    case PostActionTypes.FETCH_POSTS_ERROR:
      return {
        ...state,
        errorSearching: true
      };
    default:
      return state;
  }
};

export default postReducer;