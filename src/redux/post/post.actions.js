import PostActionTypes from './post.types';
import { fetchPosts } from './post.utils';


export const getPosts = () => async dispatch => {
  dispatch({ type: PostActionTypes.FETCH_POSTS });
  try {
    const posts = await fetchPosts();
    dispatch({ type: PostActionTypes.FETCH_POSTS_SUCCESS, payload: posts });
  } catch (error) {
    dispatch({ type: PostActionTypes.FETCH_POSTS_ERROR })
  }
};

export const selectPost = id => ({
  type: PostActionTypes.SELECT_POST,
  payload: id
});

export const dismissPost = id => ({
  type: PostActionTypes.DISMISS_POST,
  payload: id
});

export const dismissAll = () => ({
  type: PostActionTypes.DISMISS_ALL
})