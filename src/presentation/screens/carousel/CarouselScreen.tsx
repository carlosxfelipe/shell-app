import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Carousel} from '../../components/Carousel';

const images = [
  {id: 1, uri: 'https://carlosxfelipe.netlify.app/my-vscode-settings.png'},
  {
    id: 2,
    uri: 'https://carlosxfelipe.netlify.app/my-favorite-programming-font.png',
  },
  {
    id: 3,
    uri: 'https://carlosxfelipe.netlify.app/my-vscode-extensions.png',
  },
  {
    id: 4,
    uri: 'https://carlosxfelipe.netlify.app/my-favorite-vscode-themes.png',
  },
  {
    id: 5,
    uri: 'https://carlosxfelipe.netlify.app/blog-placeholder-about.jpg',
  },
];

export const CarouselScreen: React.FC = () => {
  const handlePressImage = (id: string | number) => {
    Alert.alert('Imagem Clicada', `ID da Imagem: ${id}`);
  };

  return (
    <View style={styles.container}>
      <Carousel
        images={images}
        // height={420}
        showIndicators
        indicatorColor="purple"
        onPressImage={handlePressImage}
      />
      <Text style={styles.codeText}>
        {`<Carousel
  images={images}
  // height={420}
  showIndicators
  indicatorColor="purple"
  onPressImage={handlePressImage}
/>`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  codeText: {
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 5,
    fontFamily: 'Menlo',
    fontSize: 16,
    marginTop: 10,
  },
});
