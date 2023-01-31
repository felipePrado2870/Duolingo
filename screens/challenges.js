import React, {useState}  from 'react';
import {StyleSheet, TouchableOpacity, ScrollView, Image, StatusBar, Text, View} from 'react-native';
const Imagem01 = require('../assets/challenges/Image01.png');
const Imagem02 = require('../assets/challenges/Image02.png');
const Imagem03 = require('../assets/challenges/Image03.png');
const Imagem04 = require('../assets/challenges/Image04.png');
const Imagem05 = require('../assets/challenges/Image05.png');
const Imagem06 = require('../assets/challenges/Image06.png');
const Imagem07 = require('../assets/challenges/Image07.png');
const Imagem08 = require('../assets/challenges/Image08.png');

function ScreenChallenges({navigation}) {

  const [page, setPage] = useState(1);
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
    },
    container1: {
      flex: 1,
      width: '100%',
      marginTop : 20,
    },
    container2: {
      marginHorizontal: 20,
      marginTop : 20,
      height: 350,
      width: 390,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: '#7777'
    },
    container3: {
      height: 90,
      width: 390,
      flexDirection: 'row',
    },
    container4: {
      height: 120,
      width: 390,
      flexDirection: 'row',
    },
    container5: {
      marginHorizontal: 20,
      marginVertical: 30,
      marginTop : 20,
      height: 370,
      width: 390,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: '#7777',
    },
    container6: {
      height: 200,
      width: 200,
      marginLeft: 15,
    },
    container7: {
      marginTop: 15,
      height: 35,
      width: 115,
      backgroundColor: '#ffff',
      borderRadius: 4,
      marginVertical: 10,
    },
    container8: {
      marginLeft: 15,
      height: 40,
      width: 250,
    },

    scroll: {
      width: '100%',
    },

    text:{
      marginTop: 20,
      fontSize:25,
      color: '#666'
    },
    text1:{
      color: page === 1 ? '#1e90ff' : '#666',
      alignSelf: 'center',
      fontSize: 20,
    },
    text2:{
      color: page === 2 ? '#1e90ff' : '#666',
      alignSelf: 'center',
      fontSize: 20,
    },
    text3 :{
      fontSize:25,
      color: '#ffff',
    },
    text4 :{
      marginLeft: 10,
      fontSize:20,
      color: '#daa520',
      alignSelf: 'center',
    },
    text5 :{
      fontSize:25,
      color: '#ffff',
    },
    text6 :{
      marginLeft: 5,
      fontSize:20,
      color: '#daa520',
    },
    text7 :{
      marginLeft: 5,
      fontSize:25,
      color: '#4169e1',
    },
    text8 :{
      fontSize:25,
      color: '#ffff'
    },
    text9 :{
      marginTop: 5,
      fontSize:20,
      color: '#c0c0c0',
    }, 
    text10 :{
      marginTop: 5,
      fontSize:21,
      color: '#ffff',
    }, 
    text11 :{
      fontSize:20,
      color: '#c0c0c0',
    }, 
    text12 :{
      marginTop: 5,
      fontSize:20,
      color: '#1e90ff',
    }, 
    text13 :{
      marginTop: 7,
      marginLeft: 15,
      fontSize:22,
      color: '#ffff'
    },
    text14 :{
      fontSize:35,
      color: '#ffff',
      alignSelf: 'center',
    },
    text15 :{
      marginTop: 30,
      fontSize:24,
      color: '#c0c0c0',
      alignSelf: 'center',
    },
    text16 :{
      fontSize:24,
      color: '#c0c0c0',
      alignSelf: 'center',
    },
    
    viewBarra1:{
      marginTop: 10,
      height: page === 1 ? 2 : 1,
      width: '100%',
      backgroundColor: page === 1 ? '#1e90ff' : '#666',
    },
    viewBarra2:{
      height: page === 2 ? 2 : 1,
      width: '100%',
      backgroundColor: page === 2 ? '#1e90ff' : '#666',
      marginTop: 10,
    },
   
    view1:{
      flexDirection: 'row',
      marginTop: 30
    },
    view2:{
      flex: 1,
    },
    view3:{
      marginLeft: 20,
      height: 40,
      width:'100%',
      flexDirection: 'row', 
    },
    view4:{
      height: 40,
      width: 290,
    },
    view5:{
      height: 40,
      width: 150,
      flexDirection: 'row', 
    },
    view6:{
      marginTop: 5,
      height: 2,
      backgroundColor: '#7777',
    },
    view7:{
      marginTop: 35,
      marginLeft: 15,
      marginHorizontal: 5,
      height: 50,
      width: 50,
      backgroundColor: '#1e90ff',
      borderRadius: 20,
    },
    view8:{
      marginTop: 10,
      marginLeft: 15,
      height: 17,
      width: 200,
      backgroundColor: '#7777',
      borderRadius: 10,
    },
    view9:{
      marginTop: 10,
      marginLeft: 15,
      height: 30,
      width: 250,
    },
    view10:{
      marginTop: 10,
      marginLeft: 15,
      height: 65,
      width: 300,
    },
    view11:{
      flexDirection: 'row', 
    },
    view12:{
      marginTop: 30,
      marginLeft: 15,
      height: 17,
      width: 340,
      backgroundColor: '#7777',
      borderRadius: 10,
    },
    
    
    imagem01: {
      alignSelf: 'center',
      height: 25,
      width: 25,
    },
    imagem02: {
      marginLeft: 10,
      height: 60,
      width: 60,
      alignSelf: 'center',
    },
    imagem03: {
      height: 50,
      width: 50,
      alignSelf: 'center',
    },
    imagem04: {
      height: 60,
      width:60,
      marginLeft:-30,
      marginTop:-10,
    },
    imagem05: {
      height: 150,
      width:150,
      marginTop: 40,
      marginLeft:10,
    },
    imagem06: {
      height: 50,
      width:50,
      marginLeft:-30,
      marginTop: 12,
      borderRadius: 50,
      borderWidth: 3,
      borderColor: '#000000',
    },
    imagem07: {
      marginTop: 60,
      alignSelf: 'center',
      height: 180,
      width: 230,
      marginVertical: 10,
    },

  });
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#000000" barStyle="light-content" />
      <Text style={styles.text}>Desafios</Text>
      <View style={styles.view1}>
        <TouchableOpacity style={styles.view2} onPress={() => setPage(1)}>
          <View>
            <Text style={styles.text1}> METAS </Text>
            <View style={styles.viewBarra1}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}} onPress={() => setPage(2)}>
          <View>
            <Text style={styles.text2}>MEDALHAS</Text>
            <View style={styles.viewBarra2}/>
          </View>
        </TouchableOpacity>
      </View>
      {page === 1 && <View style={styles.container1}>
          <ScrollView style={styles.scroll}>
            <View style={styles.view3}>
              <View style={styles.view4}>
                <Text style={styles.text3}>Missôes do dia</Text>
              </View>
              <View style={styles.view5}>
                <Image style={styles.imagem01} source={Imagem01} resizeMode= "stretch"/> 
                <Text style={styles.text4}>7 horas</Text>
              </View>
            </View>
            <View style={styles.container2}>
              <View style={styles.container3}>
                <Image style={styles.imagem02} source={Imagem02} resizeMode= "stretch"/> 
                <View>
                  <View style={styles.view9}>
                    <Text style={styles.text5}>Ganhe 10Xp</Text>
                  </View>
                  <View style={styles.view11}>
                    <View style={styles.view8}/>
                    <Image style={styles.imagem04} source={Imagem05} resizeMode= "stretch"/> 
                    <Text style={styles.text6}>0/10</Text>
                  </View>
                </View>
              </View>
              <View style={styles.view6}/>
              <View style={styles.container4}>
                <Image style={styles.imagem02} source={Imagem03} resizeMode= "stretch"/> 
                <View>
                  <View style={styles.view10}>
                    <Text style={styles.text5}>Consiga 90% ou mais de</Text>
                    <Text style={styles.text5}>acertos em 2 lições</Text>
                  </View>
                  <View style={styles.view11}>
                    <View style={styles.view8}/>
                    <Image style={styles.imagem04} source={Imagem05} resizeMode= "stretch"/> 
                    <Text style={styles.text6}>0/2</Text>
                  </View>
                </View>
              </View>
              <View style={styles.view6}/>
              <View style={styles.container4}>
                <View style={styles.view7}>
                  <Image style={styles.imagem03} source={Imagem04} resizeMode= "stretch"/> 
                </View>
                <View>
                  <View style={styles.view10}>
                    <Text style={styles.text5}>Faça 7 exercícios de</Text>
                    <Text style={styles.text5}>escuta</Text>
                  </View>
                  <View style={styles.view11}>
                    <View style={styles.view8}/>
                    <Image style={styles.imagem04} source={Imagem05} resizeMode= "stretch"/> 
                    <Text style={styles.text6}>0/7</Text>
                  </View>
                </View>
              </View>
            </View> 
            <View style={styles.container5}>
              <View style={styles.view11}>
                <View style={styles.container6}>
                  <View style={styles.container7}>
                    <Text style={styles.text7}>JANEIRO</Text>
                  </View>
                  <Text style={styles.text8}>A Festa de Ano</Text>
                  <Text style={styles.text8}>Novo do Duo</Text>
                  <View style={styles.view11}>
                    <Text style={styles.text9}>Ganha </Text>
                    <Text style={styles.text10}>393 XP </Text>
                    <Text style={styles.text9}>hoje</Text>
                  </View>
                  <Text style={styles.text11}>pra ficar no páreo!</Text>
                </View>
                <Image style={styles.imagem05} source={Imagem06} resizeMode= "stretch"/> 
              </View>
              <View style={styles.view6}/>
              <View style={styles.view11}>
                <View style={styles.view12}/>
                <Image style={styles.imagem06} source={Imagem07} resizeMode= "stretch"/> 
              </View>
              <View style={styles.view11}>
                <View style={styles.container8} >
                <Text style={styles.text12}>0 / 1000 XP</Text>
                </View>
                <Text style={styles.text10}>Falta 2 dias </Text>
              </View>
              <View style={styles.view6}/>
              <Text style={styles.text13}>Ver desafio</Text>
            </View>
          </ScrollView> 
        </View>
      }
      {page === 2 && <View style={styles.container1}>
          <Image style={styles.imagem07} source={Imagem08} resizeMode= "stretch"/> 
          <Text style={styles.text14}>Ganhe a sua primeira</Text>
          <Text style={styles.text14}>medalha!</Text>
          <Text style={styles.text15}>Complete o desafio de mês pra</Text>
          <Text style={styles.text16}>ganhar medalhas exclusivas.</Text>
        </View>
      }
    </View>
  );
}

export default ScreenChallenges;