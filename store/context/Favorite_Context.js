import React, { useState } from 'react'
import { View } from 'react-native';
import { createContext } from 'react';

export const FavoriteContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

// Me children kyna prop eka auto ma pass wenwa,
// FavoriteContextProvider kyna me component eken child components
// Wrap krma.
const FavoriteContextProvider = ({ children }) => {
  // Managing State with React
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealIds((currentIds) => [...currentIds, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealIds((currentIds) => {
      return currentIds.filter((mealId) => mealId !== id)
    });
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return(
    <FavoriteContext.Provider value={value}>
        {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;