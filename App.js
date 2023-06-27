import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import {
    MainLayout,
    CourseListing,
    CourseDetails
} from "./screens";
import { Provider } from 'react-redux';
import { store } from './redux-toolkit/store';
import { Easing } from 'react-native';

const Stack = createSharedElementStackNavigator();
const options={
    gestureEnabled:false,
    transitionSpec:{
        open:{
            animation:'timing',
            config:{duration:400,easing:Easing.inOut(Easing.ease)}
        },
        close:{
            animation:'timing',
            config:{duration:400,easing:Easing.inOut(Easing.ease)}
        }
    },
    cardStyleInterpolator:({current:{progress}})=>{
        return {
            cardStyle:{
                opacity:progress
            }
        }
    }

}

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    useNativeDriver:true,
                }}
                
                initialRouteName={'Dashboard'}
                detachInactiveScreens={false}
            >
                <Stack.Screen
                    name="Dashboard"
                    component={MainLayout}
                />
                <Stack.Screen
                    name="CourseListing"
                    component={CourseListing}
                    // for shared element feature optn prop
                    options={()=>options} 
                />
                <Stack.Screen
                    name="CourseDetails"
                    component={CourseDetails}
                />

            </Stack.Navigator>
        </NavigationContainer>
    </Provider>    
)
}


