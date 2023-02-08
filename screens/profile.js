import React from 'react';
import {StyleSheet, ScrollView, StatusBar, Text, View, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Image1 = require('../assets/profile/image1.jpg')
const Image2 = require('../assets/profile/image2.jpg')
const Image3 = require('../assets/profile/image3.jpg')
const Image4 = require('../assets/profile/image4.jpg')
const Image5 = require('../assets/profile/image5.jpg')

const IconFlag = require('../assets/profile/FlagEUA.png')
const Icon1 = require('../assets/profile/icon1.png')
const Icon2 = require('../assets/profile/icon2.png')
const Icon3 = require('../assets/profile/icon3.png')
const Icon4 = require('../assets/profile/icon4.png')
const Icon5 = require('../assets/profile/icon5.png')
const Icon6 = require('../assets/profile/icon6.png')

function ScreenProfile({navigation}) {
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#222',
    },
    scroll1: {
      width: '100%',
    },
    scroll2: {
      marginTop: 10,
      height: 220,
      
    },
    view1:{
      flexDirection:'row'
    }, 
    view2:{
      marginTop: 15,
      backgroundColor: '#444',
      height: 2,
    },
    view3:{
      flexDirection: 'row',
      marginTop: 10,
      marginLeft: 10,
      alignItems: 'center',
      justifyContent:'center',
      borderColor: '#444',
      borderWidth:2,
      borderRadius: 10,
      height: 50,
      width: 340,
    },
    view4:{
      marginTop: 10,
      marginLeft: 20,
      alignItems: 'center',
      justifyContent:'center',
      borderColor: '#444',
      borderWidth:2,
      borderRadius: 10,
      height: 50,
      width: 50,
    },
    view5:{
      marginTop: 10,
      marginLeft: 10,
      flexDirection: 'row',
      borderColor: '#444',
      borderWidth:2,
      borderRadius: 10,
      height: 60,
      width: 200,
    },
    view7:{
      marginTop: 10,
      marginLeft: 10,
      borderColor: '#444',
      alignItems: 'center',
      borderWidth:2,
      borderRadius: 10,
      height: 200,
      width: 150,
    },
    view8:{
      marginTop: 10,
      marginLeft: 10,
      marginVertical: 20,
      borderColor: '#444',
      borderWidth:2,
      borderRadius: 10,
      height: 400,
      width: 405,
    },
    view9:{
      marginTop: 15,
      backgroundColor: '#1e90ff',
      alignItems: 'center',
      borderRadius: 10,
      height: 30,
      width: 130,
    },
    text1:{
      marginTop: 13,
      marginLeft: 170,
      fontSize:25,
      color: '#777',
    },
    text2:{
      marginTop: 15,
      marginLeft: 10,
      fontSize:32,
      color: '#fff'
    },
    text3:{
      fontSize:20,
      color: '#999',
      marginLeft: 10,
    },
    text4:{
      fontSize:20,
      marginTop: 10,
      color: '#1e90ff',
      marginLeft: 10,
    },
    text5:{
      fontSize:25,
      color: '#1e90ff',
      marginLeft: 10,
    },
    text6:{
      marginTop: 5,
      fontSize:15,
      color: '#fff',
      marginLeft: 10,
    },
    text7:{
      fontSize:15,
      color: '#999',
      marginLeft: 10,
    },
    text8:{
      fontSize:25,
      color: '#fff',
      marginLeft: 10,
      marginTop: 15,
    },
    text9:{
      fontSize:25,
      color: '#1e90ff',
      marginLeft: 25,
      marginTop: 15,
    },
    text10:{
      fontSize:20,
      color: '#000',
    },
    
    image1: {
      marginTop: 15,
      marginLeft: 15,
      alignSelf: 'center',
      borderRadius: 14,
      height: 70,
      width: 70
    },
    image2: {
      marginTop: 15,
      marginLeft: 10,
      borderRadius: 5,
      height: 25,
      width: 35
    },
    image3: {
      marginTop: 15,
      marginLeft: 40,
      marginHorizontal: 15,
      borderRadius: 40,
      height: 55,
      width: 55
    },
    image4: {
      marginTop: 15,
      marginLeft: 15,
      height: 90,
      width: 90
    },
    icon1: {
      marginTop: 15,
      marginLeft: 145,
      alignSelf: 'center',
      height: 30,
      width: 30
    },
    icon2: {
      alignSelf: 'center',
      height: 40,
      width: 40
    },
    icon3: {
      alignSelf: 'center',
      height: 40,
      width: 40
    },
    icon4: {
      color: '#666',
      fontSize: 23,
      marginTop: 8,
      marginLeft: 5,
    },
    icon5: {
      height: 30,
      width: 30,
      marginTop: 5,
      marginLeft: 5,
    },

  });
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#222" barStyle="light-content" />
      <View style={styles.view1}>
        <Text style={styles.text1}>Perfil </Text>
        <Image style={styles.icon1} source={Icon1} resizeMode= "stretch"/>
      </View>
      <View style={styles.view2}/>
      <ScrollView style={styles.scroll1}>
        <View style={styles.view1}>
          <View>
            <Text style={styles.text2}>Felipe do Prado Padi... </Text>
            <Text style={styles.text3}>FelipedoPr1</Text>
          </View>
          <Image style={styles.image1} source={Image1} resizeMode= "stretch"/>
        </View>
        <View>
          <Text style={styles.text3}>Por aqui desde fevereiro de 2019 </Text>
          <Image style={styles.image2} source={IconFlag} resizeMode= "stretch"/>
          <Text style={styles.text4}>Segue 1 Tem  2 seguidores </Text>
          <View style={styles.view1}>
            <View style={styles.view3}>
              <Image style={styles.icon2} source={Icon2} resizeMode= "stretch"/>
              <Text style={styles.text5}>ADICIONAR AMIGOS </Text>
            </View>
            <View View style={styles.view4}>
              <Image style={styles.icon3} source={Icon3} resizeMode= "stretch"/>
            </View>
          </View>
          <View style={styles.view2}/>
          <Text style={styles.text2}>Estatíticas</Text>
          <View style={styles.view1}>
            <View style={styles.view5}>
              <MaterialIcons name="local-fire-department" style={styles.icon4}/>
              <View>
                <Text style={styles.text6}>0</Text>
                <Text style={styles.text7}>Dias seguidos</Text>
              </View>
            </View>
            <View style={styles.view5}>
              <Image style={styles.icon5} source={Icon4} resizeMode= "stretch"/>
              <View>
                <Text style={styles.text6}>310</Text>
                <Text style={styles.text7}>Total de XP</Text>
              </View>
            </View>
          </View>
          <View style={styles.view1}>
            <View style={styles.view5}>
              <Image style={styles.icon5} source={Icon5} resizeMode= "stretch"/>
              <View>
                <Text style={styles.text6}>Prata</Text>
                <Text style={styles.text7}>Dvisão</Text>
              </View>
            </View>
            <View style={styles.view5}>
              <Image style={styles.icon5} source={Icon6} resizeMode= "stretch"/>
              <View>
                <Text style={styles.text6}>0</Text>
                <Text style={styles.text7}>Pódios</Text>
              </View>
            </View>
          </View>
          <View style={styles.view1}>
            <Text style={styles.text8}>Sugestôes de amigos</Text>
            <Text style={styles.text9}>VER TODOS</Text>
          </View>
          <ScrollView style={styles.scroll2} horizontal>
            <View style={styles.view7}>
              <View style={styles.view1}>
                <Image style={styles.image3} source={Image2} resizeMode= "stretch"/>
                <Text style={styles.text7}>x</Text>
              </View>
             
              <Text style={styles.text6}>0</Text>
              <Text style={styles.text7}>Dias seguidos</Text>
              <Text style={styles.text7}>Dias seguidos</Text>
              <View style={styles.view9}>
                <Text style={styles.text10}>SEGUIR</Text>
              </View>
            </View>
            <View style={styles.view7}>
              <View style={styles.view1}>
                <Image style={styles.image3} source={Image3} resizeMode= "stretch"/>
                <Text style={styles.text7}>x</Text>
              </View>
              <Text style={styles.text6}>0</Text>
              <Text style={styles.text7}>Dias seguidos</Text>
              <Text style={styles.text7}>Dias seguidos</Text>
              <View style={styles.view9}>
                <Text style={styles.text10}>SEGUIR</Text>
              </View>
            </View>
            <View style={styles.view7}>
              <View style={styles.view1}>
                <Image style={styles.image3} source={Image4} resizeMode= "stretch"/>
                <Text style={styles.text7}>x</Text>
              </View>
              <Text style={styles.text6}>0</Text>
              <Text style={styles.text7}>Dias seguidos</Text>
              <Text style={styles.text7}>Dias seguidos</Text>
              <View style={styles.view9}>
                <Text style={styles.text10}>SEGUIR</Text>
              </View>
            </View>
            <View style={styles.view7}>              
              <View style={styles.view1}>
                <Image style={styles.image3} source={Image3} resizeMode= "stretch"/>
                <Text style={styles.text7}>x</Text>
              </View>
              <Text style={styles.text6}>0</Text>
              <Text style={styles.text7}>Dias seguidos</Text>
              <Text style={styles.text7}>Dias seguidos</Text>
              <View style={styles.view9}>
                <Text style={styles.text10}>SEGUIR</Text>
              </View>
            </View>
            <View style={styles.view7}>
              <View style={styles.view1}>
                <Image style={styles.image3} source={Image3} resizeMode= "stretch"/>
                <Text style={styles.text7}>x</Text>
              </View>
              <Text style={styles.text6}>0</Text>
              <Text style={styles.text7}>Dias seguidos</Text>
              <Text style={styles.text7}>Dias seguidos</Text>
              <View style={styles.view9}>
                <Text style={styles.text10}>SEGUIR</Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.view8}>
          <Image style={styles.image4} source={Image5} resizeMode= "stretch"/>
          
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default ScreenProfile;