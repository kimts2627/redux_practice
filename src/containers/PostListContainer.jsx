import React, { useEffect } from 'react';
import PostList from '../components/PostList';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../modules/posts';

const PostListContainer = () => {
  const { data, loading, error } = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if(loading) return <div className='postlist'>로딩중...</div>;
  if(error) return <div className='postlist'>에러 발생!</div>;
  if(!data) return null;
  return <PostList posts={data} />;
}

export default PostListContainer;
