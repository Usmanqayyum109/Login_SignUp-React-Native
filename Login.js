import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import React from 'react';
import Background from '../Components/Background';
import {Colors} from '../Constant/Colors';
import {hp, wp} from '../Constant/Responsive';
import Field from '../Components/Field';
import Btn from '../Components/Btn';
import {Fonts} from '../Constant/Fonts';

export default function Login(props) {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.text}>Login</Text>
        <View style={styles.box1}>
          <Text style={styles.welcome}>Welcome Back</Text>
          <Text style={styles.login}>Login to your account</Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <View style={styles.box2}>
            <Text style={styles.forgot}>Forgot Password ?</Text>
          </View>
          <Btn
            btnLabel="Login"
            btn={{backgroundColor: Colors.darkGreen}}
            press={() => Alert.alert('Logged in')}
          />
          <View style={styles.box3}>
            <Text style={styles.accountText}>Don't have an account ? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text style={styles.textLogin}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: 64,
    // fontWeight: 'bold',
    marginVertical: wp(2),
    // backgroundColor: 'blue',
    fontFamily: Fonts.bold,
  },

  container: {
    alignItems: 'center',
    width: wp(100),
    // backgroundColor: 'red',
  },

  box1: {
    backgroundColor: Colors.white,
    height: hp(100),
    width: wp(100),
    borderTopLeftRadius: wp(40),
    paddingTop: wp(20),
    alignItems: 'center',
  },

  welcome: {
    fontSize: 40,
    color: Colors.darkGreen,
    // fontWeight: 'bold',
    fontFamily: Fonts.semiBold,
    // includeFontPadding: false,
  },

  login: {
    fontSize: 19,
    // fontWeight: 'bold',
    fontFamily: Fonts.regular,
    color: Colors.gray,
    includeFontPadding: false,
    // marginBottom: 20,
  },

  forgot: {
    color: Colors.darkGreen,
    // fontWeight: 'bold',
    fontFamily: Fonts.medium,
    fontSize: 16,
  },

  box2: {
    // backgroundColor: Colors.lightGray,
    width: wp(80),
    alignItems: 'flex-end',
    paddingRight: wp(6),
    marginBottom: wp(40),
  },

  box3: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  textLogin: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: Colors.darkGreen,
    fontFamily: Fonts.medium,
  },

  accountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.gray,
    fontFamily: Fonts.medium,
  },
});
