import axios from 'axios';
import _ from 'lodash';

export const fetchPosts = async () => {
  const { data: response } = await axios.get('https://www.reddit.com/top.json?limit=50');
  
  return response.data.children.map(post => {
    const neededProperties = _.pick(post.data, ['created', 'author_fullname', 'thumbnail', 'num_comments', 'title', 'id']);
    return {
      unread: true,
      ...neededProperties
    }
  });
}