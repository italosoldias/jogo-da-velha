import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Jogo from './src/telas/jogo';
import Login from './src/telas/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator()


export default function Navegacao(){

   return( <AppStack.Navigator
    screenOptions={{
        headerShown: false,
        
    }} 
    >
        <AppStack.Screen name='Login' component={Login} />
        <AppStack.Screen name='Jogo' component={Jogo} />
    </AppStack.Navigator>)
       

}