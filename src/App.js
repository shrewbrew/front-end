import React, { useRef, useEffect, createContext } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views
import Home from './views/Home';
import Auth from './views/Auth';
import PaymentInfo from './components/sections/FormInfo/PaymentInfo';
import PersonalInfo from './components/sections/FormInfo/PersonalInfo';
import ResidenceInfo from './components/sections/FormInfo/ResidenceInfo';
import Authorization from './components/sections/FormInfo/Authorization';
import SpecifiedInjuries from './components/sections/FormInfo/SpecifiedInjuries';
import InjuryDetails from './components/sections/FormInfo/InjuryDetails';
import DigestiveHarm from './components/sections/FormInfo/DigestiveHarm';
import SwornDeclaration from './components/sections/FormInfo/SwornDeclaration';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const RadioContext = createContext();

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded');
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <RadioContext.Provider value={false}>
          <Switch>
            <AppRoute exact path='/' component={Home} layout={LayoutDefault} />
            <AppRoute
              exact
              path='/login'
              component={Auth}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path='/claim/personalinfo'
              component={PersonalInfo}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path='/claim/paymentinfo'
              component={PaymentInfo}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path='/claim/residenceinfo'
              component={ResidenceInfo}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path='/claim/authorization'
              component={Authorization}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path='/claim/specinjury'
              component={SpecifiedInjuries}
              layout={LayoutDefault}
              
            />
            <AppRoute
              exact
              path='/claim/specinjury-2'
              component={InjuryDetails}
              layout={LayoutDefault}
              />
            <AppRoute
              exact
              path='/claim/digestiveharm'
              component={DigestiveHarm}
              />
            <AppRoute
              exact
              path='/claim/Sworn-declaration'
              component={SwornDeclaration}
              layout={LayoutDefault}
            />
          </Switch>
        </RadioContext.Provider>
      )}
    />
  );
};

export default App;
