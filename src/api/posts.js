const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    title: 'redux 좋아요',
    body: 'mobx 짱!!!!!!!!!!!!!!!!!!!!!!!'
  },
  {
    id: 2,
    title: 'redux thunk는 처음이에요',
    body: '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
  },
  {
    id: 3,
    title: 'redux-saga는 또 뭐야',
    body: '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1'
  }
]

export const getPosts = async () => {
  await sleep(500);
  return posts;
}

export const getPostById = async id => {
  await sleep(500);
  return posts.find(post => post.id === id);
}