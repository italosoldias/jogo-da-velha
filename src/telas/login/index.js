import React, {useState, useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert ,Text, Dimensions,  View,TouchableOpacity, TextInput } from 'react-native';
import { useNavigation} from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator()

export default function Login (){

    const [jogador1 , setJogador1] = useState(null)
    const [jogador2 , setJogador2] = useState(null)
    const navegation = useNavigation()



    function setJogadores(){
       
        let jogadoresInformados = {
            jogador1: jogador1,
            jogador2: jogador2
       }
        if(jogador1 == null || jogador1 == ''){

            return Alert.alert("Informe um usuário")
        }
         if(jogador2 == ''){
           setJogador2(null)

           let jogadoresInformados = {
            jogador1: jogador1,
            jogador2: null
             }
           navegation.navigate('Jogo', jogadoresInformados)
       }

        

        console.log("login >>>" + jogador2)
        navegation.navigate('Jogo', jogadoresInformados)
       
    }



    return(
        <View style={styles.cont}>
            <TextInput 
                style={styles.input}
                placeholder="INFORME O NOME DO PRIMEIRO JOGADOR"
                placeholderTextColor="#000"
                onChangeText={setJogador1} 
            />
            <TextInput 
                style={styles.input}
                placeholder="INFORME O NOME DO SEGUNDO JOGADOR"
                placeholderTextColor="#000"
                onChangeText={setJogador2} 
            />
            <TouchableOpacity 
                style={styles.botao}
                onPress={()=>{setJogadores()}}
            >
                <Text style={styles.texto} >Iniciar</Text>
            </TouchableOpacity>

        </View>
    )
}


const {height,width} = Dimensions.get('window')

const styles = StyleSheet.create({
    cont:{
    flex: 1,
    backgroundColor: '#051367',
    alignItems: 'center',
    justifyContent: 'center',
},
    input: {
        width: width * 0.85 / 1,
        paddingLeft:10,
        color:'#fff',
        margin: 6,
      backgroundColor: '#5D8BF4',
      borderWidth: 3,
      borderColor: "#000000",
    },
    botao:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
      fontSize:20,  
      backgroundColor:"#2D31FA",
      marginTop: 20,
      borderWidth: 2,
      borderColor: "#000000",
      width:width * 0.75 / 1,
     
    },
    texto:{
        fontSize:20,  
    },
   
  });
  