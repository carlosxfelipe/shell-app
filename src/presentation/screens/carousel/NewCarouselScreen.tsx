import React from 'react';
import {Alert, Platform, StyleSheet, Text, View} from 'react-native';
import {Carousel} from '../../components/Carousel';
import {useGlobalStyles} from '../../theme/useGlobalStyles';

const images = [
  {id: 1, uri: require('../../../../assets/images/bird-1905255_640.jpg')},
  {id: 2, uri: require('../../../../assets/images/bird-7534030_640.jpg')},
  {id: 3, uri: require('../../../../assets/images/deer-7453413_640.jpg')},
  {id: 4, uri: require('../../../../assets/images/forest-6631518_640.jpg')},
  {id: 5, uri: require('../../../../assets/images/frog-9335937_640.jpg')},
  {id: 6, uri: require('../../../../assets/images/sunrise-7493833_640.jpg')},
];

export const NewCarouselScreen: React.FC = () => {
  const globalStyles = useGlobalStyles();

  const handlePressImage = (id: string | number) => {
    Alert.alert('Imagem Clicada', `ID da Imagem: ${id}`);
  };

  return (
    <View
      style={{
        backgroundColor: globalStyles.background.backgroundColor,
        flex: 1,
      }}>
      <View style={{marginTop: 20}} />
      <Carousel
        images={images}
        // height={420}
        showIndicators
        indicatorColor="green"
        onPressImage={handlePressImage}
      />
      <Text style={[globalStyles.text, styles.codeText]}>
        {`<Carousel
  images={images}
  // height={420}
  showIndicators
  indicatorColor="green"
  onPressImage={handlePressImage}
/>`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  codeText: {
    padding: 20,
    borderRadius: 5,
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    fontSize: 16,
  },
});
