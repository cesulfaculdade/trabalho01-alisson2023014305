import { Text, View } from "react-native";
import {style} from "./style"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

type Props = {
    name: string;
    removeItem: ()=>void;
}

export function ListLayout({ name, removeItem}: Props) {

    return (
        <View style={style.container} >
            <Entypo name="circle" size={24} color="#31C667"/>
            <Text style={style.text}>
                {name}
            </Text>
            <MaterialCommunityIcons name="trash-can-outline" size={24} color="black" onPress={removeItem}/>
        </View>

    )
}