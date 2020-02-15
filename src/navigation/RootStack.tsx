import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../routes/HomeScreen';
import ProfileScreen from '../routes/ProfileScreen';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
