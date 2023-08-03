import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import ProductDetail from '../screen/ProductDetail';
import CartScreen from '../screen/CartScreen.js';

const Stack = createStackNavigator();

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={HomeScreen}
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default AppNavigator;
