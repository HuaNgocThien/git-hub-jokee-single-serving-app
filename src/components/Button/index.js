import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = ({text, style}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.text, style]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
Button.defaultProps = {
  text: 'Default text',
};

export default React.memo(Button);
