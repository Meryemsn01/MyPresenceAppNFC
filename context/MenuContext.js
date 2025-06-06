// context/MenuContext.js
import React, { createContext, useState, useContext } from 'react';

// 1. Crée le Contexte
export const MenuContext = createContext();

// 2. Crée le Fournisseur (Provider) qui gérera l'état du menu
export const MenuProvider = ({ children }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const openMenu = () => {
    setIsMenuVisible(true);
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  // Les valeurs qui seront fournies à tous les consommateurs du contexte
  const contextValue = {
    isMenuVisible,
    openMenu,
    closeMenu,
  };

  return (
    <MenuContext.Provider value={contextValue}>
      {children} {/* Tous les composants enfants auront accès à ce contexte */}
    </MenuContext.Provider>
  );
};

// Hook personnalisé pour une utilisation plus facile
export const useMenu = () => {
  return useContext(MenuContext);
};