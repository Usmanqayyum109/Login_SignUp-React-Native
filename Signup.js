import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import React from 'react';
import Background from '../Components/Background';
import {Colors} from '../Constant/Colors';
import {hp, wp} from '../Constant/Responsive';
import Field from '../Components/Field';
import Btn from '../Components/Btn';
import {Fonts} from '../Constant/Fonts';

export default function Signup(props) {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.text}>Register</Text>
        <Text style={styles.createText}>Create a new account</Text>
        <View style={styles.box1}>
          <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Contact Number" keyboardType={'number'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />

          <Btn
            btnLabel="Signup"
            btn={{backgroundColor: Colors.darkGreen}}
            press={() => {
              Alert.alert('Account created');
              props.navigation.navigate('Login');
            }}
          />
          <View style={styles.box3}>
            <Text style={styles.accountText}>Already have an account ? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.textLogin}>Login</Text>
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
    fontFamily: Fonts.bold,

    marginTop: wp(2),
    // backgroundColor: 'red',
    includeFontPadding: false,
    height: hp(10),
  },

  createText: {
    color: Colors.white,
    fontSize: 19,
    // fontWeight: 'bold',
    fontFamily: Fonts.semiBold,
    marginBottom: 20,
  },

  container: {
    alignItems: 'center',
    width: wp(100),
    // justifyContent: 'center',
  },

  box1: {
    backgroundColor: Colors.white,
    height: hp(100),
    width: wp(100),
    borderTopLeftRadius: wp(40),
    paddingTop: wp(15),
    alignItems: 'center',
  },

  forgot: {
    color: Colors.darkGreen,
    fontWeight: 'bold',
    fontSize: 16,
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
    // fontWeight: 'bold',
    color: Colors.gray,
    fontFamily: Fonts.medium,
  },
});
