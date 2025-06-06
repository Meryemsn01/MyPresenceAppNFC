// screens/styles/StudentsListScreenStyles.js - CODE CORRECT ET PROPRE

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // <-- Gardez ceci pour le centrage vertical
    paddingHorizontal: 15,
    paddingVertical: 15, // <-- Ajustez ce padding vertical pour la hauteur globale de l'en-tête
    paddingTop: 50, // <-- GARDONS CE PADDING TOP pour décaler de la barre de statut
    backgroundColor: '#0D47A1',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    // position: 'relative', // Plus nécessaire si les boutons ne sont plus absolument positionnés
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 40, // <-- AJOUTEZ UN PADDING HORIZONTAL pour éviter que le texte ne se superpose aux boutons
  },
   headerButtonLeft: { // Bouton de menu (burger) - à gauche
    padding: 5,
    position: 'absolute', // <-- GARDONS LE POSITIONNEMENT ABSOLU
    left: 15,
    top: '50%', // <-- Centre verticalement
    transform: [{ translateY: -12 }], // <-- Ajuste précisément au centre (pour une icône de 24px)
    zIndex: 1, // Assure qu'il est cliquable
  },
  // headerButtonRight: { ... } - Supprimez ce style si vous ne l'utilisez plus dans le JSX
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 15,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: '#333',
  },
  filterContainer: {
    marginHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#FFFFFF', // Ajouté pour le débogage et visibilité du Picker
    borderRadius: 10,
    paddingVertical: 5, // Ajoute un peu de padding vertical autour du Picker
  },
  pickerWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 45,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    overflow: 'hidden',
    position: 'relative',
  },
  pickerStyle: {
    height: 45,
    width: '100%',
    color: '#333',
  },
  pickerItemStyle: {
    fontSize: 16,
    color: '#333',
  },
  pickerIcon: {
    position: 'absolute',
    right: 15,
    top: 12,
    zIndex: 1,
  },
  studentList: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  studentCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  studentPhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#00BCD4',
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 3,
  },
  studentDetail: {
    fontSize: 14,
    color: '#555',
  },
  emptyListContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  emptyListText: {
    fontSize: 16,
    color: '#888',
    marginTop: 10,
  },
});

export default styles;