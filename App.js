/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import HomeScreen from './src/screen/HomeScreen';
import { store } from './src/store';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigator/AppNavigator';



const App = () => {
  
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
};



export default App;
