// screens/styles/HomeScreenStyles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Fond clair
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: '#0D47A1',
  },
  headerGradient: {
    paddingTop: 50,
    paddingBottom: 25,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuButton: { // Style pour le bouton du menu
    paddingRight: 15,
    paddingVertical: 5,
  },
  headerGreeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'center',
  },
  headerSettingsIcon: {
    marginLeft: 15,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 20,
  },
  todayStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
  },
  statBox: {
    alignItems: 'center',
  },
  statBoxValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  statBoxLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 2,
  },
  scrollViewContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 15,
    marginTop: 10,
    paddingLeft: 5,
  },
  filiereList: {
    paddingRight: 10,
    marginBottom: 30,
  },
  filiereCapsule: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 15,
    marginRight: 15,
    width: 200,
    height: 140,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
    justifyContent: 'space-between',
  },
  capsuleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  capsuleName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D47A1',
  },
  capsuleRate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF5722',
  },
  capsuleModule: {
    fontSize: 13,
    color: '#555',
  },
  progressBarBackground: {
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    marginTop: 10,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  capsuleProgressText: {
    fontSize: 12,
    color: '#777',
    marginTop: 5,
    textAlign: 'right',
  },
  missionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: 'row',
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
    overflow: 'hidden',
  },
  missionStatusIndicator: {
    width: 8,
  },
  missionContent: {
    flex: 1,
    padding: 15,
  },
  missionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  missionModule: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
    flex: 1,
    marginRight: 10,
  },
  missionStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  missionStatusText: {
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  missionFiliere: {
    fontSize: 14,
    color: '#0D47A1',
    marginBottom: 10,
    fontWeight: '500',
  },
  missionInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  missionInfoIcon: {
    marginRight: 10,
    color: '#888',
  },
  missionInfoText: {
    fontSize: 13,
    color: '#555',
  },
  selectMissionButton: {
    backgroundColor: '#0D47A1',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 7,
  },
  selectMissionButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 5,
  },

  // Styles pour le menu latéral simulé (Modal)
  menuOverlay: {
    flex: 1, // On garde flex:1 pour qu'il remplisse le parent de la Modal
    backgroundColor: 'rgba(0,0,0,0.5)',
    // Positionnement absolu pour s'assurer qu'il couvre tout l'écran
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // Pour que le menu soit à gauche et le reste de l'overlay transparent
    flexDirection: 'row',
    justifyContent: 'flex-start', // Pousse le menu à gauche
    alignItems: 'flex-start',
  },
  menuContainer: {
    width: '75%', // Ou 300, si vous voulez une largeur fixe
    maxWidth: 300,
    backgroundColor: '#FFFFFF',
    height: '100%',
    paddingTop: 60,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 15,
    borderRightWidth: 1,
    borderRightColor: 'rgba(0, 188, 212, 0.2)',
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'column', // Empile les éléments du menu
    justifyContent: 'space-between', // Pousse l'en-tête et la déconnexion aux extrémités
  },
  menuHeader: { // Le LinearGradient qui sert d'en-tête de menu
    paddingTop: 60, // Espace pour la barre de statut
    paddingBottom: 25,
    paddingHorizontal: 20,
    marginBottom: 20, // Espace sous l'en-tête du menu
    justifyContent: 'flex-end', // Aligne le contenu en bas du header
    // Retirez les bordures/ombres que j'ai mis dans le précédent menuHeader ici
    // borderBottomWidth: StyleSheet.hairlineWidth, // Pas de bordure par défaut
    // borderBottomColor: '#EEE',
  },
  // Style optionnel pour une icône de profil dans le menuHeader
  // profileIcon: {
  //   marginBottom: 10,
  // },
  menuHeaderTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF', // Texte blanc sur dégradé
    marginBottom: 5,
  },
  menuHeaderSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)', // Texte blanc transparent
  },
  menuSection: {
    paddingHorizontal: 20, // Padding sur les côtés des items de menu
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15, // Espace vertical
    paddingHorizontal: 10,
    borderRadius: 8, // Coins légèrement arrondis pour un look plus pro
    marginBottom: 5, // Espacement entre les items
    backgroundColor: 'transparent', // Assurez-vous que c'est transparent
    // Pas d'ombres directes sur les items de menu pour un look plus simple
  },
  // Style pour le bouton "Déconnexion" au survol ou à l'appui
  menuItemPressed: {
    backgroundColor: 'rgba(13, 71, 161, 0.1)', // Légère teinte bleue au press (Bleu SUPMTI 10% opacité)
  },
  menuIcon: {
    marginRight: 15,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#212121', // Texte sombre
  },
  menuSeparator: {
    height: 1,
    backgroundColor: '#EEE', // Séparateur gris clair
    marginVertical: 15,
    marginHorizontal: 20, // Alignement avec le padding des items
  },
  logoutItem: {
    // Pas de background color par défaut, sera géré par menuItemPressed
  },
  logoutText: {
    color: '#D32F2F', // Rouge SUPMTI
    fontWeight: 'bold',
  },
menuContainer: {
    width: '75%',
    maxWidth: 300,
    backgroundColor: '#FFFFFF',
    height: '100%', // Assurez-vous que cette ligne est présente et correcte
    // Pas de padding top ici car le menuHeader gère ça
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 15,
    borderRightWidth: 1,
    borderRightColor: 'rgba(0, 188, 212, 0.2)',
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    // AJOUTEZ CES DEUX PROPRIÉTÉS POUR LA FLEXIBILITÉ
    flexDirection: 'column', // Aligne les enfants verticalement
    justifyContent: 'space-between', // Pousse le premier enfant en haut, le dernier en bas
  },
  menuHeader: {
    paddingTop: 60,
    paddingBottom: 25,
    paddingHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'flex-end',
    // Retirez les bordures/ombres que j'ai mis dans le précédent menuHeader ici
  },
  menuItemsContainer: { // NOUVEAU STYLE
    flex: 1, // Prend tout l'espace disponible pour pousser la déconnexion vers le bas
    paddingHorizontal: 20, // Appliquez le padding ici pour les items
  },
  // ... (vos styles existants pour menuHeaderTitle, menuHeaderSubtitle, menuItem, menuIcon, menuItemText) ...

  menuSeparator: {
    height: 1,
    backgroundColor: '#EEE',
    marginVertical: 15,
    marginHorizontal: 20, // Alignement avec le padding des items
  },
  logoutItem: {
    // Style pour l'item de déconnexion, il aura son propre padding horizontal
    paddingHorizontal: 20, // Pour aligner avec les autres items
    marginBottom: 20, // Marge en bas pour le pied du menu
    // Pas de background color par défaut, sera géré par menuItemPressed
  },
  logoutText: {
    color: '#D32F2F',
    fontWeight: 'bold',
  },
});

export default styles;