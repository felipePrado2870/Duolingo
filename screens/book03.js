import React from 'react';
import { Image, ScrollView, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StyBook03 from './styless/styBook03';
const Imagem01 = require('../assets/books/book-03/Imagem1-Livro3.png')
const Imagem02 = require('../assets/books/book-03/Imagem2-Livro3.jpg');
const Imagem03 = require('../assets/books/book-03/Imagem3-Livro3.jpg');
const Imagem04 = require('../assets/books/book-03/Imagem4-Livro5.jpg');
const Imagem05 = require('../assets/books/book-03/Imagem5-Livro3.jpg');

function Book02Screen({navigation}) {
  
  return (
    <View style={StyBook03.container}>
      <ScrollView style={StyBook03.scroll}>
        <View>
          <Text style={StyBook03.text1}> X </Text>
          <Image style={StyBook03.imag01} source={Imagem01} resizeMode= "stretch"/>
          <Text style={StyBook03.text2}>Guia da Unidade 3</Text>
          <Text style={StyBook03.text3}>Explore explicações de gramática e</Text>
          <Text style={StyBook03.text4}>expressões importantes dessa</Text>
          <Text style={StyBook03.text4}>unidade.</Text>
          <View style={StyBook03.container1}/>
          <Text style={StyBook03.text5}>EXPRESSÔES IMPORTANTES</Text>
          <Text style={StyBook03.text6}>Peça em um restaurante</Text>
        </View>
        <View style={StyBook03.container2}>
          <AntDesign name="sound" style={StyBook03.icon1}/>
          <View>
            <Text style={StyBook03.text7}>A table for two.</Text>
            <Text style={StyBook03.text8}>Uma mesa para dois.</Text>
          </View>
        </View>
        <View style={StyBook03.container3}>
          <AntDesign name="sound" style={StyBook03.icon1}/>
          <View>
            <Text style={StyBook03.text7}>I need a manu, please.</Text>
            <Text style={StyBook03.text8}>E preciso de um cardápios, por favor.</Text>
          </View>
        </View>
        <View style={StyBook03.container4}>
          <AntDesign name="sound" style={StyBook03.icon1}/>
          <View>
            <Text style={StyBook03.text7}>Soup ou rice?</Text>
            <Text style={StyBook03.text8}>Sopa ou arroz?</Text>
          </View>
        </View>
        <View style={StyBook03.container5}>
          <AntDesign name="sound" style={StyBook03.icon1}/>
          <View>
            <Text style={StyBook03.text7}>Roce, please.</Text>
            <Text style={StyBook03.text8}>Arroz, por favor.</Text>
          </View>
        </View>
        <View style={StyBook03.container6}>
          <AntDesign name="sound" style={StyBook03.icon1}/>
          <View>
            <Text style={StyBook03.text7}>Excuse me, I need the check.</Text>
            <Text style={StyBook03.text8}>Com licença, eu preciso da conta.</Text>
          </View>
        </View>
        <View style={StyBook03.container8}>
          <Text style={StyBook03.text5}>EXPLICAÇÃO</Text>
          <Text style={StyBook03.text6}>Adjectives</Text>
          <View style={StyBook03.container7}>
            <Text style={StyBook03.text9}>Em português, nós normalmente dizemos </Text>
            <Text style={StyBook03.text10}>um </Text>
          </View>
          <View style={StyBook03.container7}>
            <Text style={StyBook03.text20}>restaurante </Text>
            <Text style={StyBook03.text21}>português</Text>
            <Text style={StyBook03.text14}>, mas, em inglês, se diz</Text>
            <View>
              <Text style={StyBook03.text15}>a</Text>
              <Text style={StyBook03.text18}>..</Text>
            </View>
          </View>
          <View style={StyBook03.container7}>
            <Text style={StyBook03.text11}>Portuguese</Text>
            <Text style={StyBook03.text15}>restaurant.</Text>
          </View>
          <Text style={StyBook03.text18}>   ......................................</Text>
          <View style={StyBook03.container7}>
            <Text style={StyBook03.text9}>Note que o</Text>
            <View>
              <Text style={StyBook03.text22}> adjetivo </Text>
              <Text style={StyBook03.text18}>.............</Text>
            </View>
            <Text style={StyBook03.text12}>normalmente vem </Text>
            <Text style={StyBook03.text10}>antes </Text>
            <Text style={StyBook03.text12}>do</Text>
          </View>
          <Text style={StyBook03.text13}>substantivo que ele descreve.</Text>
          <Text style={StyBook03.text18}>   ...................</Text>
          <View style={StyBook03.container10}>
            <AntDesign name="sound" style={StyBook03.icon2}/>
            <View style={StyBook03.container11}>
              <View style={StyBook03.container7}>
                <Text style={StyBook03.text10}> a </Text>
                <Text style={StyBook03.text22}>small </Text>
                <Text style={StyBook03.text10}>coffee</Text>
              </View>
              <Text style={StyBook03.text18}>.......................</Text>
              <Text style={StyBook03.text14}> um cafe pequeno</Text>
            </View>
            <Image style={StyBook03.container9} source={Imagem02} resizeMode= "stretch"/>


          
          </View>
          <View style={StyBook03.container7}>
            <Text style={StyBook03.text13}>O mesmo acontece quando um </Text>
            <Text style={StyBook03.text21}>substantivo</Text>
          </View>
          <View style={StyBook03.container7}>
            <Text style={StyBook03.text13}>descreve</Text>
            <Text style={StyBook03.text15}>outro susbstantivo.</Text>
          </View>
          <View style={StyBook03.container10}>
            <AntDesign name="sound" style={StyBook03.icon2}/>
            <View style={StyBook03.container11}>
              <View style={StyBook03.container7}>
                <Text style={StyBook03.text10}> a </Text>
                <Text style={StyBook03.text22}>meat </Text>
                <Text style={StyBook03.text10}>sandwich</Text>
              </View>
              <Text style={StyBook03.text18}>............................</Text>
              <Text style={StyBook03.text14}> um sanduíche de</Text>
              <Text style={StyBook03.text14}> carne</Text>
            </View> 
            <Image style={StyBook03.container9} source={Imagem03} resizeMode= "stretch"/>
          </View>
        
         
        
        </View>
      </ScrollView>
    </View>
  );
}

export default Book02Screen;