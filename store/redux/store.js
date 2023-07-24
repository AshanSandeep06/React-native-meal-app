import { configureStore } from '@reduxjs/toolkit';
import React from 'react'
import { View } from 'react-native';
import favoriteReducer from './favoriteSlice'

// Our Common Redux Store
export const store = configureStore({
  // Define reducers
    reducer: {
      favoriteMeals: favoriteReducer
    }
});