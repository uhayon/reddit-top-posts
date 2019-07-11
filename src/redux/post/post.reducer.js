import PostActionTypes from './post.types';

const INITIAL_STATE = {
  searching: false,
  errorSearching: false,
  posts: [],
  selectedPost: null
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
        errorSearching: true,
        searching: false
      };
    case PostActionTypes.SELECT_POST:
      const posts = state.posts.map(post => {
        post.unread = post.unread && post.id !== action.payload;
        return post;
      });

      return {
        ...state,
        posts,
        selectedPost: posts.find(post => post.id === action.payload)
      };
    case PostActionTypes.DISMISS_ALL:
      return {
        ...state,
        posts: []
      };
    case PostActionTypes.DISMISS_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      }
    default:
      return state;
  }
};

export default postReducer;