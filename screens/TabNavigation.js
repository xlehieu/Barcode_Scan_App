import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons'
//Screens
import ScanScreen from './ScanScreen';
import StackNavigation from './StackNavigation';
import CartScreen from './CartScreen';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
      <Tab.Navigator
      screenOptions={{headerShown:false,
        tabBarShowLabel:false
      }}
      >
        <Tab.Screen options={{
          tabBarIcon: ({focused})=>{
            return (<Ionicons name={focused? 'scan':'scan-outline'} color={focused? '#2DC0FF':'#BBBBBB'} size={25} />)
          },
          tabBarStyle:{height:0}
        }}
        name='ScanScreen'
        component={ScanScreen} />

        <Tab.Screen options={{
          tabBarIcon: ({focused})=>{
            return (<Ionicons name={'cart-outline'} color={focused? '#F08F5F':'#BBBBBB'} size={25} />)
          },
        }}
        name='CartScreen'
        component={CartScreen} />
      </Tab.Navigator>
  )
}

export default TabNavigation;