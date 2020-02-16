import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthNavigator} from './navigators/AuthNavigator';
import {AppRoute} from '../navigation/app-routes';

const Stack = createStackNavigator();

export const AppNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator} />
  </Stack.Navigator>
);
