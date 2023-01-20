import React from 'react';
import {Image, ScrollView, TouchableOpacity, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StyHome from './styless/styHome';
import Foundation from 'react-native-vector-icons/Foundation';
const FlagEUA = require('../assets/FlagEUA.png');
const Coruja1 = require('../assets/coruja/doulingo-Coruja1.png')
const Coruja2 = require('../assets/coruja/doulingo-Coruja2.png')
const Coruja3 = require('../assets/coruja/doulingo-Coruja3.png')
const Coruja4 = require('../assets/coruja/doulingo-Coruja4.png')
const Coruja5 = require('../assets/coruja/doulingo-Coruja5.png')
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
              <AntDesign name="star" style={StyHome.icon6}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag3}>
              <FontAwesome name="lock" style={StyHome.icon5}/>
            </View>
          </TouchableOpacity>
          <View style={StyHome.containerFlag2}>
            <View style={StyHome.containerFlag4}>
             <MaterialCommunityIcons name="treasure-chest" style={StyHome.icon5}/>
            </View>
            <View style={StyHome.containerFlag9}>
              <Image style={StyHome.imagCoruja1} source={Coruja1} resizeMode= "stretch"/>
            </View>
          </View>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag3}>
              <MaterialIcons name="menu-book" style={StyHome.icon5}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag7}>
              <MaterialCommunityIcons name="trophy" style={StyHome.icon5}/>
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
              <Foundation name="next" style={StyHome.icon6}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag6}>
              <FontAwesome name="lock" style={StyHome.icon5}/>
            </View>
          </TouchableOpacity>
          <View style={StyHome.containerFlag2}>
            <View style={StyHome.containerFlag10}>
              <Image style={StyHome.imagCoruja2} source={Coruja5} resizeMode= "stretch"/>
            </View>
            <View style={StyHome.containerFlag5}>
             <MaterialCommunityIcons name="treasure-chest" style={StyHome.icon5}/>
            </View>
          </View>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag6}>
              <MaterialCommunityIcons name="cards-diamond" style={StyHome.icon5}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={StyHome.containerFlag7}>
              <MaterialIcons name="menu-book" style={StyHome.icon5}/>
            </View> 
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag3}>
              <FontAwesome name="lock" style={StyHome.icon5}/>
            </View>
          </TouchableOpacity>
          <View style={StyHome.containerFlag2}>
            <View style={StyHome.containerFlag4}>
             <FontAwesome name="lock" style={StyHome.icon5}/>
            </View>
            <View style={StyHome.containerFlag9}>
              <Image style={StyHome.imagCoruja3} source={Coruja3} resizeMode= "stretch"/>
            </View>
          </View>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag3}>
              <MaterialCommunityIcons name="treasure-chest" style={StyHome.icon5}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag7}>
              <MaterialIcons name="menu-book" style={StyHome.icon5}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={StyHome.containerFlag7}>
              <MaterialCommunityIcons name="trophy" style={StyHome.icon5}/>
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
            <View style={StyHome.containerFlag11}>
              <Foundation name="next" style={StyHome.icon6}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag3}>
              <FontAwesome name="lock" style={StyHome.icon5}/>
            </View>
          </TouchableOpacity>
          <View style={StyHome.containerFlag2}>
            <View style={StyHome.containerFlag4}>
             <MaterialCommunityIcons name="treasure-chest" style={StyHome.icon5}/>
            </View>
            <View style={StyHome.containerFlag13}>
              <Image style={StyHome.imagCoruja2} source={Coruja2} resizeMode= "stretch"/>
            </View>
          </View>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag3}>
              <MaterialCommunityIcons name="cards-diamond" style={StyHome.icon5}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag7}>
              <MaterialIcons name="menu-book" style={StyHome.icon5}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={StyHome.containerFlag6}>
              <FontAwesome name="lock" style={StyHome.icon5}/>
            </View> 
          </TouchableOpacity>
          <View style={StyHome.containerFlag2}>
            <View style={StyHome.containerFlag9}>
              <Image style={StyHome.imagCoruja1} source={Coruja1} resizeMode= "stretch"/>
            </View>
            <View style={StyHome.containerFlag4}>
             <FontAwesome name="lock" style={StyHome.icon5}/>
            </View>
          </View>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag6}>
              <MaterialCommunityIcons name="treasure-chest" style={StyHome.icon5}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag7}>
              <MaterialIcons name="menu-book" style={StyHome.icon5}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag7}>
              <MaterialCommunityIcons name="trophy" style={StyHome.icon5}/>
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
            <View style={StyHome.containerFlag12}>
              <Foundation name="next" style={StyHome.icon6}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag6}>
              <FontAwesome name="lock" style={StyHome.icon5}/>
            </View>
          </TouchableOpacity>
          <View style={StyHome.containerFlag2}>
            <View style={StyHome.containerFlag10}>
              <Image style={StyHome.imagCoruja2} source={Coruja4} resizeMode= "stretch"/>
            </View>
            <View style={StyHome.containerFlag5}>
              <MaterialCommunityIcons name="treasure-chest" style={StyHome.icon5}/>
            </View>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <View style={StyHome.containerFlag6}>
              <MaterialCommunityIcons name="cards-diamond" style={StyHome.icon5}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag7}>
              <MaterialIcons name="menu-book" style={StyHome.icon5}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}> 
            <View style={StyHome.containerFlag3}>
              <FontAwesome name="lock" style={StyHome.icon5}/>
            </View>
          </TouchableOpacity>
          <View style={StyHome.containerFlag2}>
            <View style={StyHome.containerFlag4}>
             <FontAwesome name="lock" style={StyHome.icon5}/>
            </View>
            <View style={StyHome.containerFlag9}>
              <Image style={StyHome.imagCoruja2} source={Coruja5} resizeMode= "stretch"/>
            </View>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <View style={StyHome.containerFlag3}>
              <MaterialCommunityIcons name="treasure-chest" style={StyHome.icon5}/>
            </View> 
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={StyHome.containerFlag7}>
              <MaterialIcons name="menu-book" style={StyHome.icon5}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={StyHome.containerFlag7}>
              <MaterialCommunityIcons name="trophy" style={StyHome.icon5}/>
            </View> 
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;