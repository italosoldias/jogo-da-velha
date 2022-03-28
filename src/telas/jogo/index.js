import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity, SafeAreaView } from 'react-native';
import Tabuleiro from '../../components/tabuleiro/index.js';
export default function Jogo({route}) {
  
 
  
  
  const jogador1 = route.params.jogador1
  const jogador2 = route.params.jogador2

  console.log("no jogo >>" + jogador2)
    
      const jogadoresInfo = {
        jogador1,
        jogador2
      }

  

  
  return (


  
    <>
     
      <View style={styles.container}>


        <Tabuleiro jogadores={jogadoresInfo} />

        <Text style={styles.fonte1}>JOGADOR 1: {jogador1}</Text>
        {jogador2 == null || jogador2 == ''
          ? <Text style={styles.fonte2}>JOGADOR 2: COM</Text> :
          <Text style={styles.fonte2}>JOGADOR 2: {jogador2}</Text>}

        <StatusBar style="auto" />
      {/* <View style={styles.conteinerFonte} >

        
      </View> */}
      
      </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#051367',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
  conteinerFonte:{
    backgroundColor: '#051367',
    
    
    
    alignItems: "flex-start",
    
    
  },
  fonte1:{
    color:"#ffff",
    alignContent:"flex-start",
    alignSelf:"flex-start",
    position : "absolute",
    top:100,
    paddingLeft:20,
  
    fontSize:20
  },
  fonte2:{
    color:"#ffff",
    alignContent:"flex-start",
    alignSelf:"flex-start",
    position : "absolute",
    top:150,
    paddingLeft:20,
  
    fontSize:20
  },
});