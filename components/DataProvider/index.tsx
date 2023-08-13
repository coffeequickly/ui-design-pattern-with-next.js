import React from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';

interface DataProviderProps<T> {
  query: {
    queryFn: () => Promise<T>;
    queryKey: (string | number)[];
  };
  render: (data: T) => React.ReactElement;
}

function DataProvider<T>({ query, render }: DataProviderProps<T>) {
  const { data, isLoading, error } = useQuery<T, Error>({ ...query });

  // TODO: Skeleton 추가 필요
  if (isLoading) {
    return <LoadingStyledComponent>Loading...</LoadingStyledComponent>;
  }

  if (error) {
    throw error;
  }

  return render(data!);
}

export default DataProvider;

const LoadingStyledComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
