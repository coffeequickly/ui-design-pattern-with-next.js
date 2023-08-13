interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostComment {
  id: number;
  name: string;
  email: string;
  body: string;
  postId: number;
}
