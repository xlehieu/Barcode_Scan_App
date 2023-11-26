import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons'
//Screens
import CartScreen from './CartScreen';
import Payment from './Payment';
import TabNavigation from './TabNavigation';
const Stack = createStackNavigator();
const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen options={{
                }}
                    name='Tab'
                    component={TabNavigation} />
                    <Stack.Screen 
                    options={{
                    }}
                        name='Payment'
                        component={Payment}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;