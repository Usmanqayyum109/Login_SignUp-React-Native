import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {wp} from '../Constant/Responsive';
import {Colors} from '../Constant/Colors';

export default function Btn(props) {
  return (
    <View>
      <TouchableOpacity onPress={props.press} style={[styles.btn, props.btn]}>
        <Text style={[styles.text, props.text]}>{props.btnLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.green,
    alignItems: 'center',
    borderRadius: wp(50),
    width: wp(80),
    paddingVertical: wp(1),
    marginVertical: wp(3),
  },

  text: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
