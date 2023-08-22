import React from 'react';
import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  VerticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(18),
  },
  name: {
    textAlign: 'center',
    fontFamily: 'inter',
    fontWeight: '500',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(17),
    marginTop: VerticalScale(8),
  },
});
export default style;
