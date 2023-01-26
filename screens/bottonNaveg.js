import React from 'react';
import HomeScreen from './home';
import Screen0101 from './competition';
import ScreenProfile from './profile';
import ScreenChallenges from './challenges';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image,  StyleSheet, View} from 'react-native';
const Imagem01 = require('../assets/bottomTab/icon1.png');
const Imagem02 = require('../assets/bottomTab/icon01.png');
const Imagem03 = require('../assets/bottomTab/icon2.png');
const Imagem04 = require('../assets/bottomTab/icon02.png');
const Imagem05 = require('../assets/bottomTab/icon3.png');
const Imagem06 = require('../assets/bottomTab/icon03.png');
const Imagem07 = require('../assets/bottomTab/icon4.png');
const Imagem08 = require('../assets/bottomTab/icon04.png');

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  imag01: {
    height: 55,
    width: 55,
  },
  Contaicontainer: {
    marginTop: 10,
    width: '100%',
    height: 53,
    alignItems:  'center',
    backgroundColor: '#444'
  },
});

const Naveg = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View style={styles.Contaicontainer}>
              <Image style={styles.imag01} source={ focused ? Imagem02 : Imagem01 }  resizeMode= "stretch"/>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Screen0101"
        component={Screen0101}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused})=> (
            <View style={styles.Contaicontainer}>
              <Image style={styles.imag01} source={ focused ? Imagem04 : Imagem03 } resizeMode= "stretch"/>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Screen0202"
        component={ScreenProfile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View style={styles.Contaicontainer}>
              <Image style={styles.imag01} source={ focused ? Imagem06 : Imagem05 } resizeMode= "stretch"/>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Screen0303"
        component={ScreenChallenges}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View style={styles.Contaicontainer}>
              <Image style={styles.imag01} source={ focused ? Imagem08 : Imagem07 } resizeMode= "stretch"/>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Naveg;
