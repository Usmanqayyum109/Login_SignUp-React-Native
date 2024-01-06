import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {wp} from '../Constant/Responsive';
import {Colors} from '../Constant/Colors';

export default function Field(props) {
  return (
    <TextInput
      {...props}
      style={styles.input}
      placeholderTextColor={Colors.darkGreen}></TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    width: wp(80),
    color: Colors.darkGreen,
    borderRadius: wp(10),
    paddingHorizontal: wp(10),
    backgroundColor: Colors.lightGray,
    marginVertical: wp(2),
  },
});
