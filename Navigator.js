import { createStackNavigator } from '@react-navigation/stack';
import { Home } from "./screens/Home";
import { Profile } from "./screens/Profile";
import { Edit } from "./screens/Edit";

const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{
                title: "Anasayfa",
                headerStyle:{
                    height:300,
                    backgroundColor:"red"
                },
                headerTitleStyle:{
                    fontSize:30,
                    color:"blue"
                },
                animationEnabled:false,
                headerShadowVisible:false,

            }} />
            <Stack.Screen name="profile" component={Profile} 
            options={{
                title: "Profil",
                headerTintColor:"red"
            }} />
            <Stack.Screen name="edit" component={Edit} 
            options={{
                title: "Profil Düzenle"
            }} />
        </Stack.Navigator>
    );
}