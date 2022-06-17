import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


export default function ResultScreen(props){
    const navigation = useNavigation();
    const route = useRoute();

    const total = props.route.params.Total;
    const alcool = props.route.params.Alcool;
    const gasolina = props.route.params.Gasolina;

    const BackButton = () => {
        navigation.goBack();
    }


    return(
        <View style={styles.container}>
            <Image
            style={styles.gas}
            source={require('../img/gas.png')}
            />
             {total < 0.7?<Text style={styles.title}>Compensa usar Alcool! </Text> :<Text style={styles.title}>Compensa usar Gasolina!</Text>  }
             <Text style={styles.titleA}>Com os preços:</Text>
             <Text style={styles.titleA}>Alcool: R$ {alcool}</Text>
             <Text style={styles.titleG}>Gasolina: R$ {gasolina}</Text>

             <TouchableOpacity style={styles.button} onPress={BackButton}>
                <Text style={styles.txtbotao}>Calcular novamente</Text>
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
    gas: {
        marginTop:-150,
        position:'relative',
            
      },
      title: {
        fontSize: 20,
        color: 'green',
        marginTop: 30
      },
      titleA:{
        fontSize: 18,
        color:'#fff',
        marginTop:10
      },
      titleG:{
        fontSize: 18,
        color:'#fff',
        marginTop:10
      },
      button: {
        width:'70%',
        backgroundColor: 'blue',
        padding:10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginTop:15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      txtbotao:{
        fontSize:15,
        color: '#fff',
        fontWeight: 'bold',
        
      }
     

})