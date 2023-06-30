import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';

const Joke = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        A child asked his father, "How were people born?" So his father said,
        "Adam and Eve made babies, then their babies became adults and made
        babies, and so on." The child then went to his mother, asked her the
        same question and she told him, "We were monkeys then we evolved to
        become like we are now." The child ran back to his father and said, "You
        lied to me!" His father replied, "No, your mom was talking about her
        side of the family."
      </Text>
    </View>
  );
};

export default React.memo(Joke);
