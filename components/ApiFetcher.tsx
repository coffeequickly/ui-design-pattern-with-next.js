import React, { ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export function ApiFetcher<T>({
  queryKey,
  queryFn,
  children,
}: {
  queryKey: any;
  queryFn: () => Promise<AxiosResponse<T>>;
  children: React.ReactNode;
}) {
  const { isLoading, data, error } = useQuery(queryKey, queryFn);

  // TODO: 스켈레톤 추가 필요
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    throw error;
  }

  return (
    <>
      {React.Children.map(children, (child: ReactNode) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { data } as object);
        }
        return child;
      })}
    </>
  );
}
