import React, {ReactNode} from 'react';
import 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ApplicationProvider, IconRegistry} from 'react-native-ui-kitten';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping, light as lightTheme} from '@eva-design/eva';

const App: () => ReactNode = () => {
  return (
    <>
      <SafeAreaProvider>
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
          <IconRegistry icons={EvaIconsPack} />
          <AppNavigator />
        </ApplicationProvider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
