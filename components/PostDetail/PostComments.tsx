import styled from '@emotion/styled';

function PostComments({ comments }: { comments: PostComment[] }) {
  return (
    <PostCommentsStyledComponent>
      {comments.map((comment: PostComment) => (
        <dl key={comment.id}>
          <dt>{comment.email}</dt>
          <dd>{comment.body}</dd>
        </dl>
      ))}
    </PostCommentsStyledComponent>
  );
}

const PostCommentsStyledComponent = styled.div`
  background-color: #eee;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 16px;
  box-sizing: border-box;
  margin-top: 48px;

  dl {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    padding: 16px;
    box-sizing: border-box;
    background-color: #fff;
  }
`;

export default PostComments;
