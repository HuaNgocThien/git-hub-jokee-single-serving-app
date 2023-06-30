import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 75,
    height: 75,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 20,
    marginTop: 10,
  },
  user: {
    flexDirection: 'row',
  },
  userName: {
    justifyContent: 'center',
    marginRight: 10,
  },
  name: {
    color: colors.ligthGrey2,
    textAlign: 'right',
  },
});

export default styles;
