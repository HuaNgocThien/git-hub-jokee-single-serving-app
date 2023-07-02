import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: colors.white,
  },
  title: {
    backgroundColor: colors.green,
    alignContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    margin: 45,
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 35,
    marginTop: 75,
  },
  button: {
    color: colors.white,
    margin: 15,
    fontWeight: 'bold',
    width: 150,
    height: 50,
    textAlign: 'center',
    marginTop: 5,
    textAlignVertical: 'center',
  },
  joke: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default styles;
