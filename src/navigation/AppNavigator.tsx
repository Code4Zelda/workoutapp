import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ParamListBase} from '@react-navigation/core';
import {AuthNavigator} from './navigators/AuthNavigator';
import {AppRoute} from '../navigation/app-routes';
import HomeScreen from '../routes/HomeScreen';
// import ProfileScreen from '../routes/ProfileScreen';

type StackNavigationProps = React.ComponentProps<typeof Stack.Navigator>;

interface AppNavigatorParams extends ParamListBase {
  [AppRoute.AUTH]: undefined;
  [AppRoute.HOME]: undefined;
}
const Stack = createStackNavigator<AppNavigatorParams>();

const AppNavigator = (
  config: Partial<StackNavigationProps>,
): React.ReactElement => (
  <>
    <NavigationContainer>
      <Stack.Navigator {...config} headerMode="none">
        <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator} />
        <Stack.Screen name={AppRoute.HOME} component={HomeScreen} />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  </>
);

export default AppNavigator;
