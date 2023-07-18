import React from 'react';
import { useQuery } from '@tanstack/react-query';

type RequiredType = unknown;

interface DataProviderProps<T extends RequiredType> {
  queryFn: () => Promise<T>;
  queryKey: (string | number)[];
  render: (data: T) => React.ReactElement;
}

function DataProvider<T>({ queryFn, queryKey, render }: DataProviderProps<T>) {
  const { data, isLoading, error } = useQuery<T, Error>(queryKey, queryFn);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    throw error;
  }

  return render(data!);
}

export default DataProvider;
