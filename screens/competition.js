import React from 'react';
import { Image, Text, StatusBar, View} from 'react-native';
import StyCompetition from './styless/styCompetition';
const Imagem01 = require('../assets/competition/Image01.jpg')
const Imagem02 = require('../assets/competition/Image02.jpg')
const Imagem03 = require('../assets/competition/Image03.jpg')
const Icon1 = require('../assets/competition/first-place.png')
const Icon2 = require('../assets/competition/second-place.png')
const Icon3 = require('../assets/competition/third-place.png')

function ScreenCompetition({navigation}) {
  
  return (
    <View style={StyCompetition.container}>
      <StatusBar animated={true} backgroundColor="#000000" barStyle="light-content" />
      <View style={StyCompetition.container1}>
        <View style={StyCompetition.container2}>
          <Image style={StyCompetition. containerImgeg02} source={Imagem02} resizeMode= "stretch"/>
        </View>
        <View style={StyCompetition.container3}>
          <Image style={StyCompetition. containerImgeg01} source={Imagem01} resizeMode= "stretch"/>
        </View>
        <View style={StyCompetition.container4}>
          <Image style={StyCompetition. containerImgeg03} source={Imagem03} resizeMode= "stretch"/>
        </View>
      </View> 
      <View style={StyCompetition.container5}>
        <Image style={StyCompetition. containerIcon02} source={Icon2} resizeMode= "stretch"/>
        <Image style={StyCompetition. containerIcon01} source={Icon1} resizeMode= "stretch"/>
        <Image style={StyCompetition. containerIcon03} source={Icon3} resizeMode= "stretch"/>
      </View>
      <View style={StyCompetition.container5}>
        <View style={StyCompetition.containerText02}>
          <Text style={StyCompetition.text1}>sofia</Text>
          <Text style={StyCompetition.text1}>531 XP</Text>
        </View>
        <View style={StyCompetition.containerText01}>
          <Text style={StyCompetition.text1}>Ash</Text>
          <Text style={StyCompetition.text1}>2546 XP</Text>
        </View>
        <View style={StyCompetition.containerText03}>
          <Text style={StyCompetition.text1}>Orli Chag..</Text>
          <Text style={StyCompetition.text1}>476 XP</Text>
        </View>
      </View>
      <View style={StyCompetition.container6}>
        <Text style={StyCompetition.text2}>Já temos os Resultados!</Text>
        <Text style={StyCompetition.text3}>Aqui estão os vencedores da</Text>
        <Text style={StyCompetition.text4}>última semana na Divisão</Text>
        <Text style={StyCompetition.text4}>Bronze.</Text>
      </View>
      <View style={StyCompetition.container7}>
        <Text style={StyCompetition.text5}>CONTINUAR</Text>
      </View>
    </View>
  );
}

export default ScreenCompetition;