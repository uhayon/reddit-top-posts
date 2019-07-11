import axios from 'axios';

export const fetchPosts = async () => {
  const { data: response } = await axios.get('https://www.reddit.com/top.json?limit=50');
  
  return response.data.children.filter((el, idx) => idx < 50);
}