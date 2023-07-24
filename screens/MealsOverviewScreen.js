import { Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { FlatList } from "react-native";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route }) => {
    const { categoryId } = route.params;

    const displayMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0);

    const renderMealItems = (itemData) => {
        const item = itemData.item;

            {/* Creating props of Meal Item */}
            const mealItemProps = {
                title: item.title,
                imageUrl: item.imageUrl,
                complexity: item.complexity,
                affordability: item.affordability,
                duration: item.duration
            };

        return(
            <View>
                <MealItem {...mealItemProps} /> 
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={displayMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItems}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});

export default MealsOverviewScreen;