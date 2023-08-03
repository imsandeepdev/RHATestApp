import * as React from 'react';
import {PixelRatio, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const scale = width / 414;

export function normalize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const fontSize = {
  Size1: normalize(1),
  Size2: normalize(2),
  Size4: normalize(4),
  Size8: normalize(8),
  Size5: normalize(5),
  Size6: normalize(6),
  Size10: normalize(10),
  Size12: normalize(12),
  Size14: normalize(14),
  Size16: normalize(16),
  Size18: normalize(18),
  Size20: normalize(20),
  Size22: normalize(22),
  Size24: normalize(24),
  Size26: normalize(26),
  Size28: normalize(28),
  Size30: normalize(30),

  extraSmall: normalize(10),
  small: normalize(12),
  medium: normalize(14),
  Size15: normalize(15),
  large: normalize(16),
  XLarge: normalize(18),
  XXLarge: normalize(20),
  XXXLarge: normalize(22),
  EXLarge: normalize(24),
  Size25: normalize(25),
  EXXLarge: normalize(26),
  EXXXLarge: normalize(28),
  UltraXLarge: normalize(30),
  Size40: normalize(40),

  Size60: normalize(60),
  Size70: normalize(70),
  Size50: normalize(50),
  Size80: normalize(80),
  Size100: normalize(100),
};

export default fontSize;
