import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen1 from './screens/splash01.js';
import SplashScreen2 from './screens/splash02.js';
import HomeScreen from './screens/home'

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
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
