import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text } from "react-native"
import { Button } from "react-native";
export const Profile = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [text, setText] = useState();

    useEffect(() => {
        const params = route.params;
        setText(params.input),
        navigation.setOptions({
            title: params.input,
            headerRight: () =>(
                <View style={{
                    width:60,
                    height:60,
                    marginRight:10,
                    backgroundColor:"gray",
                    borderRadius:30,
                    justifyContent:"center",
                    alignItems:"center"
                    
                }}>
                    <Text>{params.input}</Text>

                </View>

            ),
        })

    }, []);
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{ fontWeight: "bold",
                 fontSize:30}}>Input: {text}</Text>
            <Text style={{ fontWeight: "bold" }}>Profile</Text>

            <Button title="Edit" onPress={() => 
                navigation.navigate("edit")} />
        </View>
    );
} 
