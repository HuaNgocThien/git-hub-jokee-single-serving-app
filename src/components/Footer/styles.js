import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'collum',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderColor: colors.grey,
    margin: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    paddingVertical: 5,
  },
});

export default styles;
