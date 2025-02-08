import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {useGlobalStyles} from './presentation/theme/useGlobalStyles';
// import {HomeScreen} from './presentation/screens/home/HomeScreen';
import {CarouselScreen} from './presentation/screens/carousel/CarouselScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const globalStyles = useGlobalStyles();

  return (
    <SafeAreaView style={globalStyles.background}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={globalStyles.background.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={globalStyles.background}>
        <View>
          {/* <HomeScreen /> */}
          <CarouselScreen />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
