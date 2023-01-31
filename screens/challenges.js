import React, {useState}  from 'react';
import {StyleSheet, TouchableOpacity, ScrollView, Image, StatusBar, Text, View} from 'react-native';
import StyChallenges from './styless/styChallenges';
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

  });
  return (
    <View style={StyChallenges.container}>
      <StatusBar animated={true} backgroundColor="#000000" barStyle="light-content" />
      <Text style={StyChallenges.text}>Desafios</Text>
      <View style={StyChallenges.view1}>
        <TouchableOpacity style={StyChallenges.view2} onPress={() => setPage(1)}>
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
      {page === 1 && <View style={StyChallenges.container1}>
          <ScrollView style={StyChallenges.scroll}>
            <View style={StyChallenges.view3}>
              <View style={StyChallenges.view4}>
                <Text style={StyChallenges.text3}>Missôes do dia</Text>
              </View>
              <View style={StyChallenges.view5}>
                <Image style={StyChallenges.imagem01} source={Imagem01} resizeMode= "stretch"/> 
                <Text style={StyChallenges.text4}>7 horas</Text>
              </View>
            </View>
            <View style={StyChallenges.container2}>
              <View style={StyChallenges.container3}>
                <Image style={StyChallenges.imagem02} source={Imagem02} resizeMode= "stretch"/> 
                <View>
                  <View style={StyChallenges.view9}>
                    <Text style={StyChallenges.text5}>Ganhe 10Xp</Text>
                  </View>
                  <View style={StyChallenges.view11}>
                    <View style={StyChallenges.view8}/>
                    <Image style={StyChallenges.imagem04} source={Imagem05} resizeMode= "stretch"/> 
                    <Text style={StyChallenges.text6}>0/10</Text>
                  </View>
                </View>
              </View>
              <View style={StyChallenges.view6}/>
              <View style={StyChallenges.container4}>
                <Image style={StyChallenges.imagem02} source={Imagem03} resizeMode= "stretch"/> 
                <View>
                  <View style={StyChallenges.view10}>
                    <Text style={StyChallenges.text5}>Consiga 90% ou mais de</Text>
                    <Text style={StyChallenges.text5}>acertos em 2 lições</Text>
                  </View>
                  <View style={StyChallenges.view11}>
                    <View style={StyChallenges.view8}/>
                    <Image style={StyChallenges.imagem04} source={Imagem05} resizeMode= "stretch"/> 
                    <Text style={StyChallenges.text6}>0/2</Text>
                  </View>
                </View>
              </View>
              <View style={StyChallenges.view6}/>
              <View style={StyChallenges.container4}>
                <View style={StyChallenges.view7}>
                  <Image style={StyChallenges.imagem03} source={Imagem04} resizeMode= "stretch"/> 
                </View>
                <View>
                  <View style={StyChallenges.view10}>
                    <Text style={StyChallenges.text5}>Faça 7 exercícios de</Text>
                    <Text style={StyChallenges.text5}>escuta</Text>
                  </View>
                  <View style={StyChallenges.view11}>
                    <View style={StyChallenges.view8}/>
                    <Image style={StyChallenges.imagem04} source={Imagem05} resizeMode= "stretch"/> 
                    <Text style={StyChallenges.text6}>0/7</Text>
                  </View>
                </View>
              </View>
            </View> 
            <View style={StyChallenges.container5}>
              <View style={StyChallenges.view11}>
                <View style={StyChallenges.container6}>
                  <View style={StyChallenges.container7}>
                    <Text style={StyChallenges.text7}>JANEIRO</Text>
                  </View>
                  <Text style={StyChallenges.text8}>A Festa de Ano</Text>
                  <Text style={StyChallenges.text8}>Novo do Duo</Text>
                  <View style={StyChallenges.view11}>
                    <Text style={StyChallenges.text9}>Ganha </Text>
                    <Text style={StyChallenges.text10}>393 XP </Text>
                    <Text style={StyChallenges.text9}>hoje</Text>
                  </View>
                  <Text style={StyChallenges.text11}>pra ficar no páreo!</Text>
                </View>
                <Image style={StyChallenges.imagem05} source={Imagem06} resizeMode= "stretch"/> 
              </View>
              <View style={StyChallenges.view6}/>
              <View style={StyChallenges.view11}>
                <View style={StyChallenges.view12}/>
                <Image style={StyChallenges.imagem06} source={Imagem07} resizeMode= "stretch"/> 
              </View>
              <View style={StyChallenges.view11}>
                <View style={StyChallenges.container8} >
                <Text style={StyChallenges.text12}>0 / 1000 XP</Text>
                </View>
                <Text style={StyChallenges.text10}>Falta 2 dias </Text>
              </View>
              <View style={StyChallenges.view6}/>
              <Text style={StyChallenges.text13}>Ver desafio</Text>
            </View>
          </ScrollView> 
        </View>
      }
      {page === 2 && <View style={StyChallenges.container1}>
          <Image style={StyChallenges.imagem07} source={Imagem08} resizeMode= "stretch"/> 
          <Text style={StyChallenges.text14}>Ganhe a sua primeira</Text>
          <Text style={StyChallenges.text14}>medalha!</Text>
          <Text style={StyChallenges.text15}>Complete o desafio de mês pra</Text>
          <Text style={StyChallenges.text16}>ganhar medalhas exclusivas.</Text>
        </View>
      }
    </View>
  );
}

export default ScreenChallenges;