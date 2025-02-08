import {Pressable, Text} from 'react-native';
import {useGlobalStyles} from '../../theme/useGlobalStyles';

interface Props {
  onPress: () => void;
  label: string;
}

export const PrimaryButton = ({onPress, label}: Props) => {
  const globalStyles = useGlobalStyles();

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        globalStyles.primaryButton,
        pressed && {opacity: 0.8},
      ]}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};
