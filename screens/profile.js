import React from 'react';
import {StyleSheet, ScrollView, StatusBar, Text, View, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Image1 = require('../assets/profile/image1.jpg')
const Image2 = require('../assets/profile/image2.jpg')
const Image3 = require('../assets/profile/image3.jpg')
const Image4 = require('../assets/profile/image4.jpg')
const Image5 = require('../assets/profile/image5.jpg')
const Image6 = require('../assets/profile/image6.jpg')
const IconFlag = require('../assets/profile/FlagEUA.png')
const Icon1 = require('../assets/profile/icon1.png')
const Icon2 = require('../assets/profile/icon2.png')
const Icon3 = require('../assets/profile/icon3.png')
const Icon4 = require('../assets/profile/icon4.png')
const Icon5 = require('../assets/profile/icon5.png')
const Icon6 = require('../assets/profile/icon6.png')
const Icon7 = require('../assets/profile/icon7.png')
const Icon8 = require('../assets/profile/icon8.png')
const Icon9 = require('../assets/profile/icon9.png')

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
      marginHorizontal: 15,
      
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
      borderRadius: 15,
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
      borderRadius: 15,
      height: 50,
      width: 50,
    },
    view5:{
      marginTop: 10,
      marginLeft: 10,
      flexDirection: 'row',
      borderColor: '#444',
      borderWidth:2,
      borderRadius: 15,
      height: 60,
      width: 200,
    },
    view7:{
      marginTop: 10,
      marginHorizontal: 10,
      borderColor: '#444',
      alignItems: 'center',
      borderWidth:2,
      borderRadius: 15,
      height: 200,
      width: 150,
    },
    view8:{
      marginTop: 10,
      marginLeft: 10,
      borderColor: '#444',
      borderWidth:2,
      borderRadius: 15,
      height: 285,
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
    view10:{
      marginTop: 15,
      marginLeft: 10,
      backgroundColor: '#1e90ff',
      alignItems: 'center',
      justifyContent:   'center',
      borderRadius: 15,
      height: 45,
      width: 380,
    },
    view11:{
      marginTop: 10,
      marginLeft: 10,
      borderColor: '#444',
      marginVertical: 25,
      borderWidth:2,
      borderRadius: 15,
      height: 470,
      width: 405,
    },
    view12:{
      marginTop: 10,
      marginLeft: 10,
      backgroundColor: '#9acd32',
      alignItems: 'center',
      justifyContent:   'center',
      borderRadius: 15,
      marginHorizontal: 10,
      height: 110,
      width: 90,
    },
    view13:{
      marginTop: 10,
      marginLeft: 10,
      backgroundColor: '#b22222',
      alignItems: 'center',
      justifyContent:   'center',
      borderRadius: 15,
      marginHorizontal: 10,
      height: 110,
      width: 90,
    },
    view14:{
      marginTop: 10,
      marginLeft: 10,
      backgroundColor: '#dda0dd',
      alignItems: 'center',
      justifyContent:   'center',
      borderRadius: 15,
      marginHorizontal: 10,
      height: 110,
      width: 90,
    },
    view15:{
      marginTop: 15,
      backgroundColor: '#1e90ff',
      alignItems: 'center',
      justifyContent:'center',
      borderRadius: 12,
      height: 35,
      width: 270,
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
    text11:{
      fontSize:25,
      color: '#fff',
      marginLeft: 10,
    },
    text12:{
      fontSize:23,
      color: '#999',
      marginLeft: 10,
    },
    text13:{
      fontSize:15,
      color: '#000',
    },
    text14:{
      fontSize:25,
      color: '#fff',
      marginTop: 20,
    },
    text15:{
      fontSize:25,
      color: '#fff',
      marginTop: 10,
      marginLeft: 10,
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
      height: 85,
      width: 85
    },
    image5: {
      height: 70,
      width: 70
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
              <Text style={styles.text6}>Ronaldo L...</Text>
              <Text style={styles.text7}>Tayany Person</Text>
              <Text style={styles.text7}>Segue</Text>
              <View style={styles.view9}>
                <Text style={styles.text10}>SEGUIR</Text>
              </View>
            </View>
            <View style={styles.view7}>
              <View style={styles.view1}>
                <Image style={styles.image3} source={Image3} resizeMode= "stretch"/>
                <Text style={styles.text7}>x</Text>
              </View>
              <Text style={styles.text6}>Theresa</Text>
              <Text style={styles.text7}>Tayany Person</Text>
              <Text style={styles.text7}>Segue</Text>
              <View style={styles.view9}>
                <Text style={styles.text10}>SEGUIR</Text>
              </View>
            </View>
            <View style={styles.view7}>
              <View style={styles.view1}>
                <Image style={styles.image3} source={Image4} resizeMode= "stretch"/>
                <Text style={styles.text7}>x</Text>
              </View>
              <Text style={styles.text6}>Dany Abig...</Text>
              <Text style={styles.text7}>Tayany Person</Text>
              <Text style={styles.text7}>Segue</Text>
              <View style={styles.view9}>
                <Text style={styles.text10}>SEGUIR</Text>
              </View>
            </View>
            <View style={styles.view7}>              
              <View style={styles.view1}>
                <Image style={styles.image3} source={Image1} resizeMode= "stretch"/>
                <Text style={styles.text7}>x</Text>
              </View>
              <Text style={styles.text6}>Felipe P...</Text>
              <Text style={styles.text7}>Tayany Person</Text>
              <Text style={styles.text7}>Segue</Text>
              <View style={styles.view9}>
                <Text style={styles.text10}>SEGUIR</Text>
              </View>
            </View>
            <View style={styles.view7}>
              <View style={styles.view1}>
                <Image style={styles.image3} source={Image5} resizeMode= "stretch"/>
                <Text style={styles.text7}>x</Text>
              </View>
              <Text style={styles.text6}>Roque Gin..</Text>
              <Text style={styles.text7}>Tayany Person</Text>
              <Text style={styles.text7}>Segue</Text>
              <View style={styles.view9}>
                <Text style={styles.text10}>SEGUIR</Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.view8}>
            <View style={styles.view1}>
              <Image style={styles.image4} source={Image6} resizeMode= "stretch"/>
              <View>
                <Text style={styles.text8}>Convide os seus </Text>
                <Text style={styles.text11}>amigos!</Text>
                <Text style={styles.text12}>Conte pra todo mundo que</Text>
                <Text style={styles.text12}>aprender um idioma no</Text>
                <Text style={styles.text12}>Duolingo é grétis e</Text>
                <Text style={styles.text12}>divertido</Text>
              </View>
            </View>
            <View style={styles.view10}>
                <Text style={styles.text10}>CONVIDAR AMIGOS</Text>
              </View>
          </View>
          <Text style={styles.text8}>Conquistas</Text>
          <View style={styles.view11}>
            <View style={styles.view1}>
              <View style={styles.view12}>
                <Image style={styles.image5} source={Icon7} resizeMode= "stretch"/>
                <Text style={styles.text13}>NIVEL 3</Text>
              </View>
              <View>
                <Text style={styles.text14}>Sabe-tudo</Text>
                <View style={styles.view15}>
                  <Text style={styles.text10}>RECEBER RECOMPENSA</Text>
                </View>
              </View>
            </View>
            <View style={styles.view2}/>
            <View style={styles.view1}>
              <View style={styles.view13}>
                <Image style={styles.image5} source={Icon8} resizeMode= "stretch"/>
                <Text style={styles.text13}>NIVEL 2</Text>
              </View>
              <View>
                <Text style={styles.text14}>Intelectual</Text>
                <View style={styles.view15}>
                  <Text style={styles.text10}>RECEBER RECOMPENSA</Text>
                </View>
              </View>
            </View>
            <View style={styles.view2}/>
            <View style={styles.view1}>
              <View style={styles.view14}>
                <Image style={styles.image5} source={Icon9} resizeMode= "stretch"/>
                <Text style={styles.text13}>NIVEL 2</Text>
              </View>
              <View>
                <Text style={styles.text14}>Imbatível</Text>
                <View style={styles.view15}>
                  <Text style={styles.text10}>RECEBER RECOMPENSA</Text>
                </View>
              </View>
            </View>
            <View style={styles.view2}/>
            <Text style={styles.text15}>Ver mais 8</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default ScreenProfile;