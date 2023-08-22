import {StyleSheet} from 'react-native';
import {horizontalScale, VerticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  profilePostContainer: {
    flex: 1,
    paddingTop: VerticalScale(10),
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(21),
    justifyContent: 'space-between',
  },
  image: {
    maxWidth: horizontalScale(150),
    maxHeight: VerticalScale(90),
  },
  imageUpcomingRowContainer: {
    marginTop: VerticalScale(11),
  },
  LastImageContainer: {
    marginBottom: VerticalScale(50),
  },
});
export default style;
