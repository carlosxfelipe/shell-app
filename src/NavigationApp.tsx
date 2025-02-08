import 'react-native-gesture-handler';

import {StatusBar, useColorScheme} from 'react-native';

import {useGlobalStyles} from './presentation/theme/useGlobalStyles';

import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './presentation/routes/StackNavigator';

function NavigationApp(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const globalStyles = useGlobalStyles();

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={globalStyles.background.backgroundColor}
      />
      <StackNavigator />
    </NavigationContainer>
  );
}

export default NavigationApp;
