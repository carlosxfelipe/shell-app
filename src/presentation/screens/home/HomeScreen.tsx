import {ScrollView} from 'react-native';
import {useGlobalStyles} from '../../theme/useGlobalStyles';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../routes/StackNavigator';
import {GitHubBadge} from '../../components/GitHubBadge';

export const HomeScreen: React.FC = () => {
  const globalStyles = useGlobalStyles();
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={globalStyles.container}>
      <PrimaryButton
        label="Testar Carousel"
        onPress={() => navigation.navigate('NewCarouselScreen')}
      />
      <GitHubBadge
        username="@carlosxfelipe"
        projectUrl="https://github.com/carlosxfelipe/shell-app"
      />
    </ScrollView>
  );
};
