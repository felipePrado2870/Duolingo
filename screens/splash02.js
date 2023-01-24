import React from 'react';
import {StyleSheet,Image, View} from 'react-native';
const nome = require('../assets/doulingo_nome.png');

function SplashScreen2({navigation}) {
  var tmp=setTimeout(function(){navigation.navigate('Home')}, 600);
  
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
        source={nome}
        resizeMode="contain"/>
    </View>
  );
}

export default SplashScreen2;