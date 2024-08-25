
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../products/styles";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
    name: string;
    onRemove: () => void;
    done: boolean;
    RadioPress: () => void;
}

export function Product( { name, onRemove, done , RadioPress }: Props){

    return(

        <View
        style={{ ...styles.container, borderColor: done ? "#D9D9D9" : "#808080" }}
      >
        <TouchableOpacity style={styles.radioButton} onPress={RadioPress}>
          {done ? (
            <MaterialIcons name="check-circle" size={24} color="#7A4A9E" />
          ) : (
            <MaterialIcons name="radio-button-off" size={24} color="#31C667" />)}
        </TouchableOpacity>
  
        <Text style={done ? styles.ProductDone : styles.ProductDescription}>
          {name}
        </Text>
  
        <TouchableOpacity style={styles.buttonRemove} onPress={onRemove}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={24}
            color="#262626"
          />
        </TouchableOpacity>
      </View>
    );
  }