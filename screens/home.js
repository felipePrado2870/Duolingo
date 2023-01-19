import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StyHome from './styless/styHome';
import Foundation from 'react-native-vector-icons/Foundation';
const FlagEUA = require('../assets/FlagEUA.png');
function HomeScreen({navigation}) {
  

  return (
    <View style={StyHome.container}>
      <View style={StyHome.container1}>
        <View style={StyHome.containerFlag}>
         <Image
          style={StyHome.imagFlag}
          source={FlagEUA}
          resizeMode= "stretch"/>
        </View>
        <View style={StyHome.containerFlag}>
          <MaterialIcons name="local-fire-department" style={StyHome.icon2}/>
          <Text style={StyHome.text3}>0</Text>
        </View>
        <View style={StyHome.containerFlag}>
          <MaterialCommunityIcons name="cards-diamond" style={StyHome.icon3}/>
          <Text style={StyHome.text4}>5630</Text>
        </View>
        <View style={StyHome.containerFlag}>
          <AntDesign name="heart" style={StyHome.icon4}/>
          <Text style={StyHome.text4}>5</Text>
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
           <MaterialCommunityIcons name="notebook-multiple" style={StyHome.icon1}/>
          </View>
        </View>
        <View style={StyHome.container4}>
          <View style={StyHome.containerFlag1}>
           <AntDesign name="star" style={StyHome.icon6}/>
          </View>
          <View style={StyHome.containerFlag3}>
           <FontAwesome name="lock" style={StyHome.icon5}/>
          </View>
          <View style={StyHome.containerFlag2}>
            <View style={StyHome.containerFlag4}>
             <MaterialCommunityIcons name="treasure-chest" style={StyHome.icon5}/>
            </View>
            <View style={StyHome.containerFlag9}>
             <FontAwesome name="child" style={StyHome.icon8}/>
            </View>
          </View>
          <View style={StyHome.containerFlag3}>
           <MaterialIcons name="menu-book" style={StyHome.icon5}/>
          </View>
          <View style={StyHome.containerFlag7}>
           <MaterialCommunityIcons name="trophy" style={StyHome.icon5}/>
          </View>
        </View>
        <View style={StyHome.container5}>
          <View  style={StyHome.view1}>
           <Text style={StyHome.text1}>Unidade 2</Text>
           <Text style={StyHome.text2}>Converse sobre viagem</Text>
          </View>
          <View style={StyHome.view2}>
           <MaterialCommunityIcons name="notebook-multiple" style={StyHome.icon1}/>
          </View>
        </View>
        <View style={StyHome.container6}>
          <View style={StyHome.containerFlag8}>
           <Foundation name="next" style={StyHome.icon6}/>
          </View>
          <View style={StyHome.containerFlag6}>
           <FontAwesome name="lock" style={StyHome.icon5}/>
          </View>
          <View style={StyHome.containerFlag2}>
            <View style={StyHome.containerFlag10}>
             <FontAwesome name="child" style={StyHome.icon8}/>
            </View>
            <View style={StyHome.containerFlag5}>
             <MaterialCommunityIcons name="treasure-chest" style={StyHome.icon5}/>
            </View>
          </View>
          <View style={StyHome.containerFlag6}>
           <MaterialCommunityIcons name="cards-diamond" style={StyHome.icon5}/>
          </View>
          <View style={StyHome.containerFlag7}>
            <MaterialIcons name="menu-book" style={StyHome.icon5}/>
          </View>
          <View style={StyHome.containerFlag3}>
            <FontAwesome name="lock" style={StyHome.icon5}/>
          </View>
          <View style={StyHome.containerFlag2}>
            <View style={StyHome.containerFlag4}>
             <FontAwesome name="lock" style={StyHome.icon5}/>
            </View>
            <View style={StyHome.containerFlag9}>
             <FontAwesome name="child" style={StyHome.icon8}/>
            </View>
          </View>
          <View style={StyHome.containerFlag3}>
           <MaterialCommunityIcons name="treasure-chest" style={StyHome.icon5}/>
          </View>
          <View style={StyHome.containerFlag7}>
           <MaterialIcons name="menu-book" style={StyHome.icon5}/>
          </View>
          <View style={StyHome.containerFlag7}>
           <MaterialCommunityIcons name="trophy" style={StyHome.icon5}/>
          </View>
        </View>
        <View style={StyHome.container3}>
          <View style={StyHome.view1}>
           <Text style={StyHome.text1}>Unidade 3</Text>
           <Text style={StyHome.text2}>Peça em um restaurante,</Text>
           <Text style={StyHome.text2}>compartilhe contato</Text>
          </View>
          <View style={StyHome.view2}>
           <MaterialCommunityIcons name="notebook-multiple" style={StyHome.icon1}/>
          </View>
        </View>
        <View style={StyHome.container6}>
          <View style={StyHome.containerFlag11}>
           <Foundation name="next" style={StyHome.icon6}/>
          </View>
          <View style={StyHome.containerFlag3}>
           <FontAwesome name="lock" style={StyHome.icon5}/>
          </View>
          <View style={StyHome.containerFlag2}>
            <View style={StyHome.containerFlag4}>
             <MaterialCommunityIcons name="treasure-chest" style={StyHome.icon5}/>
            </View>
            <View style={StyHome.containerFlag10}>
             <FontAwesome name="child" style={StyHome.icon8}/>
            </View>
          </View>
          <View style={StyHome.containerFlag3}>
           <MaterialCommunityIcons name="cards-diamond" style={StyHome.icon5}/>
          </View>
          <View style={StyHome.containerFlag7}>
           <MaterialIcons name="menu-book" style={StyHome.icon5}/>
          </View>
          <View style={StyHome.containerFlag6}>
           <FontAwesome name="lock" style={StyHome.icon5}/>
          </View>
          <View style={StyHome.containerFlag2}>
            <View style={StyHome.containerFlag9}>
             <FontAwesome name="child" style={StyHome.icon8}/>
            </View>
            <View style={StyHome.containerFlag4}>
             <FontAwesome name="lock" style={StyHome.icon5}/>
            </View>
          </View>
          <View style={StyHome.containerFlag6}>
           <MaterialCommunityIcons name="treasure-chest" style={StyHome.icon5}/>
          </View>
          <View style={StyHome.containerFlag7}>
           <MaterialIcons name="menu-book" style={StyHome.icon5}/>
          </View>
          <View style={StyHome.containerFlag7}>
           <MaterialCommunityIcons name="trophy" style={StyHome.icon5}/>
          </View>
        </View>
        <View style={StyHome.container5}>
          <View  style={StyHome.view1}>
           <Text style={StyHome.text1}>Unidade 4</Text>
           <Text style={StyHome.text2}>Flae sobre a família</Text>
          </View>
          <View style={StyHome.view2}>
           <MaterialCommunityIcons name="notebook-multiple" style={StyHome.icon1}/>
          </View>
        </View>
        <View style={StyHome.container6}>
          <View style={StyHome.containerFlag12}>
           <Foundation name="next" style={StyHome.icon6}/>
          </View>
          <View style={StyHome.containerFlag6}>
            <FontAwesome name="lock" style={StyHome.icon5}/>
          </View>
          <View style={StyHome.containerFlag2}>
            <View style={StyHome.containerFlag10}>
             <FontAwesome name="child" style={StyHome.icon8}/>
            </View>
            <View style={StyHome.containerFlag5}>
             <MaterialCommunityIcons name="treasure-chest" style={StyHome.icon5}/>
            </View>
          </View>
          <View style={StyHome.containerFlag6}>
           <MaterialCommunityIcons name="cards-diamond" style={StyHome.icon5}/>
          </View>
          <View style={StyHome.containerFlag7}>
           <MaterialIcons name="menu-book" style={StyHome.icon5}/>
          </View>
          <View style={StyHome.containerFlag3}>
           <FontAwesome name="lock" style={StyHome.icon5}/>
          </View>
          <View style={StyHome.containerFlag2}>
            <View style={StyHome.containerFlag4}>
             <FontAwesome name="lock" style={StyHome.icon5}/>
            </View>
            <View style={StyHome.containerFlag9}>
             <FontAwesome name="child" style={StyHome.icon8}/>
            </View>
          </View>
          <View style={StyHome.containerFlag3}>
           <MaterialCommunityIcons name="treasure-chest" style={StyHome.icon5}/>
          </View>
          <View style={StyHome.containerFlag7}>
           <MaterialIcons name="menu-book" style={StyHome.icon5}/>
          </View>
          <View style={StyHome.containerFlag7}>
           <MaterialCommunityIcons name="trophy" style={StyHome.icon5}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;