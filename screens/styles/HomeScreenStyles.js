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
  headerGreeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSettingsIcon: {
    // Style si besoin
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
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Fond semi-transparent
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
  // Styles pour les "Capsules de Statistiques" (Anciennement filiereCard)
  filiereCapsule: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20, // Très arrondi
    padding: 15,
    marginRight: 15,
    width: 200, // Largeur légèrement augmentée
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
    color: '#FF5722', // Orange pour le taux d'absence
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
    overflow: 'hidden', // Pour que la barre de progression soit coupée
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

  // Styles pour les "Fiches de Mission" (Anciennement sessionItem)
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
    overflow: 'hidden', // Pour l'indicateur latéral
  },
  missionStatusIndicator: {
    width: 8, // Largeur de l'indicateur latéral
    // La couleur est définie dynamiquement
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
    flex: 1, // Pour que le texte ne déborde pas
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
  },
});

export default styles;