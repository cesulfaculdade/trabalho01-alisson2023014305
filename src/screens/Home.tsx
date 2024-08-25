import { Alert, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../Header";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
import shopping from '../../src/assets/shopping_list.png';
import { Product } from "../products";
import ProductCount from '../ProductCount'
import { MaterialIcons } from "@expo/vector-icons";

type Product = {
    name: string;
    done: boolean;
  };

  export function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [productName, setProductName] = useState("");
  
    const productDone = products.reduce((acc, product) => {
      return product.done ? acc + 1 : acc;
    }, 0);

    function handleProductAdd() {
        if (products.filter(({ name }) => name === productName).length >= 1) {
            return Alert.alert(
              "Produto já cadastrado!",
              "Já existe um produto na lista com este nome!"
            );
          }
          if (productName.length === 0) {
            return Alert.alert("Adicione um produto válido");
          }
          setProducts((prevState) => [
            ...prevState,
            { name: productName, done: false },
          ]);
          setProductName("");
        }

        function handleProductRemove(name: string) {
            Alert.alert("Remover", `Deseja remover o produto ${name}?`, [
              {
                text: "Sim",
                onPress: () =>
                  setProducts((prevState) =>
                    prevState.filter((product) => product.name !== name)
                  ),
              },
              {
                text: "Não",
                style: "cancel",
              },
            ]);}

    function handleProductDone(name: string) {
        setProducts((prevState) =>
          prevState.map((product) =>
            product.name === name ? { ...product, done: !product.done } : product
          )
        );
      }
    

    return (

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

                    <AntDesign style={styles.txtButton} name="pluscircleo" size={16} color="black" />
                </TouchableOpacity>

            </View>
            <View>
                <View style={styles.CounterText}>
                    <ProductCount
                        name={"Produtos"}
                        color="#31C667"
                        numeros={products.length}
                    />

                    <ProductCount
                        name={"Finalizados"}
                        color="#7A4A9E"
                        numeros={productDone}
                    />

                </View>
            </View>


            <FlatList
            data={products}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <Product name={item.name} done={item.done}
                onRemove={() => handleProductRemove(item.name)}
                RadioPress={() => handleProductDone(item.name)}
              />)}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={products.length <= 0 && styles.list}
                ListEmptyComponent={() => (


                    <View style={styles.ListEmpty}>
                        <Image style={styles.imageListEmpty} source={shopping}></Image>
                        <Text style={styles.listEmptyText}>Você ainda não tem produtos na lista de compra </Text>
                        <Text style={styles.EmptyText}> Adicione produtos e organize sua lista de compras</Text>

                    </View>
                )}
            />


        </View>


    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        justifyContent: "center",
        flexDirection: "row",
        top: "-6%",
        height: 54,
        paddingLeft: 24,
        paddingRight: 24,
    },
    input: {
        padding: 16,
        textAlign: "center",
        borderRadius: 6,
        borderColor: "#808080",
        borderWidth: 0.5,
        backgroundColor: "white",
        flex: 1,
        fontSize: 16,


    },
    button: {
        borderRadius: 6,
        backgroundColor: "#31C667",
        height: 52,
        width: 52,
        marginLeft: 4,
        justifyContent: "center"

    },
    txtButton: {
        margin: "auto",
        color: "white"
    },
    ListEmpty: {
        flex: 1,
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: "center",
        paddingVertical: 48,
        paddingHorizontal: 20,
        borderTopColor: "#D9D9D9",
        borderTopWidth: 1,

    },
    listEmptyText: {
        color: "#808080",
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: 14
    },
    EmptyText: {
        color: "#808080",
        fontSize: 14
    },
    CounterText: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: "10%",
        marginRight: "10%",
        width: "80%",
        marginBottom: 20,
        paddingBottom:20,

    },
    list: {},
    imageListEmpty:{}
})