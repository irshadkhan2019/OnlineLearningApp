import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    MainLayout
} from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={'Dashboard'}
        >
            <Stack.Screen
                name="Dashboard"
                component={MainLayout}
            />
        </Stack.Navigator>
    </NavigationContainer>
)
}


