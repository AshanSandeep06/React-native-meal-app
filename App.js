import {StatusBar} from 'expo-status-bar';
import { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

// Create Native Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            {/* Status Bar eka light wenwa */}
            <StatusBar style='light' />

            <NavigationContainer>
                {/* Me Native stack navigator ekata, Screens tika denna ona */}
                <Stack.Navigator initialRouteName='Meals Categories'>
                    {/* name --> kyna prop eka magin me screen ekata header ekk set wenwa */}
                    <Stack.Screen name="Meals Categories" component={CategoriesScreen} />
                    <Stack.Screen name="Meals Overview" component={MealsOverviewScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({});