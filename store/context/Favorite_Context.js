import React from 'react'
import { View } from 'react-native';
import { createContext } from 'react';

export const FavoriteContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

const FavoriteContextProvider = ({ children }) => {
  return(
    <FavoriteContext.Provider>
        {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;