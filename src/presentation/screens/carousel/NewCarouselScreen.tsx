import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
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
      <View style={{marginTop: 10}} />
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
    padding: 10,
    borderRadius: 5,
    fontFamily: 'Menlo',
    fontSize: 16,
    marginTop: 10,
  },
});
