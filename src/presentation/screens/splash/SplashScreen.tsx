import React, {useRef, useEffect} from 'react';
import {View, Modal, Animated, StyleSheet, Easing} from 'react-native';
import Svg, {Path, Defs, ClipPath, Rect} from 'react-native-svg';

const SVG_WIDTH = 300;
const SVG_HEIGHT = 600;
const FILL_COLOR = 'white';
const BACKGROUND_COLOR = 'purple';
const SVG_BG_COLOR = 'black';

const AnimatedRect = Animated.createAnimatedComponent(Rect);

interface Props {
  visible: boolean;
  onClose: () => void;
}

export const SplashScreen: React.FC<Props> = ({visible, onClose}) => {
  const fillAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      fillAnimation.setValue(0);
      Animated.timing(fillAnimation, {
        toValue: 1,
        duration: 2000,
        delay: 500,
        easing: Easing.out(Easing.quad),
        useNativeDriver: false,
      }).start(() => onClose());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const animatedY = fillAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [SVG_HEIGHT, 0],
  });

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.splashContainer}>
        <Svg width={SVG_WIDTH} height={SVG_HEIGHT} viewBox="0 0 18 18">
          <Defs>
            <ClipPath id="bottleClip">
              <Path d="M7.367 12.81v-.117c-.01-.205-.027-.356-.027-.412 0-.144-.239-1.67-.276-2.026-.037-.35.048-.434.048-.434-.224-1.303.191-2.7.191-2.7-.149-.133.16-.83.16-.83.228-.573.51-1.39.51-1.39a8.48 8.48 0 00.155-.747c.042-.45.042-.907.042-1.057 0-.117-.138-.112-.138-.212 0-.122.138-.417.149-.445a.256.256 0 00-.01-.106c-.011-.028-.038-.056-.038-.056 0-.139.101-.278.26-.278h1.219c.154 0 .26.14.26.278 0 0-.026.023-.042.062a.19.19 0 00-.01.105c.01.028.148.329.148.446 0 .105-.138.1-.138.211 0 .145.005.601.042 1.052.048.295.107.568.155.752 0 0 .276.818.51 1.391 0 0 .314.696.16.83 0 0 .415 1.397.191 2.7 0 0 .085.083.048.434-.037.35-.276 1.876-.276 2.026 0 .056-.016.212-.027.418v.11c0 .925.367 1.376.367 1.972C11 15.582 10.516 16 9 16s-2-.412-2-1.213c0-.596.367-1.047.367-1.977z" />
            </ClipPath>
          </Defs>

          <Path
            fill={SVG_BG_COLOR}
            d="M7.367 12.81v-.117c-.01-.205-.027-.356-.027-.412 0-.144-.239-1.67-.276-2.026-.037-.35.048-.434.048-.434-.224-1.303.191-2.7.191-2.7-.149-.133.16-.83.16-.83.228-.573.51-1.39.51-1.39a8.48 8.48 0 00.155-.747c.042-.45.042-.907.042-1.057 0-.117-.138-.112-.138-.212 0-.122.138-.417.149-.445a.256.256 0 00-.01-.106c-.011-.028-.038-.056-.038-.056 0-.139.101-.278.26-.278h1.219c.154 0 .26.14.26.278 0 0-.026.023-.042.062a.19.19 0 00-.01.105c.01.028.148.329.148.446 0 .105-.138.1-.138.211 0 .145.005.601.042 1.052.048.295.107.568.155.752 0 0 .276.818.51 1.391 0 0 .314.696.16.83 0 0 .415 1.397.191 2.7 0 0 .085.083.048.434-.037.35-.276 1.876-.276 2.026 0 .056-.016.212-.027.418v.11c0 .925.367 1.376.367 1.972C11 15.582 10.516 16 9 16s-2-.412-2-1.213c0-.596.367-1.047.367-1.977z"
          />

          <AnimatedRect
            x="0"
            y={animatedY}
            width="18"
            height={SVG_HEIGHT}
            fill={FILL_COLOR}
            clipPath="url(#bottleClip)"
          />
        </Svg>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
