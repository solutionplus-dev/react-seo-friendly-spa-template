import Layout from './Layout';
import { routes } from './config/routes.config';
import { MetaInfo, NotFound404 } from './components';
import { usePageTracker, useScrollToTop } from './hooks';
import { useLocation,  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import type { FunctionComponent } from 'react';
import ComponentRenderer from 'ComponentRenderer';
import ThankYouPage from 'ThankYouPage';
import MainLandingPage from 'MainLandingPage';
import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
const App: FunctionComponent = () => {
  useScrollToTop();
  usePageTracker();

  const location = useLocation();
  const cssKey = location.pathname?.split('/')[1] || '/';

  return (
    <Layout>
      <MetaInfo />
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={cssKey}
          timeout={250}
          classNames="fade"
        >
          <Routes location={location}>
            {routes.map(({ path, Component }) => (
              <Route
                key={path}
                path={path}
                element={<Component />}
              />
            ))}
            <Route
              path="*"
              element={<NotFound404 />}
            />
           
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </Layout>
  );
};

export default App;
