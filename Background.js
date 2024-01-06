import {View, ImageBackground} from 'react-native';
import React from 'react';
import {hp} from '../Constant/Responsive';

export default function Background({children}) {
  return (
    <View>
      <ImageBackground
        source={require('../Assets/image.jpg')}
        style={{
          height: hp(100),
        }}
        resizeMode="cover">
        <View>{children}</View>
      </ImageBackground>
    </View>
  );
}
