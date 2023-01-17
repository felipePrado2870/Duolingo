import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
const logo = require('../assets/duolingo_olho.png');

function SplashScreen1({navigation}) {
  var tmp=setTimeout(function(){navigation.navigate('Splash2')}, 600);
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#32cd32',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imag: {
      height: 200, width: 170
    }
  });
  return (
    <View style={styles.container}>
      <Image
        style={styles.imag}
        source={logo}
        resizeMode="contain"/>
    </View>
  );
}

export default SplashScreen1;