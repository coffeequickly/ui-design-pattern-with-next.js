import { $axios } from '@/utilities/axios';

const postListQuery = () => {
  return {
    queryKey: ['postList'],
    queryFn: () => $axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => response.data),
  };
};

const postQuery = (post_id: string) => {
  return {
    queryKey: ['post', post_id],
    queryFn: () =>
      $axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}`).then((response) => response.data),
  };
};

const postCommentsQuery = (post_id: string) => {
  return {
    queryKey: ['postComments', post_id],
    queryFn: () =>
      $axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`).then((response) => response.data),
  };
};

export { postListQuery, postQuery, postCommentsQuery };
