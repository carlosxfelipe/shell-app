import {Text, TouchableOpacity} from 'react-native';
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

const HeaderRight = () => (
  <TouchableOpacity onPress={() => {}} style={{marginRight: 15}}>
    <Text>@</Text>
  </TouchableOpacity>
);

export const StackNavigator = () => {
  const globalStyles = useGlobalStyles();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerBackTitle: 'Voltar',
        headerBackTitleStyle: {
          fontFamily: 'sans-serif-thin',
          fontSize: 16,
        },
        headerStyle: {
          elevation: 0,
          backgroundColor: globalStyles.background.backgroundColor,
          shadowColor: 'transparent',
        },
        headerTintColor: globalStyles.text.color,
        headerTitleStyle: {
          fontFamily: 'Zapfino',
          fontSize: 18,
          fontWeight: 'bold',
        },
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
