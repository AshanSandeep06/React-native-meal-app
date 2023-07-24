import React from 'react'
import { FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import { Text } from 'react-native'
import CategoryGridTitle from '../components/CategoryGridTitle';

import { useNavigation } from '@react-navigation/native';

const CategoriesScreen = ({ navigation }) => {

    const navigationHook = useNavigation();

    const renderCategoryItem = (itemData) => {
        const pressHandler = () => {
            // For navigate to Meals Overview Screen
            navigationHook.navigate("Meals Overview", { categoryId: itemData.item.id });
        };
    
        return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
    };

  return (
    <FlatList
        data={CATEGORIES}
        keyExtractor={(category) => category.id}
        // renderItem={(allCategories) => <Text>{allCategories.item.title}</Text>}
        renderItem={renderCategoryItem}
        // Items render wenakota columns 2 kata render wenne
        numColumns={2}
    />
  )
}

export default CategoriesScreen;