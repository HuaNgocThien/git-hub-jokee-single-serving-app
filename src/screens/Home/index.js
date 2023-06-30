import React from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import Joke from '../../components/Joke';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Header />
          <View style={styles.title}>
            <Text style={styles.text}>A joke a day keeps the doctor away</Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 14.5,
                  marginTop: -15,
                  marginBottom: 45,
                  marginRight: -50,
                },
              ]}>
              If you joke wrong way, your teeth have to pay.(Serious)
            </Text>
          </View>
          <View>
            <Joke />
            <View style={styles.buttonContainer}>
              <Button style={styles.button} text={'This is Funny!'} />
              <Button style={styles.button} text={'This is not funny.'} />
            </View>
          </View>
          <View>
            <Footer />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Home);
