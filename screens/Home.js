import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TextInput } from "react-native"
import { Button } from "react-native";
export const Home = () => {
    const navigation = useNavigation();
    const [text, setText] = useState();
    
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{ fontWeight: "bold" }}>Home</Text>

            <TextInput
                value={text}
                onChangeText={(e => setText(e))}
                placeholder="Enter"
                style={{
                    paddingLeft: 10,
                    backgroundColor: "#EAEAEA",
                    width: 250, height: 40,
                    borderRadius: 30
                }} />

            <Button title="Profil" onPress={() =>
                navigation.
                    navigate("profile", { input: text })} />
        </View>
    );
} 
