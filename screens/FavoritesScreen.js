import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { FavoriteContext } from '../store/context/Favorite_Context';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList/MealList';

const FavoritesScreen = props => {
  const favoriteMealContext = useContext(FavoriteContext);
  const allFavoriteMeals = MEALS.filter((meal) => favoriteMealContext.ids.includes(meal.id));

  if(allFavoriteMeals.length === 0){
    return(
      <View style={styles.rootContainer}>
          <Text style={styles.text}>No Favorite Meals Found, Start adding some!</Text>
      </View>
    );
  }

  return (
     <MealList itemData={allFavoriteMeals} />
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default FavoritesScreen;