import styled from '@emotion/styled';
import Link from 'next/link';

function PostList({ postList }: { postList: Post[] }) {
  return (
    <PostListStyledComponent>
      {postList.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <dl>
            <dd>{post.id}</dd>
            <dt>{post.title}</dt>
          </dl>
        </Link>
      ))}
    </PostListStyledComponent>
  );
}

const PostListStyledComponent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 16px;

  a {
    dl {
      display: flex;
      flex-direction: row;
      align-items: center;
      column-gap: 16px;
    }
  }
`;

export default PostList;
