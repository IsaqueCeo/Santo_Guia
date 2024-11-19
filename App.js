import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from './src/screens/Onboarding/IntroScreen'; 
import LoginScreen from './src/screens/Onboarding/LoginScreen'; 

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="IntroScreen">
    
                <Stack.Screen 
                    name="IntroScreen" 
                    component={IntroScreen} 
                    options={{ headerShown: false }} 
                    />
                <Stack.Screen
                    name="LoginScreen" 
                    component={LoginScreen} 
                    options={{ headerShown: false }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
