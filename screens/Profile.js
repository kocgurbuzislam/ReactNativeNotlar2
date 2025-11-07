import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Text } from "react-native"
import { Button } from "react-native";
export const Profile = () => {
    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        const params = route.params;
        const name = params.name;
        const surname = params.surname;

        console.log(name);
        console.log(surname);

    }, []);

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{ fontWeight: "bold" }}>Profile</Text>

            <Button title="Edit" onPress={() => navigation.navigate("edit")} />
        </View>
    );
} 
