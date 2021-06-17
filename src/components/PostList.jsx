import React from 'react';

const PostList = ({ posts }) => {
  return (
    <ul className='postlist'>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}

export default PostList;
