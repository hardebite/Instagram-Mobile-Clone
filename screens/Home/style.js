import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  VerticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: horizontalScale(30),
    paddingLeft: horizontalScale(24),
    paddingRight: horizontalScale(17),
  },
  messageIcon: {
    backgroundColor: '#F9FAFB',
    padding: horizontalScale(12),
    borderRadius: horizontalScale(100),
  },
  fontAwesome: {
    color: '#CACDDE',
  },
  circleContainer: {
    backgroundColor: '#F35BAC',
    width: horizontalScale(11),
    height: VerticalScale(10),
    borderRadius: horizontalScale(11),
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFFF',
    position: 'absolute',
    right: horizontalScale(7),
    top: VerticalScale(8),
  },
  number: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(6),
    lineHeight: scaleFontSize(7),
    fontWeight: '600',
  },
  userStoryContainer: {
    paddingHorizontal: horizontalScale(26),
    marginTop: VerticalScale(12),
    height: 100,
  },
  userPostContainer: {
    marginTop: VerticalScale(30),

    paddingHorizontal: horizontalScale(22),
  },
});
export default style;
