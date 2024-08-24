
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../products/styles";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


type Props = {
    name: string;
    onRemove: () => void;

}

export function Product( { name, onRemove }: Props){

    return(

        <View style={styles.container}>
            
            <Text style={styles.name}>{name}</Text>
    
            <MaterialCommunityIcons name="trash-can-outline" size={24} color="black" onPress={onRemove}/>
    
        </View>
        )
    }