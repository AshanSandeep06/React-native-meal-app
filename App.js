import {StatusBar} from 'expo-status-bar';
import { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from "./screens/MealDetailsScreen"
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';

// Create Native Stack Navigator
const Stack = createNativeStackNavigator();

// Drawer Navigator
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Categories' component={CategoriesScreen} />
            <Drawer.Screen name='FavoritesScreen' component={FavoritesScreen} options={{ title: 'Favorites' }} />
        </Drawer.Navigator>
    );
};

export default function App() {
    return (
        <>
            {/* Status Bar eka light wenwa */}
            <StatusBar style='light' />

            <NavigationContainer>
                {/* Me Native stack navigator ekata, Screens tika denna ona */}
                <Stack.Navigator initialRouteName='MealsCategories' screenOptions={{
                    headerStyle: {backgroundColor: "#351401"}, 
                    headerTintColor: "#fff", 
                    contentStyle:{backgroundColor: "#3f2f25"}}
                }>
                    {/* name --> kyna prop eka magin me screen ekata header ekk set wenwa */}
                    <Stack.Screen name="MealsCategories" component={DrawerNavigator} options={{
                        title: "Meals Categories",
                        // This headerShown prop represents that this Screen's header title is hidden by this prop
                        headerShown: false
                    }}
                        // options={{ title: "Meals Categories",
                        //     headerStyle: {backgroundColor: "#351401"}, 
                        //     headerTintColor: "#fff", 
                        //     contentStyle:{backgroundColor: "#3f2f25"} }} 
                    />
                    <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} options={{title: "Meals Overview"}}
                        // options={{ title: "Meals Overview",
                        //     headerStyle: {backgroundColor: "#351401"}, 
                        //     headerTintColor: "#fff", 
                        //     contentStyle:{backgroundColor: "#3f2f25"} }} 
                    />
                    <Stack.Screen name='MealDetails' component={MealDetailsScreen} options={{
                         title: "Meal Details",
                         // We can use useLayoutEffect Hook instead of this options Prop
                        //  headerRight: () => <Button title='Save' />
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({});