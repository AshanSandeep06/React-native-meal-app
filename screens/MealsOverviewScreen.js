import { Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { FlatList } from "react-native";
import MealItem from "../components/MealList/MealItem";
import { useNavigation } from "@react-navigation/native";
import MealList from "../components/MealList/MealList";

const MealsOverviewScreen = ({ route }) => {
    const { categoryId } = route.params;
    const displayMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0);

    return <MealList itemData={displayMeals} />
}

export default MealsOverviewScreen;