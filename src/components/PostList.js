import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchUsers } from '../actions';

const PostList = ({ fetchPosts, fetchUsers, posts, users }) => {
  const fetchPostsRef = useRef(() => {});
  const fetchUsersRef = useRef(() => {});
  fetchPostsRef.current = fetchPosts;
  fetchUsersRef.current = fetchUsers;

  useEffect(() => {
    fetchPostsRef.current();
    fetchUsersRef.current();
  }, []);

  const renderList = posts.map((post, idx) => (
    <div className='item' key={post.id}>
      <i className='large middle aligned icon user' />
      <div className='content'>
        <div className='description'>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>{users[Math.trunc(idx / 10)].name}</p>
        </div>
      </div>
    </div>
  ));

  return <div className='ui relaxed divided list'>{renderList}</div>;
};

const mapStateToProps = ({ posts, users }) => {
  return { posts: posts, users: users };
};

export default connect(mapStateToProps, { fetchPosts, fetchUsers })(PostList);
