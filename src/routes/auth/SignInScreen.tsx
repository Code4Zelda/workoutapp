import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Text, withStyles, Input} from 'react-native-ui-kitten';
import {AppRoute} from '../../navigation/app-routes';

const SignInScreen = ({navigation}: any) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsername = (name: string) => {
    setUserName(name);
  };

  const onChangePassword = (word: string) => {
    setPassword(word);
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Input />

      <Text>Sign in </Text>
      <Button
        title=" Sign Up"
        onPress={() => navigation.navigate(AppRoute.SIGN_UP)}
      />
    </View>
  );
};

export default SignInScreen;
