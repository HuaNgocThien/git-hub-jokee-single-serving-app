import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.green,
    width: 150,
    height: 50,
  },
});

export default styles;
