import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {CarouselScreen} from '../screens/carousel/CarouselScreen';
import {NewCarouselScreen} from '../screens/carousel/NewCarouselScreen';
import {useGlobalStyles} from '../theme/useGlobalStyles';

export type RootStackParams = {
  Home: undefined;
  CarouselScreen: undefined;
  NewCarouselScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const globalStyles = useGlobalStyles();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          backgroundColor: globalStyles.background.backgroundColor,
          shadowColor: 'transparent',
        },
        headerTintColor: globalStyles.text.color,
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
