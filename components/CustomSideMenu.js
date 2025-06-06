// components/CustomSideMenu.js - CODE CORRECT ET PROPRE

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, Alert } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; // Importez LinearGradient
import Toast from 'react-native-toast-message';
import { useMenu } from '../context/MenuContext';
import { useNavigation } from '@react-navigation/native'; // Pour la navigation

// Styles du menu latéral (intégrés ici pour éviter les erreurs de chemin)
const customMenuStyles = StyleSheet.create({
  menuOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)', // Fond semi-transparent foncé
    flexDirection: 'row', // Pour aligner le menu à gauche
    justifyContent: 'flex-start', // Pousse le menu sur le côté gauche de l'écran
    alignItems: 'stretch', // S'étend sur toute la hauteur
  },
  menuContainer: {
    width: '75%', // Largeur du menu latéral
    maxWidth: 300, // Largeur maximale pour les grands écrans (tablettes)
    backgroundColor: '#FFFFFF', // Fond du menu en blanc
    height: '100%', // Prend toute la hauteur
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 0 }, // Ombre forte sur le côté droit
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 15,
    // Bordure subtile ou ombre pour un effet de "découpe"
    borderRightWidth: 1, // Ligne très fine sur le bord droit
    borderRightColor: 'rgba(0, 188, 212, 0.3)', // Couleur cyan subtile pour la bordure
    // Forme innovante: un coin supérieur/inférieur arrondi
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden', // Cache les débordements des arrondis
    // Pour les éléments internes (header, items, logout)
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  menuHeader: {
    paddingTop: 60, // Espace pour la barre de statut et padding interne
    paddingBottom: 25,
    paddingHorizontal: 20,
    justifyContent: 'flex-end', // Aligne le contenu en bas du header
    // Le dégradé sera appliqué directement dans le JSX
  },
  menuHeaderTitle: {
    fontSize: 26, // Plus grand et percutant
    fontWeight: 'bold',
    color: '#FFFFFF', // Texte blanc sur dégradé
    marginBottom: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.1)', // Légère ombre pour le relief
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  menuHeaderSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  menuItemsWrapper: { // Conteneur pour les items du menu principal
    flex: 1, // Prend tout l'espace disponible pour pousser la déconnexion
    paddingTop: 20, // Espace après le header
    paddingHorizontal: 20, // Padding pour les items
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 12, // Items plus arrondis
    marginBottom: 10, // Espacement entre les items
    backgroundColor: 'transparent',
    // Ombres pour un effet de "bouton" subtil
    shadowColor: 'rgba(0,0,0,0.08)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  menuItemText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#212121',
  },
  menuIcon: {
    marginRight: 15,
  },
  menuSeparator: {
    height: StyleSheet.hairlineWidth, // Ligne très fine
    backgroundColor: 'rgba(0, 188, 212, 0.3)', // Couleur cyan pour le séparateur, comme une ligne d'énergie
    marginVertical: 18, // Plus d'espace vertical
    marginHorizontal: 0, // Pas de marge horizontale car le padding est sur le wrapper
  },
  logoutItem: {
    // Style pour l'item de déconnexion
    paddingHorizontal: 20, // Pour aligner avec les autres items
    paddingBottom: 20, // Espace avec le bas du menu
  },
  logoutText: {
    color: '#D32F2F', // Rouge SUPMTI
    fontWeight: 'bold',
  },
});


const CustomSideMenu = () => {
  const { isMenuVisible, closeMenu } = useMenu();
  const navigation = useNavigation();

  const handleLogout = () => {
      Alert.alert(
          'Déconnexion',
          'Êtes-vous sûr de vouloir vous déconnecter ?',
          [
              { text: 'Annuler', style: 'cancel' },
              { text: 'Oui', onPress: () => {
                  console.log('Déconnexion simulée');
                  Toast.show({
                      type: 'info',
                      text1: 'Déconnecté',
                      text2: 'Vous avez été déconnecté avec succès.',
                      visibilityTime: 2000,
                  });
                  closeMenu();
                  navigation.navigate('Login');
              }}
          ]
      );
  };

  const handleMenuItemPress = (screenName) => {
      closeMenu();
      navigation.navigate('AppContent', { screen: screenName });
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isMenuVisible}
      onRequestClose={closeMenu}
    >
      <Pressable style={customMenuStyles.menuOverlay} onPress={closeMenu}>
        <View style={customMenuStyles.menuContainer} onStartShouldSetResponder={() => true}>
          {/* En-tête du menu avec dégradé */}
          <LinearGradient
            colors={['#0D47A1', '#00BCD4']} // Dégradé de l'en-tête cohérent avec l'app
            style={customMenuStyles.menuHeader}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={customMenuStyles.menuHeaderTitle}>Menu Professeur</Text>
            <Text style={customMenuStyles.menuHeaderSubtitle}>prof@supmti.ma</Text>
            {/* Vous pouvez ajouter une icône de profil ici */}
            {/* <MaterialCommunityIcons name="account-circle-outline" size={50} color="#FFFFFF" style={customMenuStyles.profileIcon} /> */}
          </LinearGradient>

          {/* Conteneur des items du menu principal */}
          <View style={customMenuStyles.menuItemsWrapper}>
            <TouchableOpacity style={customMenuStyles.menuItem} onPress={() => handleMenuItemPress('Home')}>
              <MaterialCommunityIcons name="view-dashboard-outline" size={24} color="#0D47A1" style={customMenuStyles.menuIcon} />
              <Text style={customMenuStyles.menuItemText}>Tableau de Bord</Text>
            </TouchableOpacity>
            <TouchableOpacity style={customMenuStyles.menuItem} onPress={() => handleMenuItemPress('StudentsList')}>
              <MaterialCommunityIcons name="account-group-outline" size={24} color="#0D47A1" style={customMenuStyles.menuIcon} />
              <Text style={customMenuStyles.menuItemText}>Liste des Étudiants</Text>
            </TouchableOpacity>

            <TouchableOpacity style={customMenuStyles.menuItem} onPress={() => handleMenuItemPress('Schedule')}>
              <MaterialCommunityIcons name="calendar-month-outline" size={24} color="#0D47A1" style={customMenuStyles.menuIcon} />
              <Text style={customMenuStyles.menuItemText}>Emploi du Temps</Text>
            </TouchableOpacity>

            <TouchableOpacity style={customMenuStyles.menuItem} onPress={() => handleMenuItemPress('Settings')}>
              <Feather name="settings" size={24} color="#0D47A1" style={customMenuStyles.menuIcon} />
              <Text style={customMenuStyles.menuItemText}>Paramètres</Text>
            </TouchableOpacity>

            <View style={customMenuStyles.menuSeparator} />
          </View>

          {/* Section Déconnexion */}
          <TouchableOpacity style={[customMenuStyles.menuItem, customMenuStyles.logoutItem]} onPress={handleLogout}>
            <MaterialCommunityIcons name="logout" size={24} color="#D32F2F" style={customMenuStyles.menuIcon} />
            <Text style={[customMenuStyles.menuItemText, customMenuStyles.logoutText]}>Déconnexion</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};

export default CustomSideMenu;