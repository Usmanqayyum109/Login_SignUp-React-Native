import {View, Text, Alert, StyleSheet} from 'react-native';
import React from 'react';
import Background from '../Components/Background';
import {Colors} from '../Constant/Colors';
import {wp} from '../Constant/Responsive';
import Btn from '../Components/Btn';
import {Fonts} from '../Constant/Fonts';

export default function Home(props) {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.text1}>Let's start</Text>
        <Text style={styles.text2}>Coding</Text>
        <Btn
          btnLabel="Login"
          //   btn={{backgroundColor: Colors.white}}
          textColor={Colors.white}
          //   bgColor={Colors.green}
          press={() => props.navigation.navigate('Login')}
        />
        <Btn
          btnLabel="Sign up"
          //   textColor={Colors.darkGreen}
          btn={{backgroundColor: Colors.white}}
          text={{color: Colors.darkGreen}}
          //   bgColor={Colors.white}
          press={() => props.navigation.navigate('Signup')}
        />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    //   backgroundColor: 'red',
    marginHorizontal: wp(10),
    marginVertical: wp(30),
  },

  text1: {
    color: Colors.white,
    fontSize: wp(20),
    // backgroundColor: 'red',
    includeFontPadding: false,
    // backgroundColor: 'blue',
    padding: 0,
    // marginTop: 0,
    fontFamily: Fonts.bold,
  },

  text2: {
    color: Colors.white,
    // fontSize: 64,
    // backgroundColor: 'yellow',
    includeFontPadding: false,
    fontSize: wp(20),
    padding: wp(0),
    fontFamily: Fonts.regular,
  },
});
