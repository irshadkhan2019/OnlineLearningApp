import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    MainLayout
} from "./screens";
import { Provider } from 'react-redux';
import { store } from './redux-toolkit/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>    
)
}


