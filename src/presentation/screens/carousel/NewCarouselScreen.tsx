import React from 'react';
import {Alert, Platform, StyleSheet, Text, View} from 'react-native';
import {Carousel} from '../../components/Carousel';
import {useGlobalStyles} from '../../theme/useGlobalStyles';

const images = [
  {id: 1, uri: require('../../../../assets/images/about-us-banner.png')},
  {id: 2, uri: require('../../../../assets/images/contact-banner.png')},
  {id: 3, uri: require('../../../../assets/images/place-an-order-banner.png')},
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
        indicatorColor="red"
        onPressImage={handlePressImage}
      />
      <Text style={[globalStyles.text, styles.codeText]}>
        {`<Carousel
  images={images}
  // height={420}
  showIndicators
  indicatorColor="red"
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
