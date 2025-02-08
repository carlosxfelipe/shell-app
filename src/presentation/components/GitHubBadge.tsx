import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Platform,
} from 'react-native';
import GitHubIcon from './icons/GitHubIcon';
import QRCode from 'react-native-qrcode-svg';
import {useGlobalStyles} from '../theme/useGlobalStyles';
import {theme} from '../theme/theme';

interface GitHubBadgeProps {
  username: string;
  projectUrl?: string;
}

export const GitHubBadge: React.FC<GitHubBadgeProps> = ({
  username,
  projectUrl,
}) => {
  const globalStyles = useGlobalStyles();

  return (
    <View>
      <View style={styles.githubContainer}>
        <GitHubIcon size={30} />
        <Text style={[styles.githubText, globalStyles.text]}>{username}</Text>
      </View>
      {projectUrl && (
        <View style={styles.qrCodeContainer}>
          <Text style={[styles.qrCodeLabel, globalStyles.text]}>
            Digitalize o QR Code para visitar o projeto:
          </Text>
          <QRCode value={projectUrl} size={150} />
          <TouchableOpacity onPress={() => Linking.openURL(projectUrl)}>
            <Text style={styles.projectUrlText}>{projectUrl}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  githubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  githubText: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
    fontFamily: Platform.select({
      ios: 'Avenir',
      android: 'sans-serif',
    }),
  },
  qrCodeContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  qrCodeLabel: {
    fontSize: 14,
    color: '#24292f',
    marginBottom: 10,
  },
  projectUrlText: {
    fontSize: 14,
    color: theme.dark.info,
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});
