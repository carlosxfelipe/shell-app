import {Text, View} from 'react-native';
import {useGlobalStyles} from '../../theme/useGlobalStyles';
import {PrimaryButton} from '../../components/shared/PrimaryButton';

export const HomeScreen: React.FC = () => {
  const globalStyles = useGlobalStyles();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.buttonText}>HomeScreen</Text>
      <PrimaryButton label="Testar" onPress={() => {}} />
    </View>
  );
};
