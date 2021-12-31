import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import {Store} from './store';
import {Dashboard} from '~/modules/Dashboard/presentation/games/screens/Dasboard';

export default function App() {
  return (
    <Provider store={Store}>
      <StatusBar barStyle="light-content" backgroundColor="#222125" />
      <Dashboard />
    </Provider>
  );
}
