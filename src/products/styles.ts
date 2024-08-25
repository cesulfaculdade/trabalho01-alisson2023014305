
import { StyleSheet } from "react-native"



export const styles = StyleSheet.create({


    container:{
        flex:1,
        gap:8,
        paddingTop:12,
        paddingRight:8,
        paddingBottom:12,
        paddingLeft:12,
        borderWidth:1,
        borderColor:"#808080",
        marginBottom:8,
        width:"90%",
        padding:12,
        justifyContent:"space-between",
        borderRadius:8,
        flexDirection:"row",
        alignSelf:"center",
     
    },
    ProductDescription: {
        flex: 1,
        fontSize: 14,
        fontWeight: "regular",
        color: "#262626",
        marginHorizontal: 8,
      },
      ProductDone: {
        flex: 1,
        fontSize: 14,
        fontWeight: "regular",
        color: "#808080",
        marginHorizontal: 8,
        textDecorationLine: "line-through",
      },
      buttonRemove: {
        width: 32,
        height: 32,
        alignItems: "center",
        justifyContent: "center"
      },
      radioButton: {},
    });

