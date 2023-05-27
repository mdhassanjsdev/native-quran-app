import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/screens/Home';
import SurahScreen from './app/screens/SurahScreen';
import AyatScreen from './app/screens/AyatScreen';


const App = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
                <Stack.Screen name='SurahScreen' component={SurahScreen} options={{ headerShown: false }} />
                <Stack.Screen name='AyatScreen' component={AyatScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App