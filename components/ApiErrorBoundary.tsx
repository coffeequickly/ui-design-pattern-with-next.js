// 에러 바운더리
import { ErrorBoundary } from 'react-error-boundary';
import React, { Suspense } from 'react';

export function ApiErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorMessage}
      onError={(error, componentStack) => {
        console.log('내부');
        // TODO: 컨텍스트 더해서 센트리 등 로그 수집 도구로 전송 처리.
        // Sentry.withScope(scope => {
        //   scope.setExtras({ componentStack });
        //   Sentry.captureException(error);
        // });
      }}
    >
      {children}
      <Suspense fallback={<h1>마, 기다려아</h1>}></Suspense>
    </ErrorBoundary>
  );
}

function ErrorMessage({ error }: { error: Error }) {
  console.error(error.message);
  return <div>Something went wrong...{`message : [${error.message}] ${JSON.stringify(error)}`}</div>;
}
