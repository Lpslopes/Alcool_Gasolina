import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../pages/HomeScreen';
import ResultScreen from '../pages/ResultScreen';

const MainStack = createNativeStackNavigator();

export default () => {
    return(
        <MainStack.Navigator
        screenOptions={{
            headerShown: false
          }}>
            <MainStack.Screen name="Home" component={HomeScreen}/>
            <MainStack.Screen name="Result" component={ResultScreen}/>


        </MainStack.Navigator>
    )
}