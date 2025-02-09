import {TouchableOpacity, useColorScheme} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from '@react-native-vector-icons/fontawesome6';
import {theme} from '../theme/theme';
import {useGlobalStyles} from '../theme/useGlobalStyles';
import {HomeScreen} from '../screens/home/HomeScreen';
import {CarouselScreen} from '../screens/carousel/CarouselScreen';
import {NewCarouselScreen} from '../screens/carousel/NewCarouselScreen';

export type RootStackParams = {
  Home: undefined;
  CarouselScreen: undefined;
  NewCarouselScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const HeaderRight = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const color = isDarkMode ? theme.dark.text : theme.light.text;

  return (
    <TouchableOpacity onPress={() => {}} style={{marginRight: 15}}>
      <Icon name="code" size={22} color={color} iconStyle="solid" />
    </TouchableOpacity>
  );
};

export const StackNavigator = () => {
  const globalStyles = useGlobalStyles();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerBackTitle: 'Voltar',
        headerBackTitleStyle: {},
        headerStyle: {
          elevation: 0,
          backgroundColor: globalStyles.background.backgroundColor,
          shadowColor: 'transparent',
        },
        headerTintColor: globalStyles.text.color,
        headerTitleStyle: {},
        headerRight: HeaderRight,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Início'}}
      />
      <Stack.Screen
        name="CarouselScreen"
        component={CarouselScreen}
        options={{title: 'Carousel'}}
      />
      <Stack.Screen
        name="NewCarouselScreen"
        component={NewCarouselScreen}
        options={{title: 'Carousel'}}
      />
    </Stack.Navigator>
  );
};
