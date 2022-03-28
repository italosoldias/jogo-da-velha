import React, {useState, useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Login from "./src/telas/login/index.js";
import Tabuleiro from './src/components/tabuleiro/index.js';

import Navegacao from "./Navegacao.js";
export default function App() {
  
 
  
  


  
  return (

    <NavigationContainer>
      <Navegacao/>
    </NavigationContainer>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fonte:{
    color:"#ffff"
  }
});
