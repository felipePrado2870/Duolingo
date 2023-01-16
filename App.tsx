import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen1 from './screens/splash01.js';

const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
       <Stack.Navigator
       screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Splash1" component={SplashScreen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
