import styled from '@emotion/styled';

function PostDetail({ post }: { post: Post }) {
  return (
    <PostDetailStyledComponent>
      <header>
        <h1>{post.title}</h1>
      </header>
      <main>
        <p>{post.body}</p>
      </main>
    </PostDetailStyledComponent>
  );
}

const PostDetailStyledComponent = styled.div`
  padding: 16px;
  box-sizing: border-box;

  header {
    width: 100%;
    margin-bottom: 48px;

    h1 {
      font-size: 40px;
      font-weight: 700;
    }
  }
`;

export default PostDetail;
