import {StyleSheet} from 'react-native';
import { horizontalScale, scaleFontSize, VerticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  name: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
  },
  location: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(12),
    paddingTop: VerticalScale(5),
    lineHeight: scaleFontSize(15),
    color: '#79869F',
  },
  userInformation: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInformationPost: {
    marginLeft: horizontalScale(10),
  },
  image: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    padding: horizontalScale(3),
    borderRadius: horizontalScale(50),
  },
  userInformationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userPostContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  post: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: VerticalScale(16),
  },
  userPostStats: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: VerticalScale(30),
    paddingHorizontal: horizontalScale(10),
  },
  userPostStatButton: {
    marginRight: horizontalScale(27),
    flexDirection: 'row',
  },
  userPostStatIcon: {
    marginRight: horizontalScale(3),
    color: '#79869F',
  },
  userPostStatText: {
    color: '#79869F',
  },
});
export default style;
