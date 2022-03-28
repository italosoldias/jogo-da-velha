import React, {useState, useEffect} from "react";

import {View,SafeAreaView,Alert ,Dimensions, StyleSheet,TouchableOpacity, Image, Text} from 'react-native'




export  default function Tabuleiro  ( {jogadores} )  {
   


const jogadoresInfomadosTela = {
    joga1 : jogadores.jogador1,
    joga2: jogadores.jogador2
}

const [casas, setCasas] =  useState([require('../../../assets/enterrogacao.png'),require('../../../assets/enterrogacao.png'),require('../../../assets/enterrogacao.png'),require('../../../assets/enterrogacao.png'),require('../../../assets/enterrogacao.png'),require('../../../assets/enterrogacao.png'),require('../../../assets/enterrogacao.png'),require('../../../assets/enterrogacao.png'),require('../../../assets/enterrogacao.png')]) 
    
const [jogadas, setJogadas] = useState([require('../../../assets/enterrogacao.png'),require('../../../assets/enterrogacao.png'),require('../../../assets/enterrogacao.png'),require('../../../assets/enterrogacao.png'),require('../../../assets/enterrogacao.png'),require('../../../assets/enterrogacao.png'),require('../../../assets/enterrogacao.png'),require('../../../assets/enterrogacao.png'),require('../../../assets/enterrogacao.png')])    
const [ turno , setTurno ] = useState(0)
    

    const [ fimjogo , setfimjogo] = useState(false)
    const sequenciasGanhador = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6] 
    ]


    const simbolo = {
        
            opcoes: [ require('../../../assets/circulo.png'), require('../../../assets/X.png')  ],
        
            
                vez(){
                    if(turno ===0){
                        setTurno(1)
                    }else {
                        setTurno(0)
                    }
                } 

       };

    function rand ( minumo , maximo ){
        let min = minumo
        const minRan =  Math.ceil(min);
        let max = maximo
        const maxRan = Math.floor(max)
        let cota = Math.random() * (maxRan - minRan) + minRan

        let cota2 = cota.toFixed(0)
        return Number(cota2)
    }  
  
    

   function jogar(posicao){

    

        if(fimjogo == true){
            return Alert.alert("jogo ja acabou")
        }

        
        if (jogadas[posicao] === require('../../../assets/enterrogacao.png')){
            
            
            casas[posicao] = simbolo.opcoes[turno]
                
            let jogada=  casas.filter(()=> {return true})
            
            // console.log(tabu.casas)
            
            setJogadas(jogada)
            
            let ganhadorIndice = checarVitoria( simbolo.opcoes[turno])
                if(ganhadorIndice >= 0){
                    terminou(turno)
                }  else {
                    
                    simbolo.vez()
                    
                } 

            return true
        }  if (jogadas[posicao] === require('../../../assets/circulo.png') || 
                jogadas[posicao] === require('../../../assets/X.png') ){
           
            return -1

        }  else {
            
            return false 
        }
        
    }
    

     function jogadaAuto(num){
    
        const jot = jogar(num)

        console.log("num que entrou no jogada automatica >>>>>>>")
        console.log(num)
        console.log(jot)

            if(jot == true ){
                return false
            }  
            
            if( jot == -1){
             
                   console.log(`jot dentro do if para validação >>> ${jot}`)
                   do {
                        let numi = num
                      let acaso = numi++
                      console.log(` olha o laco if >>>>>>> ${acaso}`)
                      let rendLaco = Math.random() * (acaso - 1) +0

                       jogar(rendLaco.toFixed(0))
                       // console.log(rand(1, 7))
                   } while (jot === false);
                            
                return true
            }
            
            else{
                return  true
            }
    
       }    


    function terminou (venc){
       setfimjogo(true)
       const vencedor = venc
        if(vencedor === 0){
            Alert.alert(`Jogador 1: ${jogadoresInfomadosTela.joga1} foi o ganhador`)
        }else{
            Alert.alert(`Jogador 2: ${jogadoresInfomadosTela.joga2} foi o ganhador`)
           
        }
        
       
    }


    function checarVitoria (simbolo){
        for (const i in sequenciasGanhador) {
            if (casas[sequenciasGanhador[i][0]] == simbolo &&
                casas[sequenciasGanhador[i][1]] == simbolo &&
                casas[sequenciasGanhador[i][2]] == simbolo  )  {
                
              return i  
            }
        };

        return -1
    }
    
    function Peca  ({cas}) { 
               
        return( cas.map((valor, indice) => (
        <TouchableOpacity key={indice} style={styles.peca}
        onPress={() =>{jogar(indice)}}
        
        >
            
                <Image  style={styles.img} source={valor}  /> 
             </TouchableOpacity>
    )))}



    useEffect(()=>{
    
        if(jogadoresInfomadosTela.joga2 !== null){
            return <Peca/>

        } else {
            
            if( jogadoresInfomadosTela.joga2 == '' || jogadoresInfomadosTela.joga2 == null && turno == 1){
    
                do {
        
                    jogadaAuto(rand(0, 8))
                
                } while (auto === true);
                let auto =  jogadaAuto
            
            return <Peca/>
            }    
                
            }

            
      },[...jogadas])


    return (
        <SafeAreaView style={styles.containe} >
           <Peca cas={jogadas} />

        
        </SafeAreaView>
    )

};


const larguraxAltura={
    height: 380,
    width: 380
}

const styles = StyleSheet.create({
    containe: {
      flexDirection:"row",
      flexWrap:"wrap",
      backgroundColor: '#051367',
      alignContent: 'center',
     height: larguraxAltura.height,
     width: larguraxAltura.width
    },
    peca:{
        width: larguraxAltura.height / 3,
        height: larguraxAltura.height / 3,
        backgroundColor: '#5D8BF4',
        alignItems:"center",
        justifyContent:"center",
        borderWidth: 1,
        borderColor:'#000'

    },
   
    img:{
       position:"absolute",
    width:70,
    height:70,
    borderRadius:3,
    padding:20,
    borderWidth: 1,
        borderColor:'#000'
    }
  });

