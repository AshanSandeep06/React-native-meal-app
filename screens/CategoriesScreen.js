import React from 'react'
import { FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import { Text } from 'react-native'
import CategoryGridTitle from '../components/CategoryGridTitle';

const renderCategoryItem = (itemData) => {
    return(
        <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} />
    );
};

const CategoriesScreen = () => {
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