import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen1 from './screens/splash01.js';
import SplashScreen2 from './screens/splash02.js';
import Book01Screen from './screens/book01';
import Book02Screen from './screens/book02';
import Book03Screen from './screens/book03';
import Book04Screen from './screens/book04';
import HomeScreen from './screens/home';


const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
       <Stack.Navigator
       screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Splash1" component={SplashScreen1} />
        <Stack.Screen name="Splash2" component={SplashScreen2} />
        <Stack.Screen name="Book01" component={Book01Screen} />
        <Stack.Screen name="Book02" component={Book02Screen} />
        <Stack.Screen name="Book03" component={Book03Screen} />
        <Stack.Screen name="Book04" component={Book04Screen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
