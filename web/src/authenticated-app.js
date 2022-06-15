/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from '@emotion/core';

import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from 'react-error-boundary';
import {
  Header,
  FullPageErrorFallback,
  ContentWrapper,
  Footer,
} from './components/lib';

import { useAuth } from './context/auth-context';
import { ForecastScreen } from './screens/forecast';

function AuthenticatedApp() {
  const { user, logout } = useAuth();
  return (
    <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
      <ContentWrapper>
        <Header user={user} logout={logout} />
        <AppRoutes />
        <Footer>

          <h3>software engineering development studies / software engineering student: Leandro costa</h3>

        </Footer>
      </ContentWrapper>
    </ErrorBoundary>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<ForecastScreen />} />
    </Routes>
  );
}

export default AuthenticatedApp;
