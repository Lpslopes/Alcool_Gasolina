import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen(){

  const navigation = useNavigation();

    const [Alcool, setAlcool] = useState(0);
    const [Gasolina, setGasolina] = useState(0);
    const [Total, setTotal] = useState(0) 
    
    const calculo = () => {
      navigation.navigate('Result' ,{ Total: Total, Alcool: Alcool, Gasolina: Gasolina });
      
      if(parseFloat(Alcool) && parseFloat(Gasolina)) {
        setTotal(Alcool/Gasolina);
      }else {
        alert("Digite os valores do Alcool e Gasolina!")
      }
    }

    const limpar = () => {
      setAlcool('');
      setGasolina('');
    }
    
    
    
      return(
        <View style={styles.container}>
        
            <Image
            style={styles.logo}
            source={require('../img/logo.png')}
            />
           <Text style={styles.title}>Qual melhor opção ?</Text>
    
           <View style={styles.areaInput}>
             <Text style={styles.tituloA}>Alcool(Preço por litro:):</Text>
              <TextInput
              style={styles.inputAlcool}
              keyboardType= 'numeric'
              value={Alcool}
              onChangeText={(e) => setAlcool(e) }
            
          
              />
              <Text style={styles.tituloB}>Gasolina(Preço por litro:):</Text>
              <TextInput
              style={styles.inputGasolina}
              keyboardType= 'numeric'
              value={Gasolina}
              onChangeText={(e) => setGasolina(e)}
                    
              />
    
              
           </View>
           
           
            <TouchableOpacity style={styles.botaoA} onPress={calculo}>
                <Text style={styles.txtbotao}>Calcular</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={limpar}>
                <Text style={styles.txtbotao}>Limpar</Text>
            </TouchableOpacity>
           
    
            
            
    
           
           
                             
              
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#151515'
        
      },
      logo: {
        marginTop:-120,
        position:'relative'
    
      },
      title: {
        color: '#fff',
        fontSize:22,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      areaInput:{
        marginTop:50,
        width:'90%',
      },
      inputAlcool:{
        height:40,
        marginBottom: 20,
        borderWidth: 1,
        backgroundColor: '#fff',
        padding:10,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopRightRadius:5
      },
      inputGasolina:{
        height:40,
        marginBottom: 20,
        borderWidth: 1,
        backgroundColor: '#fff',
        padding:10,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopRightRadius:5
      },
    
    
      tituloA:{
        fontSize:18,
        color: '#fff',
    
      },
      tituloB:{
        fontSize:18,
        color: '#fff',
    
      },
      botaoA: {
        width:'90%',
        height:50,
        borderWidth: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopRightRadius:5
        
      },
      botao: {
        width:'90%',
        height:50,
        borderWidth: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopRightRadius:5,
        marginTop: 6
        
      },
     
      
      txtbotao:{
        fontSize:20,
        color: '#fff',
        fontWeight:'bold',
               
      },
      title: {
        marginTop:30,
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold'
      }
      
    
    
    
    })

