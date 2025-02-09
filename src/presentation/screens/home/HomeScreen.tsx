import {ScrollView} from 'react-native';
import {useGlobalStyles} from '../../theme/useGlobalStyles';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../routes/StackNavigator';
import {GitHubBadge} from '../../components/GitHubBadge';
import {useState} from 'react';
import {SplashScreen} from '../splash/SplashScreen';

export const HomeScreen: React.FC = () => {
  const globalStyles = useGlobalStyles();
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const [showSplash, setShowSplash] = useState(false);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={globalStyles.container}>
      <PrimaryButton
        label="Testar Carousel"
        onPress={() => navigation.navigate('NewCarouselScreen')}
      />

      <PrimaryButton
        label="Testar SplashScreen"
        onPress={() => setShowSplash(true)}
      />
      <SplashScreen visible={showSplash} onClose={() => setShowSplash(false)} />

      <GitHubBadge
        username="@carlosxfelipe"
        projectUrl="https://github.com/carlosxfelipe/shell-app"
      />
    </ScrollView>
  );
};
