import { createStackNavigator } from "@react-navigation/stack";
import { PRIMARY_COLOR } from "../../commons/constans";
import { Welcome } from "../Welcome";
import { LoginScreen } from "../LoginScreen";
import { RegisterScreen } from "../RegisterScreen";




const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle:{
                    backgroundColor:PRIMARY_COLOR
                }
            }}>
            <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Welcome} />    
            <Stack.Screen name="LoginScreen" options={{ headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" options={{ headerShown: false }} component={RegisterScreen} />
        </Stack.Navigator>
    );
}