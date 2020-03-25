import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../../../src/routes/auth/SignInScreen';
import SignUpScreen from '../../../src/routes/auth/SignUpScreen';
import {AppRoute} from '../app-routes';

const Stack = createStackNavigator();

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen name={AppRoute.SIGN_IN} component={SignInScreen} />
    <Stack.Screen name={AppRoute.SIGN_UP} component={SignUpScreen} />
  </Stack.Navigator>
);
