import React from 'react';
import { Image, ScrollView, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StyBook04 from './styless/styBook04';
const Imagem01 = require('../assets/books/book-04/Imagem1-Livro4.png');

function Book04Screen({navigation}) {

  return (
    <View style={StyBook04.container}>
      <ScrollView style={StyBook04.scroll}>
        <View>
          <Text style={StyBook04.text1}> X </Text>
          <Image style={StyBook04. imag01} source={Imagem01} resizeMode= "stretch"/>
          <Text style={StyBook04.text2}>Guia da Unidade 4</Text>
          <Text style={StyBook04.text3}>Explore explicações de gramática e</Text>
          <Text style={StyBook04.text4}>expressões importantes dessa</Text>
          <Text style={StyBook04.text4}>unidade.</Text>
          <View style={StyBook04.container2}/>
          <Text style={StyBook04.text5}>EXPRESSÔES IMPORTANTES</Text>
          <Text style={StyBook04.text6}>Fale sobre a família</Text>
        </View>
        <View style={StyBook04.container3}>
          <AntDesign name="sound" style={StyBook04.icon1}/>
          <View>
            <Text style={StyBook04.text7}>My family is small.</Text>
            <Text style={StyBook04.text8}>Minha família é pequena.</Text>
          </View>
        </View>
        <View style={StyBook04.container4}>
          <AntDesign name="sound" style={StyBook04.icon1}/>
          <View>
            <Text style={StyBook04.text7}>I live with my parents and my brother.</Text>
            <Text style={StyBook04.text8}>Eu mro com meus pais e meu irmão.</Text>
          </View>
        </View>
        <View style={StyBook04.container5}>
          <AntDesign name="sound" style={StyBook04.icon1}/>
          <View>
            <Text style={StyBook04.text7}>He has a cat and i have a dog.</Text>
            <Text style={StyBook04.text8}>Ele tem um gato, e eu tenho um</Text>
            <Text style={StyBook04.text8}>cachorro.</Text>
          </View>
        </View>
        <View style={StyBook04.container6}>
          <AntDesign name="sound" style={StyBook04.icon1}/>
          <View>
            <Text style={StyBook04.text7}>You have three brothers, right?</Text>
            <Text style={StyBook04.text8}>Você tem Três irmãos, certo?</Text>
          </View>
        </View>
        <View style={StyBook04.container16}>
          <AntDesign name="sound" style={StyBook04.icon1}/>
          <View>
            <Text style={StyBook04.text7}>I have four sisters.</Text>
            <Text style={StyBook04.text8}>Eu tenho quatro irmâs.</Text>
          </View>
        </View>
        <View style={StyBook04.container8}>
          <Text style={StyBook04.text5}>EXPLICAÇÃO</Text>
          <Text style={StyBook04.text6}>You, you, and you</Text>
          <View style={StyBook04.container7}>
            <Text style={StyBook04.text9}>Em português, nós usamos</Text>
            <Text style={StyBook04.text10}>tu</Text>
            <Text style={StyBook04.text11}>,</Text>
            <Text style={StyBook04.text10}>voce</Text>
            <Text style={StyBook04.text11}>, e</Text>
            <Text style={StyBook04.text10}>voces</Text>
            <Text style={StyBook04.text11}>,</Text>
          </View>
          <Text style={StyBook04.text13}>mas, em inglês, para todas essas palavras você</Text>
          <View style={StyBook04.container7}>
            <Text style={StyBook04.text13}>só precisa usar</Text>
            <View>
              <Text style={StyBook04.text15}>you</Text>
              <Text style={StyBook04.text12}>......</Text>
            </View>
            <Text style={StyBook04.text14}>.</Text>
          </View>
          <View style={StyBook04.container7}>
            <Text style={StyBook04.text9}>Da mesma forma, para</Text>
            <Text style={StyBook04.text10}>eles </Text>
            <Text style={StyBook04.text11}>ou</Text>
            <Text style={StyBook04.text10}>elas</Text>
            <Text style={StyBook04.text11}>, você só</Text>
          </View>
          
          <View style={StyBook04.container7}>
            <Text style={StyBook04.text13}>precisa usar</Text>
            <View>
              <Text style={StyBook04.text15}>they</Text>
              <Text style={StyBook04.text12}>......</Text>
            </View>
            <Text style={StyBook04.text14}>.</Text>
          </View>
          <View style={StyBook04.container9}>
            <View style={StyBook04.container7}>
              <View  style={StyBook04.container10}>
                <Text style={StyBook04.text16}>sujeito</Text>
                <Text style={StyBook04.text17}>............</Text>
              </View>
              <View style={StyBook04.container11}/>
              <View  style={StyBook04.container10}>
                <Text style={StyBook04.text16}>verbo (to have)</Text>
                <Text style={StyBook04.text17}>.........  .............</Text>
              </View>
            </View>
            <View style={StyBook04.container12}/>
            <View style={StyBook04.container7}>
              <View  style={StyBook04.container13}>
                <Text style={StyBook04.text16}>I</Text>
                <Text style={StyBook04.text17}>..</Text>
                <Text style={StyBook04.text19}>eu</Text>
              </View>
              <View style={StyBook04.container11}/>
              <View  style={StyBook04.container13}>
                <Text style={StyBook04.text16}>have</Text>
                <Text style={StyBook04.text17}>........</Text>
                <Text style={StyBook04.text19}>tenho</Text>
              </View>
            </View>
            <View style={StyBook04.container12}/>
            <View style={StyBook04.container7}>
              <View  style={StyBook04.container14}>
                <Text style={StyBook04.text16}>you</Text>
                <Text style={StyBook04.text17}>......</Text>
                <Text style={StyBook04.text19}>tu</Text>
                <Text style={StyBook04.text19}>você</Text>
                <Text style={StyBook04.text19}>vocês</Text>
              </View>
              <View style={StyBook04.container11}/>
              <View  style={StyBook04.container14}>
                <Text style={StyBook04.text16}>have</Text>
                <Text style={StyBook04.text17}>........</Text>
                <Text style={StyBook04.text19}>tens</Text>
                <Text style={StyBook04.text19}>tem</Text>
                <Text style={StyBook04.text19}>têm</Text>
              </View>
            </View>
            <View style={StyBook04.container12}/>
            <View style={StyBook04.container7}>
              <View  style={StyBook04.container13}>
                <Text style={StyBook04.text16}>he / She</Text>
                <Text style={StyBook04.text17}>....    ......</Text>
                <Text style={StyBook04.text19}>ele / ela</Text>
              </View>
              <View style={StyBook04.container11}/>
              <View  style={StyBook04.container13}>
                <View style={StyBook04.container7}>
                  <Text style={StyBook04.text16}>ha</Text>
                  <Text style={StyBook04.text18}>s</Text>
                </View>
                <Text style={StyBook04.text17}>......</Text>
                <Text style={StyBook04.text19}>tem</Text>
              </View>
            </View>
            <View style={StyBook04.container12}/>
            <View style={StyBook04.container7}>
              <View  style={StyBook04.container13}>
                <Text style={StyBook04.text16}>they</Text>
                <Text style={StyBook04.text17}>......</Text>
                <Text style={StyBook04.text19}>eles / elas</Text>
              </View>
              <View style={StyBook04.container15}/>
              <View  style={StyBook04.container13}>
                <Text style={StyBook04.text16}>have</Text>
                <Text style={StyBook04.text17}>......</Text>
                <Text style={StyBook04.text19}>têm</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={StyBook04.container7}>
              <Text style={StyBook04.text20}>Note que os</Text>
              <View>
                <Text style={StyBook04.text11}> verbos </Text>
                <Text style={StyBook04.text12}>...........</Text>
              </View>
              <Text style={StyBook04.text11}>em inglês mudam</Text>
            </View>
            <Text style={StyBook04.text13}>dependendo da pessoa, mas não tanto como</Text> 
            <Text style={StyBook04.text13}>em português.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Book04Screen;