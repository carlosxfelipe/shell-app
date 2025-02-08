import {useColorScheme, StyleSheet} from 'react-native';
import {theme} from './theme';

const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return isDarkMode ? theme.dark : theme.light;
};

export const useGlobalStyles = () => {
  const currentTheme = useTheme();

  return StyleSheet.create({
    background: {
      backgroundColor: currentTheme.background,
    },
    text: {
      color: currentTheme.text,
    },
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: currentTheme.background,
    },
    primaryButton: {
      backgroundColor: currentTheme.warning,
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      color: currentTheme.text,
      fontSize: 18,
    },
  });
};
