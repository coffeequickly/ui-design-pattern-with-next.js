import Head from 'next/head';
import { DataErrorBoundary } from '@/components/DataErrorBoundary';
import DataProvider from '@/components/DataProvider';
import { postListQuery } from '@/queries/postQuery';
import PostList from '@/components/PostList';

function PostListPage() {
  return (
    <>
      <Head>
        <title>Post 목록</title>
      </Head>
      <DataErrorBoundary>
        <DataProvider<Post[]> query={postListQuery()} render={(postList: Post[]) => <PostList postList={postList} />} />
      </DataErrorBoundary>
    </>
  );
}

export default PostListPage;
