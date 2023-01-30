import React from 'react';
import { Image, ScrollView, StatusBar, TouchableOpacity, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StyBook02 from './styless/styBook02';
const Imagem01 = require('../assets/books/book-02/Imagem1-Livro2.jpg.png')

function Book02Screen({navigation}) {

  function goBack() {
    navigation.navigate("Home")
  }
  
  return (
    <View style={StyBook02.container}>
      <StatusBar animated={true} backgroundColor="#222" barStyle="light-content" />
      <ScrollView style={StyBook02.scroll}>
        <View>
        <TouchableOpacity style={StyBook02.containerTouch1} onPress={goBack}> 
            <Text style={StyBook02.text1}> X </Text>
          </TouchableOpacity>
          <Image style={StyBook02.imag01} source={Imagem01} resizeMode= "stretch"/>
          <Text style={StyBook02.text2}>Guia da Unidade 2</Text>
          <Text style={StyBook02.text3}>Explore explicações de gramática e</Text>
          <Text style={StyBook02.text4}>expressões importantes dessa</Text>
          <Text style={StyBook02.text4}>unidade.</Text>
          <View style={StyBook02.container1}/>
          <Text style={StyBook02.text5}>EXPRESSÔES IMPORTANTES</Text>
          <Text style={StyBook02.text6}>Coverse sobre viajem</Text>
        </View>
        <View style={StyBook02.container2}>
          <AntDesign name="sound" style={StyBook02.icon1}/>
          <View>
            <Text style={StyBook02.text7}>I have a tchiket and a passaport.</Text>
            <Text style={StyBook02.text8}>Eu tenho uma passagem e um </Text>
            <Text style={StyBook02.text8}>passaporte.</Text>
          </View>
        </View>
        <View style={StyBook02.container3}>
          <AntDesign name="sound" style={StyBook02.icon1}/>
          <View>
            <Text style={StyBook02.text7}>Where is the train?</Text>
            <Text style={StyBook02.text8}>Aonde está o trem?</Text>
          </View>
        </View>
        <View style={StyBook02.container4}>
          <AntDesign name="sound" style={StyBook02.icon1}/>
          <View>
            <Text style={StyBook02.text7}>I need help, please.</Text>
            <Text style={StyBook02.text8}>Eu preciso de ajuda, por favor.</Text>
          </View>
        </View>
        <View style={StyBook02.container5}>
          <AntDesign name="sound" style={StyBook02.icon1}/>
          <View>
            <Text style={StyBook02.text7}>I have a reservation.</Text>
            <Text style={StyBook02.text8}> Eu tenho uma reserva.</Text>
          </View>
        </View>
        <View style={StyBook02.container6}>
          <AntDesign name="sound" style={StyBook02.icon1}/>
          <View>
            <Text style={StyBook02.text7}>The passport is in the hotel.</Text>
            <Text style={StyBook02.text8}>O passaporte está no hotel.</Text>
          </View>
        </View>
        <View style={StyBook02.container8}>
          <Text style={StyBook02.text5}>EXPLICAÇÃO</Text>
          <Text style={StyBook02.text6}>Sons em inglês</Text>
          <Text style={StyBook02.text9}>Apronúncia de ingulês pode aparecer um pouco</Text>
          <Text style={StyBook02.text13}>desafiadora no começo, mas muitos sons em</Text>
          <Text style={StyBook02.text13}>inglês são similares aos sons que já existem</Text>
          <Text style={StyBook02.text13}>em português!</Text>
          <View style={StyBook02.container10}>
            <View style={StyBook02.container9}>
              <Text style={StyBook02.text16}>water</Text>
              <AntDesign name="sound" style={StyBook02.icon2}/>
            </View>
            <View>
            <View style={StyBook02.container7}>
              <Text style={StyBook02.text11}>  w</Text>
              <Text style={StyBook02.text10}>ater, sand</Text>
              <Text style={StyBook02.text11}>w</Text>
              <Text style={StyBook02.text10}>ich, </Text>
              <Text style={StyBook02.text11}>w</Text>
              <Text style={StyBook02.text10}>here</Text>
            </View>
              <Text style={StyBook02.text18}>.........  ...............  ..........</Text>
            </View>
          </View>
          <View style={StyBook02.container7}>
            <Text style={StyBook02.text9}>Parecido com </Text>
            <Text style={StyBook02.text10}>u </Text>
            <Text style={StyBook02.text12}>em portugues (como em </Text>
            <Text style={StyBook02.text11}>u</Text>
            <Text style={StyBook02.text10}>au!</Text>
            <Text style={StyBook02.text12}>)</Text>
          </View>
          <Text style={StyBook02.text13}>mas mais suave.</Text>
          <View style={StyBook02.container10}>
            <View style={StyBook02.container9}>
              <Text style={StyBook02.text16}>hotel</Text>
              <AntDesign name="sound" style={StyBook02.icon2}/>
            </View>
            <View>
            <View style={StyBook02.container7}>
              <Text style={StyBook02.text11}>  h</Text>
              <Text style={StyBook02.text10}>otel, </Text>
              <Text style={StyBook02.text11}>h</Text>
              <Text style={StyBook02.text10}>ospitel, </Text>
              <Text style={StyBook02.text11}>h</Text>
              <Text style={StyBook02.text10}>ello</Text>
            </View>
              <Text style={StyBook02.text18}>........  .............  ........</Text>
            </View>
          </View>
          <View style={StyBook02.container7}>
            <Text style={StyBook02.text9}>Similas ao </Text>
            <Text style={StyBook02.text10}>r </Text>
            <Text style={StyBook02.text12}>do portugues (como em </Text>
            <Text style={StyBook02.text11}>R</Text>
            <Text style={StyBook02.text10}>io!</Text>
            <Text style={StyBook02.text12}>) mas</Text>
          </View>
          <Text style={StyBook02.text13}>mais suave.</Text>
          <View style={StyBook02.container10}>
            <View style={StyBook02.container9}>
              <Text style={StyBook02.text17}>resteurant</Text>
              <AntDesign name="sound" style={StyBook02.icon3}/>
            </View>
            <View>
            <View style={StyBook02.container7}>
              <Text style={StyBook02.text11}>  r</Text>
              <Text style={StyBook02.text10}>estau</Text>
              <Text style={StyBook02.text11}>r</Text>
              <Text style={StyBook02.text10}>ant, he</Text>
              <Text style={StyBook02.text11}>r</Text>
              <Text style={StyBook02.text10}>e, so</Text>
              <Text style={StyBook02.text11}>rr</Text>
              <Text style={StyBook02.text10}>y</Text>
            </View>
              <Text style={StyBook02.text18}>................. ........ ........</Text>
            </View>
          </View>
          <View style={StyBook02.container7}>
            <Text style={StyBook02.text9}>O </Text>
            <Text style={StyBook02.text10}>r </Text>
            <Text style={StyBook02.text12}>do inglês soa diferente do </Text>
            <Text style={StyBook02.text10}>r </Text>
            <Text style={StyBook02.text12}> em português</Text>
          </View>
          <Text style={StyBook02.text13}>porque ñão é formado na garganta, mas no</Text>
          <View style={StyBook02.container7}>
            <Text style={StyBook02.text13}>fundo da boca. Note ainda que </Text>
            <Text style={StyBook02.text15}>r </Text>
            <Text style={StyBook02.text14}>e </Text>
            <Text style={StyBook02.text15}>rr</Text>
            <Text style={StyBook02.text14}> têm</Text>
          </View>
          <Text style={StyBook02.text19}>exatamente o mesmo son em inglês.</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default Book02Screen;