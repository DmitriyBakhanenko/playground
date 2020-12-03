export default (posts = [], action) => {
  if (action.type === 'FETCH_POSTS') return action.payload;
  if (action.type === 'REMOVE_POST') {
    return posts.filter(post => post.title !== action.payload);
  }
  return posts;
};
