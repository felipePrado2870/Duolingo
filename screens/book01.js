  import React from 'react';
import { Image, ScrollView, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StyBook01 from './styless/styBook01';
const CorujaLivro1 = require('../assets/books/book-01/corujas-Livro1.png')
const Imagem01 = require('../assets/books/book-01/Imagem1-Livro1.jpg');
const Imagem02 = require('../assets/books/book-01/Imagem2-Livro1.jpg');
const Imagem03 = require('../assets/books/book-01/Imagem3-Livro1.jpg');

function Book01Screen({navigation}) {

  return (
    <View style={StyBook01.container}>
      <ScrollView style={StyBook01.scroll}>
        <View>
          <Text style={StyBook01.text1}> X </Text>
          <Image style={StyBook01.imagCoruja1} source={CorujaLivro1} resizeMode= "stretch"/>
          <Text style={StyBook01.text2}>Guia da Unidade 1</Text>
          <Text style={StyBook01.text3}>Explore explicações de gramática e</Text>
          <Text style={StyBook01.text4}>expressões importantes dessa</Text>
          <Text style={StyBook01.text4}>unidade.</Text>
          <View style={StyBook01.container2}/>
          <Text style={StyBook01.text5}>EXPRESSÔES IMPORTANTES</Text>
          <Text style={StyBook01.text6}>Faça pedido em um café</Text>
        </View>
        <View style={StyBook01.container3}>
          <AntDesign name="sound" style={StyBook01.icon1}/>
          <View>
            <Text style={StyBook01.text7}>Tea or coffee?</Text>
            <Text style={StyBook01.text8}>Chá ou café?</Text>
          </View>
        </View>
        <View style={StyBook01.container4}>
          <AntDesign name="sound" style={StyBook01.icon1}/>
          <View>
            <Text style={StyBook01.text7}>Tea, please.</Text>
            <Text style={StyBook01.text8}>Chá, por favor.</Text>
          </View>
        </View>
        <View style={StyBook01.container5}>
          <AntDesign name="sound" style={StyBook01.icon1}/>
          <View>
            <Text style={StyBook01.text7}>With milk.</Text>
            <Text style={StyBook01.text8}>Com leite</Text>
          </View>
        </View>
        <View style={StyBook01.container6}>
          <AntDesign name="sound" style={StyBook01.icon1}/>
          <View>
            <Text style={StyBook01.text7}>Thank you!</Text>
            <Text style={StyBook01.text8}>Obrigado!</Text>
          </View>
        </View>
        <View style={StyBook01.container4}>
          <AntDesign name="sound" style={StyBook01.icon1}/>
          <View>
            <Text style={StyBook01.text7}>Yu're welcome.</Text>
            <Text style={StyBook01.text8}>De nada.</Text>
          </View>
        </View>
        <View style={StyBook01.container5}>
          <AntDesign name="sound" style={StyBook01.icon1}/>
          <View>
            <Text style={StyBook01.text7}>Goobye!</Text>
            <Text style={StyBook01.text8}>Adeus!</Text>
          </View>
        </View>
        <View style={StyBook01.container8}>
          <Text style={StyBook01.text5}>EXPLICAÇÃO</Text>
          <Text style={StyBook01.text6}>Ser ou não ser?</Text>
          <View style={StyBook01.container7}>
            <Text style={StyBook01.text9}>Em português, nós dizemos</Text>
            <Text style={StyBook01.text10}>eu fal</Text>
            <Text style={StyBook01.text11}>o</Text>
            <Text style={StyBook01.text12}>,</Text>
            <Text style={StyBook01.text10}>voce fal</Text>
            <Text style={StyBook01.text11}>a</Text>
            <Text style={StyBook01.text12}>,</Text>
          </View>
          <View style={StyBook01.container7}>
            <Text style={StyBook01.text13}>nós fal</Text>
            <Text style={StyBook01.text15}>amos</Text>
            <Text style={StyBook01.text17}>, etc., mas, em inglês, as</Text>
          </View>
          <View style={StyBook01.container7}>
            <Text style={StyBook01.text16}>terminações dos</Text>
            <View>
              <Text style={StyBook01.text19}>verbos </Text>
              <Text style={StyBook01.text14}>............</Text>
            </View>
            <Text style={StyBook01.text19}>não mudam tanto.</Text>
          </View>
          <View style={StyBook01.container7}>
            <Text style={StyBook01.text9}>Uma exceção é o verbo</Text>
            <View>
              <Text style={StyBook01.text10}>to be</Text>
              <Text style={StyBook01.text14}>.........</Text>
            </View>
            <Text style={StyBook01.text12}>, que signica</Text>
          </View>
          <View style={StyBook01.container7}>
            <Text style={StyBook01.text16}>tanto</Text>
            <Text style={StyBook01.text18}>ser</Text>
            <Text style={StyBook01.text19}>como</Text>
            <Text style={StyBook01.text18}>estar</Text>
            <Text style={StyBook01.text20}>.</Text>
          </View>
          <View style={StyBook01.container9}>
            <View style={StyBook01.container7}>
              <View  style={StyBook01.container10}>
                <Text style={StyBook01.text21}>sujeito</Text>
                <Text style={StyBook01.text22}>............</Text>
              </View>
              <View style={StyBook01.container11}/>
              <View  style={StyBook01.container10}>
                <Text style={StyBook01.text21}>verbo (to be)</Text>
                <Text style={StyBook01.text22}>.....................</Text>
              </View>
            </View>
            <View style={StyBook01.container12}/>
            <View style={StyBook01.container7}>
              <View  style={StyBook01.container13}>
                <Text style={StyBook01.text21}>I</Text>
                <Text style={StyBook01.text22}>..</Text>
                <Text style={StyBook01.text24}>eu</Text>
              </View>
              <View style={StyBook01.container11}/>
              <View  style={StyBook01.container13}>
                <Text style={StyBook01.text23}>am</Text>
                <Text style={StyBook01.text22}>......</Text>
                <Text style={StyBook01.text24}>sou / estou</Text>
              </View>
            </View>
            <View style={StyBook01.container12}/>
            <View style={StyBook01.container7}>
              <View  style={StyBook01.container14}>
                <Text style={StyBook01.text21}>you</Text>
                <Text style={StyBook01.text22}>.......</Text>
                <Text style={StyBook01.text24}>tu</Text>
                <Text style={StyBook01.text24}>você</Text>
              </View>
              <View style={StyBook01.container11}/>
              <View  style={StyBook01.container14}>
                <Text style={StyBook01.text23}>are</Text>
                <Text style={StyBook01.text22}>......</Text>
                <Text style={StyBook01.text24}>és / estás</Text>
                <Text style={StyBook01.text24}>é / está</Text>
              </View>
            </View>
            <View style={StyBook01.container12}/>
            <View style={StyBook01.container7}>
              <View  style={StyBook01.container13}>
                <Text style={StyBook01.text21}>he</Text>
                <Text style={StyBook01.text22}>.....</Text>
                <Text style={StyBook01.text24}>ele</Text>
              </View>
              <View style={StyBook01.container11}/>
              <View  style={StyBook01.container13}>
                <Text style={StyBook01.text23}>is</Text>
                <Text style={StyBook01.text22}>....</Text>
                <Text style={StyBook01.text24}>é / está</Text>
              </View>
            </View>
            <View style={StyBook01.container12}/>
            <View style={StyBook01.container7}>
              <View  style={StyBook01.container13}>
                <Text style={StyBook01.text21}>she</Text>
                <Text style={StyBook01.text22}>.......</Text>
                <Text style={StyBook01.text24}>ela</Text>
              </View>
              <View style={StyBook01.container15}/>
              <View  style={StyBook01.container13}>
                <Text style={StyBook01.text23}>is</Text>
                <Text style={StyBook01.text22}>....</Text>
                <Text style={StyBook01.text24}>é / está</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={StyBook01.text25}>Mesmo que, em português, possamos dizer</Text>
            <View style={StyBook01.container7}>
              <Text style={StyBook01.text16}>tanto</Text>
              <Text style={StyBook01.text18}>Eu sou um menimo</Text>
              <Text style={StyBook01.text19}>como apenas</Text>
              <Text style={StyBook01.text18}>Sou um</Text>
            </View>
            <View style={StyBook01.container7}>
              <Text style={StyBook01.text13}>menino</Text>
              <Text style={StyBook01.text17}>,</Text>
              <Text style={StyBook01.text19}>em inglês, palavras como</Text>
              <Text style={StyBook01.text18}>eu</Text>
              <Text style={StyBook01.text19}>e</Text>
              <Text style={StyBook01.text18}>você</Text>
            </View>
            <Text style={StyBook01.text16}>são sempre necessárias.</Text>
          </View>
          <Image style={StyBook01.imag01} source={Imagem01} resizeMode= "stretch"/>
          <View style={StyBook01.container7}>
            <AntDesign name="sound" style={StyBook01.icon2}/>
            <Text style={StyBook01.text11}>I</Text>
            <Text style={StyBook01.text10}>am a boy. </Text>
            <Text style={StyBook01.text11}>You</Text>
            <Text style={StyBook01.text10}>are a girl.</Text>
          </View>
          <View style={StyBook01.container7}>
            <Text style={StyBook01.text28}>...................</Text>
            <Text style={StyBook01.text14}>.......................</Text>
          </View>
          <View style={StyBook01.container7}>
            <Text style={StyBook01.text26}>Eu</Text>
            <Text style={StyBook01.text19}>sou um menino.</Text>
            <Text style={StyBook01.text27}>Você</Text>
            <Text style={StyBook01.text19}>é uma menina.</Text>
          </View>
          <View style={StyBook01.container16}/>
          <View style={StyBook01.container17}>
            <Text style={StyBook01.text5}>EXPLICAÇÃO</Text>
            <Text style={StyBook01.text6}>Ah, não!</Text>
            <View style={StyBook01.container7}>
              <Text style={StyBook01.text9}>Para dizer</Text>
              <Text style={StyBook01.text10}>eu </Text>
              <Text style={StyBook01.text11}>nâo </Text>
              <Text style={StyBook01.text12}>ou</Text>
              <Text style={StyBook01.text10}>você </Text>
              <Text style={StyBook01.text11}>não</Text>
              <Text style={StyBook01.text10}>é </Text>
              <Text style={StyBook01.text12}>em inglês,</Text>
            </View>
            <View style={StyBook01.container7}>
              <Text style={StyBook01.text16}>adicione</Text>
              <View>
                <Text style={StyBook01.text15}> not </Text>
                <Text style={StyBook01.text14}>.....</Text>
              </View>
              <Text style={StyBook01.text17}>depois do</Text>
              <View>
                <Text style={StyBook01.text17}> verbo!</Text>
                <Text style={StyBook01.text14}>.........</Text>
              </View>
            </View>
            <Image style={StyBook01.imag01} source={Imagem02} resizeMode= "stretch"/>
            <View style={StyBook01.container7}>
              <AntDesign name="sound" style={StyBook01.icon2}/>
              <View>
                <Text style={StyBook01.text10}>You are Stephen. </Text>
                <Text style={StyBook01.text14}>...........................</Text>
              </View>
            </View>
            <Text style={StyBook01.text26}>Você é o Stephen.</Text>
            <Image style={StyBook01.imag01} source={Imagem03} resizeMode= "stretch"/>
            <View style={StyBook01.container7}>
              <AntDesign name="sound" style={StyBook01.icon2}/>
              <Text style={StyBook01.text10}>You are </Text>
              <Text style={StyBook01.text11}>not</Text>
              <Text style={StyBook01.text10}>Stephen!</Text>
            </View>
            <View style={StyBook01.container7}>
              <Text style={StyBook01.text28}>   .................................</Text>
            </View>
            <View style={StyBook01.container7}>
              <Text style={StyBook01.text26}>Você</Text>
              <Text style={StyBook01.text19}>não</Text>
              <Text style={StyBook01.text27}>é o Stephen!</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Book01Screen;