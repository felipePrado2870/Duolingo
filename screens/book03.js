import React from 'react';
import { Image, ScrollView, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StyBook03 from './styless/styBook03';
const Imagem01 = require('../assets/books/book-03/Imagem1-Livro3.png')
const Imagem02 = require('../assets/books/book-03/Imagem2-Livro3.jpg');
const Imagem03 = require('../assets/books/book-03/Imagem3-Livro3.jpg');
const Imagem04 = require('../assets/books/book-03/Imagem4-Livro3.jpg');
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
        <View>
          <Text style={StyBook03.text5}>EXPRESSÔES IMPORTANTES</Text>
          <Text style={StyBook03.text6}>Compartilhe contato</Text>
          <View style={StyBook03.container12}>
            <AntDesign name="sound" style={StyBook03.icon1}/>
            <View>
              <Text style={StyBook03.text7}>What is your last name?</Text>
              <Text style={StyBook03.text8}>Qual é o seu sobrenome?</Text>
            </View>
          </View>
          <View style={StyBook03.container13}>
            <AntDesign name="sound" style={StyBook03.icon1}/>
            <View>
              <Text style={StyBook03.text7}>My last name is Turner.</Text>
              <Text style={StyBook03.text8}>Meu sobrenome é Turner</Text>
            </View>
          </View>
          <View style={StyBook03.container12}>
            <AntDesign name="sound" style={StyBook03.icon1}/>
            <View>
              <Text style={StyBook03.text7}>This is my friend Maria.</Text>
              <Text style={StyBook03.text8}>Esta é minha amiga Maria.</Text>
            </View>
          </View>
          <View style={StyBook03.container14}>
            <AntDesign name="sound" style={StyBook03.icon1}/>
            <View>
              <Text style={StyBook03.text7}>I speak Portuguese and English.</Text>
              <Text style={StyBook03.text8}>Eu falo português e inglês.</Text>
            </View>
          </View>
          <View style={StyBook03.container15}>
            <AntDesign name="sound" style={StyBook03.icon1}/>
            <View>
              <Text style={StyBook03.text7}>Your English is good!</Text>
              <Text style={StyBook03.text8}>Seu inglês é bom!</Text>
            </View>
          </View>
          <View style={StyBook03.container16}>
            <AntDesign name="sound" style={StyBook03.icon1}/>
            <View>
              <Text style={StyBook03.text7}>See you later, Maria!</Text>
              <Text style={StyBook03.text8}>Até mais tarde, Maria!</Text>
            </View>
          </View>
        </View>
         
        <View style={StyBook03.container19}>
          <Text style={StyBook03.text5}>EXPLICAÇÃO</Text>
          <Text style={StyBook03.text6}>How are You?</Text>
          <View style={StyBook03.container7}>
            <Text style={StyBook03.text9}>Para perguntar </Text>
            <Text style={StyBook03.text10}>como você està? </Text>
            <Text style={StyBook03.text12}>ou </Text>
            <Text style={StyBook03.text10}>Como vai</Text>
          </View>
          <View style={StyBook03.container7}>
            <Text style={StyBook03.text20}>você? </Text>
            <Text style={StyBook03.text14}> em inglês, diga </Text>
            <View>
              <Text style={StyBook03.text15}>How are you?</Text>
              <Text style={StyBook03.text18}>......................</Text>
            </View>
          </View>
          <Image style={StyBook03.container17} source={Imagem04} resizeMode= 'contain' />
          <View style={StyBook03.container18}>
            <AntDesign name="sound" style={StyBook03.icon3}/>
            <View>
            <Text style={StyBook03.text7}>Hello, how are you?</Text>
            <Text style={StyBook03.text18}> .................................</Text>
            </View>
          </View>
          <Text style={StyBook03.text13}>Ola, como vai você?</Text>
          <View style={StyBook03.container18}>
            <AntDesign name="sound" style={StyBook03.icon3}/>
            <View>
            <Text style={StyBook03.text7}>I'm good, thanks!</Text>
            <Text style={StyBook03.text18}> .............................</Text>
            </View>
          </View>
          <Text style={StyBook03.text13}>Estou bem, obrigado!</Text>
          <Text style={StyBook03.text9}>Outra palavra que você vai ouvir bastante ao</Text> 
          <View style={StyBook03.container7}>
            <Text style={StyBook03.text13}>visitar novos lugares é</Text>
            <View>
              <Text style={StyBook03.text15}>welcome</Text>
              <Text style={StyBook03.text18}>...............</Text>
            </View>
            <Text style={StyBook03.text14}>, que sigifica</Text>
          </View>
          <View style={StyBook03.container7}>
            <Text style={StyBook03.text20}>Bem-vindo  </Text>
            <Text style={StyBook03.text14}>ou</Text>
            <Text style={StyBook03.text15}>bem-vinda.</Text>
          </View>
          <Image style={StyBook03.container17} source={Imagem05} resizeMode= 'contain'/>
          <View style={StyBook03.container18}>
            <AntDesign name="sound" style={StyBook03.icon3}/>
            <View>
            <Text style={StyBook03.text7}>welcome!</Text>
            <Text style={StyBook03.text18}> ......,,.........</Text>
            </View>
          </View>
          <Text style={StyBook03.text13}>Bem-vindo!</Text>
        </View> 
        
       
      </ScrollView>
    </View>
  );
}

export default Book02Screen;