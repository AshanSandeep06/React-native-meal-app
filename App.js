import {StatusBar} from 'expo-status-bar';
import { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (
        <>
            {/* Status Bar eka light wenwa */}
            <StatusBar style='light' />
            <NavigationContainer>
                <CategoriesScreen />
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});