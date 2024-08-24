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

                <AntDesign style={styles.txtButton}name="pluscircleo" size={16} color="black" />
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
        flexDirection:"row",
        top:"-8%",
        height:54,
        paddingLeft: 24,
        paddingRight: 24,
    },
    input:{
        padding: 16,
        textAlign: "center",
        borderRadius: 6,
        borderColor: "#808080",
        borderWidth: 0.5,
        backgroundColor: "white",
        flex:1,
        fontSize:16,
        

    },
    button:{
        borderRadius: 6,
        backgroundColor: "#31C667",
        height: 52,
        width: 52,
        marginLeft: 4,
        justifyContent:"center"

    },
    txtButton:{
        margin:"auto",
        color:"white"
    }

})