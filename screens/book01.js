import React from 'react';
import {StyleSheet, Image, ScrollView, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const CorujaLivro1 = require('../assets/Corujas-Livros/corujas-Livro1.png')

function Book01Screen({navigation}) {
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    text1:{
      marginLeft: 5,
      marginTop: 10,
      fontSize:25,
      color: '#dcdcdc'
    },
    text2:{
      alignSelf: 'center',
      fontSize:30,
      color: '#fff'
    },
    text3:{
      marginTop: 5,
      alignSelf: 'center',
      fontSize:24,
      color: '#dcdcdc'
    },
    text4:{
      alignSelf: 'center',
      fontSize:24,
      color: '#dcdcdc'
    },
    text5:{
      marginTop: 20,
      marginLeft: 20,
      fontSize:24,
      color: '#87cefa'
    },
    text6:{
      marginTop: 20,
      marginLeft:20,
      fontSize:24,
      color: '#fff'
    },
    text7:{
      marginTop: 10,
      marginLeft:10,
      fontSize:20,
      color: '#fff'
    },
    text8:{
      marginTop: 10,
      marginLeft:10,
      fontSize:20,
      color: '#d3d3d3',
    },
    imagCoruja1: {
      marginLeft: 15,
      alignSelf: 'center',
      height: 180,
      width: 180
    },
    container2: {
      backgroundColor: '#808080',
      width: '100%',
      height: 3,
    },
    container3: {
      flexDirection: 'row',
      marginTop: 20,
      marginLeft: 20,
      width: 200,
      height: 100,
      borderColor: '#d3d3d3',
      borderRadius: 20,
      borderWidth: 2,
    },
    container4: {
      flexDirection: 'row',
      marginLeft: 222,
      width: 200,
      height: 100,
      borderColor: '#d3d3d3',
      borderRadius: 20,
      borderWidth: 2,
    },
    container5: {
      flexDirection: 'row',
      marginLeft: 20,
      width: 170,
      height: 100,
      borderColor: '#d3d3d3',
      borderRadius: 20,
      borderWidth: 2,
    },
    container6: {
      flexDirection: 'row',
      marginTop: 20,
      marginLeft: 20,
      width: 170,
      height: 100,
      borderColor: '#d3d3d3',
      borderRadius: 20,
      borderWidth: 2,
    },
    scroll: {
      backgroundColor: '#696969',
      width: '100%',
    },
    icon1: {
      color: '#87cefa',
      fontSize: 30,
      marginTop: 30,
      marginLeft: 10,
    },
  });
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View>
          <Text style={styles.text1}> X </Text>
          <Image style={styles.imagCoruja1} source={CorujaLivro1} resizeMode= "stretch"/>
          <Text style={styles.text2}>Guia da Unidade 1</Text>
          <Text style={styles.text3}>Explore explicações de gramática e</Text>
          <Text style={styles.text4}>expressões importantes dessa</Text>
          <Text style={styles.text4}>unidade.</Text>
          <View style={styles.container2}/>
          <Text style={styles.text5}>EXPRESSÔES IMPORTANTES</Text>
          <Text style={styles.text6}>Faça pedido em um café</Text>
        </View>
        <View style={styles.container3}>
          <AntDesign name="sound" style={styles.icon1}/>
          <View>
            <Text style={styles.text7}>Tea or coffee?</Text>
            <Text style={styles.text8}>Chá ou café?</Text>
          </View>
        </View>
        <View style={styles.container4}>
          <AntDesign name="sound" style={styles.icon1}/>
          <View>
            <Text style={styles.text7}>Tea, please.</Text>
            <Text style={styles.text8}>Chá, por favor.</Text>
          </View>
        </View>
        <View style={styles.container5}>
          <AntDesign name="sound" style={styles.icon1}/>
          <View>
            <Text style={styles.text7}>With milk.</Text>
            <Text style={styles.text8}>Com leite</Text>
          </View>
        </View>
        <View style={styles.container6}>
          <AntDesign name="sound" style={styles.icon1}/>
          <View>
            <Text style={styles.text7}>Thank you!</Text>
            <Text style={styles.text8}>Obrigado!</Text>
          </View>
        </View>
        <View style={styles.container4}>
          <AntDesign name="sound" style={styles.icon1}/>
          <View>
            <Text style={styles.text7}>Yu're welcome.</Text>
            <Text style={styles.text8}>De nada.</Text>
          </View>
        </View>
        <View style={styles.container5}>
          <AntDesign name="sound" style={styles.icon1}/>
          <View>
            <Text style={styles.text7}>Goobye!</Text>
            <Text style={styles.text8}>Adeus!</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Book01Screen;