import { StyleSheet } from "react-native";
import { Text, View }  from "react-native";
import { MEALS } from "../data/dummy-data";
import { Image } from "react-native";
import MealDetail from "../components/MealDetail";
import MealItem from "../components/MealItem"
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

const MealDetailsScreen = ({ route }) => {
    const { mealId } = route.params;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const navigation = useNavigation();

    //useLayoutEffect Hook
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <Button title="Click Me" />
        });
    }, [navigation]);

    const mealItemProps = {
        title: selectedMeal.title,
        imageUrl: selectedMeal.imageUrl,
        complexity: selectedMeal.complexity,
        affordability: selectedMeal.affordability,
        duration: selectedMeal.duration,
    };

    return(
        <>
            <MealItem {...mealItemProps} />
        </>
    );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
    Text: {
        color: '#fff'
    },

    Image: {
        width: '100%',
        height: 200
    }
});