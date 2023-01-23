import React from 'react';
import {Image, ScrollView, TouchableOpacity, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StyHome from './styless/styHome';
import Foundation from 'react-native-vector-icons/Foundation';
const FlagEUA = require('../assets/home/FlagEUA.png');
const Imagem01Book01 = require('../assets/home/corujas-book01.png')
const Imagem01Book02 = require('../assets/home/Imagem01-Book02.png')
const Imagem02Book02 = require('../assets/home/Imagem02-Book02.png')
const Imagem01Book03 = require('../assets/home/Imagem01-Book03.png')
const Imagem02Book03 = require('../assets/home/Imagem02-Book03.png')
const Imagem01Book04 = require('../assets/home/Imagem01-Book04.png')
const Imagem02Book04 = require('../assets/home/Imagem02-Book04.png')
const NextBook02 = require('../assets/home/next-Book02.png')
const NextBook03 = require('../assets/home/next-Book03.png')
const NextBook04 = require('../assets/home/next-Book04.png')
const Book = require('../assets/home/book.png')
const Gym = require('../assets/home/gym.png')
const Lock = require('../assets/home/lock.png')
const star = require('../assets/home/star.png')
const Trophy = require('../assets/home/trophy.png')
const Trunk = require('../assets/home/trunk.png')

function HomeScreen({navigation}) {
  
  function Book01() {
    navigation.navigate('Book01')
  }

  function Book02() {
    navigation.navigate('Book02')
  }

  function Book03() {
    navigation.navigate('Book03')
  }

  function Book04() {
    navigation.navigate('Book04')
  }

  return (
    <View style={StyHome.container}>
      <View style={StyHome.container1}>
        <View style={StyHome.containerFlag}>
          <TouchableOpacity onPress={() => {}}>
            <Image style={StyHome.imagFlag} source={FlagEUA} resizeMode= "stretch"/>
          </TouchableOpacity>
        </View>
        <View style={StyHome.containerFlag}>
          <TouchableOpacity style={StyHome.containerFlagTouch} onPress={() => {}}>
            <MaterialIcons name="local-fire-department" style={StyHome.icon2}/>
            <Text style={StyHome.text3}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={StyHome.containerFlag}>
          <TouchableOpacity style={StyHome.containerFlagTouch} onPress={() => {}}> 
            <MaterialCommunityIcons name="cards-diamond" style={StyHome.icon3}/>
            <Text style={StyHome.text4}>5630</Text>
          </TouchableOpacity> 
        </View>
        <View style={StyHome.containerFlag}>
          <TouchableOpacity style={StyHome.containerFlagTouch} onPress={() => {}}>
            <AntDesign name="heart" style={StyHome.icon4}/>
            <Text style={StyHome.text4}>5</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={StyHome.container2}/>
      <ScrollView style={StyHome.scroll}>
        <View style={StyHome.container3}>
          <View style={StyHome.view1}>
           <Text style={StyHome.text1}>Unidade 1</Text>
           <Text style={StyHome.text2}>Faça  pedidos  em  um  café,</Text>
           <Text style={StyHome.text2}>apresente-se</Text>
          </View>
          <View style={StyHome.view2}>
            <TouchableOpacity onPress={Book01}> 
              <MaterialCommunityIcons name="notebook-multiple" style={StyHome.icon1}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={StyHome.container4}>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag1}>
              <Image style={StyHome.icon6} source={star} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag3}>
              <Image style={StyHome.icon5} source={Lock} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
          <View style={StyHome.containerFlag2}>
            <View style={StyHome.containerFlag4}>
              <Image style={StyHome.icon5} source={Trunk} resizeMode= "stretch"/>
            </View>
            <View style={StyHome.containerFlag9}>
              <Image style={StyHome.imagCoruja1} source={Imagem01Book01} resizeMode= "stretch"/>
            </View>
          </View>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag3}>
              <Image style={StyHome.icon5} source={Book} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag7}>
              <Image style={StyHome.icon5} source={Trophy} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
        </View>
        <View style={StyHome.container5}>
          <View  style={StyHome.view1}>
           <Text style={StyHome.text1}>Unidade 2</Text>
           <Text style={StyHome.text2}>Converse sobre viagem</Text>
          </View>
          <View style={StyHome.view2}>
            <TouchableOpacity onPress={Book02}>
              <MaterialCommunityIcons name="notebook-multiple" style={StyHome.icon1}/>
            </TouchableOpacity>
          </View> 
        </View>
        <View style={StyHome.container6}>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag8}>
              <Image style={StyHome.icon6} source={NextBook02} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag6}>
              <Image style={StyHome.icon5} source={Lock} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
          <View style={StyHome.containerFlag2}>
            <View style={StyHome.containerFlag10}>
              <Image style={StyHome.imagCoruja2} source={Imagem01Book02} resizeMode= "stretch"/>
            </View>
            <View style={StyHome.containerFlag5}>
              <Image style={StyHome.icon5} source={Trunk} resizeMode= "stretch"/>
            </View>
          </View>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag6}>
              <Image style={StyHome.icon5} source={Gym} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={StyHome.containerFlag7}>
              <Image style={StyHome.icon5} source={Book} resizeMode= "stretch"/>
            </View> 
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag3}>
              <Image style={StyHome.icon5} source={Lock} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
          <View style={StyHome.containerFlag2}>
            <TouchableOpacity onPress={() => {}}> 
              <View style={StyHome.containerFlag4}>
                <Image style={StyHome.icon5} source={Lock} resizeMode= "stretch"/>
              </View>
            </TouchableOpacity>
            <View style={StyHome.containerFlag9}>
              <Image style={StyHome.imagCoruja3} source={Imagem02Book02} resizeMode= "stretch"/>
            </View>
          </View>
            <View style={StyHome.containerFlag3}>
              <Image style={StyHome.icon5} source={Trunk} resizeMode= "stretch"/>
            </View>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag7}>
              <Image style={StyHome.icon5} source={Book} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={StyHome.containerFlag7}>
              <Image style={StyHome.icon5} source={Trophy} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
        </View>
        <View style={StyHome.container3}>
          <View style={StyHome.view1}>
           <Text style={StyHome.text1}>Unidade 3</Text>
           <Text style={StyHome.text2}>Peça em um restaurante,</Text>
           <Text style={StyHome.text2}>compartilhe contato</Text>
          </View>
          <View style={StyHome.view2}>
            <TouchableOpacity onPress={Book03}> 
              <MaterialCommunityIcons name="notebook-multiple" style={StyHome.icon1}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={StyHome.container6}>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag1}>
              <Image style={StyHome.icon6} source={NextBook03} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag3}>
              <Image style={StyHome.icon5} source={Lock} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
          <View style={StyHome.containerFlag2}>
            <View style={StyHome.containerFlag4}>
              <Image style={StyHome.icon5} source={Trunk} resizeMode= "stretch"/>
            </View>
            <View style={StyHome.containerFlag13}>
              <Image style={StyHome.imagCoruja2} source={Imagem01Book03} resizeMode= "stretch"/>
            </View>
          </View>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag3}>
              <Image style={StyHome.icon5} source={Gym} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag7}>
              <Image style={StyHome.icon5} source={Book} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={StyHome.containerFlag6}>
              <Image style={StyHome.icon5} source={Lock} resizeMode= "stretch"/>
            </View> 
          </TouchableOpacity>
          <View style={StyHome.containerFlag2}>
            <View style={StyHome.containerFlag9}>
              <Image style={StyHome.imagCoruja1} source={Imagem02Book03} resizeMode= "stretch"/>
            </View>
            <TouchableOpacity onPress={() => {}}> 
              <View style={StyHome.containerFlag4}>
                <Image style={StyHome.icon5} source={Lock} resizeMode= "stretch"/>
              </View>
            </TouchableOpacity>
          </View>
            <View style={StyHome.containerFlag6}>
              <Image style={StyHome.icon5} source={Trunk} resizeMode= "stretch"/>
            </View>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag7}>
              <Image style={StyHome.icon5} source={Book} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag7}>
              <Image style={StyHome.icon5} source={Trophy} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
        </View>
        <View style={StyHome.container5}>
          <View  style={StyHome.view1}>
           <Text style={StyHome.text1}>Unidade 4</Text>
           <Text style={StyHome.text2}>Flae sobre a família</Text>
          </View>
          <View style={StyHome.view2}>
            <TouchableOpacity onPress={Book03}> 
              <MaterialCommunityIcons name="notebook-multiple" style={StyHome.icon1}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={StyHome.container6}>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag8}>
              <Image style={StyHome.icon6} source={NextBook04} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag6}>
              <Image style={StyHome.icon5} source={Lock} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
          <View style={StyHome.containerFlag2}>
            <View style={StyHome.containerFlag10}>
              <Image style={StyHome.imagCoruja2} source={Imagem01Book04} resizeMode= "stretch"/>
            </View>
            <View style={StyHome.containerFlag5}>
              <Image style={StyHome.icon5} source={Trunk} resizeMode= "stretch"/>
            </View>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <View style={StyHome.containerFlag6}>
              <Image style={StyHome.icon5} source={Gym} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag7}>
              <Image style={StyHome.icon5} source={Book} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag3}>
              <Image style={StyHome.icon5} source={Lock} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
          <View style={StyHome.containerFlag2}>
            <TouchableOpacity onPress={() => {}}>
              <View style={StyHome.containerFlag4}>
                <Image style={StyHome.icon5} source={Lock} resizeMode= "stretch"/>
              </View>
            </TouchableOpacity>
            <View style={StyHome.containerFlag9}>
              <Image style={StyHome.imagCoruja2} source={Imagem02Book04} resizeMode= "stretch"/>
            </View>
          </View>
            <View style={StyHome.containerFlag3}>
              <Image style={StyHome.icon5} source={Trunk} resizeMode= "stretch"/>
            </View> 
          <TouchableOpacity onPress={() => {}}>
            <View style={StyHome.containerFlag7}>
              <Image style={StyHome.icon5} source={Book} resizeMode= "stretch"/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={StyHome.containerFlag7}>
              <Image style={StyHome.icon5} source={Trophy} resizeMode= "stretch"/>
            </View> 
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;