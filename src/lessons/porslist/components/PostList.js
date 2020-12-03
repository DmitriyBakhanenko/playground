import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchUsers, removePost } from '../actions';

const PostList = ({ removePost, fetchPosts, fetchUsers, posts, users }) => {
  const [postToDelete, setPostToDelete] = useState('');

  const fetchPostsRef = useRef(() => {});
  const fetchUsersRef = useRef(() => {});
  fetchPostsRef.current = fetchPosts;
  fetchUsersRef.current = fetchUsers;

  useEffect(() => {
    fetchPostsRef.current();
    fetchUsersRef.current();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    removePost(postToDelete);
    setPostToDelete('');
  };

  // if (
  //   typeof posts[0]?.title === 'undefined' &&
  //   typeof users[0]?.name === 'undefined'
  // ) {
  //   return (
  //     <div className='ui segment'>
  //       <div className='ui active dimmer'>
  //         <div className='ui medium text inverted loader'>Loading</div>
  //       </div>
  //       <p></p>
  //       <p></p>
  //     </div>
  //   );
  // }
  const renderList = posts.map((post, idx) => (
    <div className='item' key={idx}>
      <i className='large middle aligned icon user' />
      <div className='content'>
        <div className='description'>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>
            {typeof users[0]?.name !== 'undefined'
              ? users[Math.trunc(idx / 10)]?.name
              : null}
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className='ui header'>
        <form onSubmit={handleSubmit}>
          <label>Type an article title to delete the post</label>
          <input
            onChange={e => setPostToDelete(e.target.value)}
            type='text'
            value={postToDelete}
          />
          <button type='submit'>Delete</button>
        </form>
      </div>
      <div className='ui relaxed divided list'>{renderList}</div>
    </div>
  );
};

const mapStateToProps = ({ posts, users }) => {
  return { posts: posts, users: users };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchUsers: () => dispatch(fetchUsers()),
  removePost: title => dispatch(removePost(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
