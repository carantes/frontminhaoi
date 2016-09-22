import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import configureStore from 'store/configureStore';

import App from 'containers/App';
import Intro from 'containers/Intro';
import FirstStep from 'containers/FirstStep';
import SecondStep from 'containers/SecondStep';
import Renato from 'containers/Renato';


export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="passo-2" component={SecondStep} />
        <Route path="renato" component={Renato} />
        <IndexRoute component={FirstStep} />
      </Route>
    </Router>
  );
};
