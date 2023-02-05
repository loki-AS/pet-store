import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../pages/StartScreen';
import Tabs from './Tabs';
import Pets from "../pages/Pets"

const Stack = createNativeStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Start"
            component={StartScreen}
            options={{headerShown: false}}
            />
            <Stack.Screen 
            name="Home"
            component={Tabs}
            options={{headerShown: false}}
            />
            <Stack.Screen 
            name="Pets"
            component={Pets}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}