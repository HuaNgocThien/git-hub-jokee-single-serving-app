import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 25,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default styles;
