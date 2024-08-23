import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../Header";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";


export function Home() {
    const[productName, setProductName]= useState('');
   

    function handleProductAdd(){

    }



    return(

        <View style={styles.container}>
           
            <Header></Header>

            

            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input} 
                placeholder="Adicione um novo produto"
                placeholderTextColor="#BDBABA"
                keyboardType="default"
                onChangeText={setProductName}
                value={productName}
                />

            <TouchableOpacity 
                style={styles.button} 
                onPress={handleProductAdd}>

                <AntDesign name="pluscircleo" size={24} color="black" />
            </TouchableOpacity>
           
            </View>



        </View>


    )

}

const styles = StyleSheet.create({

    container:{
        flex:1,
    },
    inputContainer:{
        justifyContent:"center",

    },
    input:{
        padding:16,
        borderColor:"#808080",
        borderWidth:0.5,
        


    },
    button:{

        backgroundColor:"31C667",


    }

})