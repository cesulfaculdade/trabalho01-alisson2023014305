import { Text, View } from "react-native";
import { style } from "./styles"

type Props = {
    color: string;
    name: string;
    numeros: number
}

export default function ListLayout({ color, name, numeros }: Props) {
    return (
        <View style={{ flexDirection: "row", height: 19 }} >
            <Text style={{ color: color, fontWeight: "bold" }}>
                {name}
            </Text>
            <View style={style.container}>
                <Text style={{ }}>
                    {numeros}
                </Text>
            </View>
        </View>

    )
}