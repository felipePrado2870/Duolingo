import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function SplashScreen1({navigation}) {
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text1:{
      fontSize:15,
      color: '#fff'
    }
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text1}> Splash01 </Text>
    </View>
  );
}

export default SplashScreen1;