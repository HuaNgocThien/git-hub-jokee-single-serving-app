import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <View style={styles.user}>
        <View style={styles.userName}>
          <Text style={styles.name}>Handicrafted by</Text>
          <Text
            style={[styles.name, {fontWeight: 'bold', color: colors.black}]}>
            Jim HLS
          </Text>
        </View>
        <Image
          style={styles.userImg}
          source={require('../../assets/avt.jpg')}
        />
      </View>
    </View>
  );
};

export default React.memo(Header);
