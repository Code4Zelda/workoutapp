import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

const SignUpScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Sign up </Text>
      {/* <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      /> */}
    </View>
  );
};

export default SignUpScreen;
