import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native"
import { Button } from "react-native";
export const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{ fontWeight: "bold" }}>Home</Text>
            <Button title="Profil" onPress={() => 
                navigation.
                navigate("profile", { name: "İso", surname: "kgb" })} />
        </View>
    );
} 
