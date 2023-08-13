import { GetServerSidePropsContext } from 'next';
import { dehydrate, QueryClient } from '@tanstack/query-core';
import { DataErrorBoundary } from '@/components/DataErrorBoundary';
import DataProvider from '@/components/DataProvider';
import PostDetail from '@/components/PostDetail';
import { postCommentsQuery, postQuery } from '@/queries/postQuery';
import PostComments from '@/components/PostDetail/PostComments';
import { useQuery } from '@tanstack/react-query';
import Head from 'next/head';

function PostDetailPage({ post_id }: { post_id: string }) {
  const { data: post } = useQuery<Post>(postQuery(post_id).queryKey, postQuery(post_id).queryFn);

  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <DataErrorBoundary>
        <DataProvider<Post> query={postQuery(post_id)} render={(post: Post) => <PostDetail post={post} />} />
        <DataProvider
          query={postCommentsQuery(post_id)}
          render={(comments: PostComment[]) => <PostComments comments={comments} />}
        />
      </DataErrorBoundary>
    </>
  );
}

export default PostDetailPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // SEO 대응
  const { post_id } = context.params as { post_id: string };
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: postQuery(post_id).queryKey,
    queryFn: postQuery(post_id).queryFn,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      post_id,
    },
  };
}
