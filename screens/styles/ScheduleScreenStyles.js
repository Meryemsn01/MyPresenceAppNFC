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
  // Styles pour les boutons de filtrage
  filterButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 15,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  filterButtonActive: {
    backgroundColor: '#00BCD4', // Cyan SUPMTI pour le bouton actif
  },
  filterButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#555',
  },
  filterButtonTextActive: {
    color: '#FFFFFF',
  },
  // Styles pour la liste et les cartes de l'emploi du temps
  scheduleList: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  scheduleCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 6,
    overflow: 'hidden', // Pour les coins arrondis
  },
  scheduleTime: {
    width: 80, // Largeur fixe pour la section horaire
    backgroundColor: '#E0F2F7', // Fond bleu clair
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRightWidth: StyleSheet.hairlineWidth, // Séparateur
    borderRightColor: '#B0BEC5',
  },
  timeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0D47A1', // Bleu SUPMTI
  },
  timeSeparator: {
    fontSize: 12,
    color: '#555',
    marginVertical: 2,
  },
  scheduleDetails: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  scheduleModule: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 5,
  },
  scheduleInfo: {
    fontSize: 13,
    color: '#555',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
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

// ... (vos styles existants) ...

  // Styles pour la liste et les cartes de l'emploi du temps
  scheduleList: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  // ... (vos autres styles) ...

  // Style pour le texte de la période affichée
  displayedPeriodText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
    textAlign: 'center',
    marginBottom: 15,
    marginTop: -5, // Pour rapprocher un peu des boutons de filtre
  },

  // screens/styles/ScheduleScreenStyles.js

// ... (vos styles existants) ...

  scheduleDetails: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  scheduleModule: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 5,
  },
  scheduleInfo: {
    fontSize: 13,
    color: '#555',
    flexDirection: 'row', // Pour l'icône et le texte sur la même ligne
    alignItems: 'center',
    marginTop: 5, // Ajoute un peu d'espace si nécessaire
  },
  scheduleDate: { // NOUVEAU STYLE POUR LA DATE
    fontSize: 13,
    color: '#555',
    marginBottom: 5, // Espace sous la date
    flexDirection: 'row',
    alignItems: 'center',
  },
  // ... (le reste de vos styles) ...
});

export default styles;

