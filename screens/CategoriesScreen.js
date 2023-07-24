import React from 'react'
import { FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import { Text } from 'react-native'

const CategoriesScreen = () => {
  return (
    <FlatList
        data={CATEGORIES}
        keyExtractor={(category) => category.id}
        renderItem={(allCategories) => <Text>{allCategories.item.title}</Text>}
    />
  )
}

export default CategoriesScreen