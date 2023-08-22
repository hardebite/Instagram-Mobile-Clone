import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  VerticalScale,
} from '../../assets/styles/scaling';
const style = StyleSheet.create({
  profileImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: VerticalScale(32),
  },
  profileImageContent: {
    borderWidth: 1,
    padding: horizontalScale(4),
    borderColor: '#0150EC',
    borderRadius: horizontalScale(120),
  },
  profileImage: {
    width: horizontalScale(120),
    height: horizontalScale(120),
  },
  userName: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: scaleFontSize(20),
    lineHeight: scaleFontSize(24),
    color: '#022150',
  },
  userNameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: VerticalScale(20),
  },
  profileStatsContainer: {
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: VerticalScale(16),
  },
  singleStatContainer: {
    paddingHorizontal: horizontalScale(18),
    alignItems: 'center',
    paddingVertical: VerticalScale(10),
  },
  singleStatBorder: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
  },
  singleStatNumber: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: scaleFontSize(20),
    lineHeight: scaleFontSize(24),
    color: '#022150',
  },
  singleStatText: {
    marginTop: VerticalScale(6),
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    color: '#79869F',
  },
  border: {
    borderTopWidth: 1,
    borderColor: '#EFF2F6',
    marginVertical: VerticalScale(16),
    marginHorizontal: horizontalScale(28),
  },
});
export default style;
