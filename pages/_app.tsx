import type { AppProps } from 'next/app';
import { QueryClient } from '@tanstack/query-core';
import { useRef } from 'react';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Head from 'next/head';
import 'reset-css';
import styled from '@emotion/styled';

export default function App({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1,
          cacheTime: 1000 * 60 * 60, // 1시간. cacheTime이 지나면 새로 fetch
          staleTime: 1000 * 60 * 60 * 24, // 24시간 이후에 다시 fetch
          useErrorBoundary: true,
        },
      },
    });
  }

  return (
    <>
      <Head>
        <title>UI 디자인 패턴 테스트</title>
      </Head>
      <QueryClientProvider client={queryClientRef.current}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Hydrate state={pageProps.dehydratedState}>
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
