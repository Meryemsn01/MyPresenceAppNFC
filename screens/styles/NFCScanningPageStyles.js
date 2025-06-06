import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#0D47A1',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  terminateButton: {
    backgroundColor: '#FF5722',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  terminateButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  sessionDetailsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 6,
    borderLeftWidth: 5,
    borderLeftColor: '#00BCD4',
  },
  sessionModuleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 5,
  },
  sessionInfoText: {
    fontSize: 15,
    color: '#555',
    marginBottom: 3,
  },
  sessionMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    opacity: 0.8,
  },
  sessionMetaText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 8,
  },
  noSessionCard: {
    backgroundColor: '#FFF3E0',
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 6,
    borderLeftWidth: 5,
    borderLeftColor: '#FF5722',
  },
  noSessionText: {
    fontSize: 16,
    color: '#D84315',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  returnHomeButton: {
    backgroundColor: '#0D47A1',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  returnHomeButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  scanAreaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#E3F2FD', // Fond très clair pour la zone de scan
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 7,
    position: 'relative', // Pour les animations de pulsation
  },
  scanButton: { // Le grand bouton cliquable qui déclenche le scan
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanInstructionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 20, // Espace sous l'icône NFC
  },
  scanSubInstruction: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  pulseAnimationContainer: { // Conteneur pour les anneaux pulsants
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pulseCircleStatic1: { // Premier cercle statique (simule une partie de l'animation)
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: 'rgba(0, 188, 212, 0.4)', // Cyan semi-transparent
    opacity: 0.7,
  },
  pulseCircleStatic2: { // Deuxième cercle statique
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'rgba(0, 188, 212, 0.2)', // Cyan plus transparent
    opacity: 0.5,
  },
  autoApproveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginHorizontal: 20,
    padding: 15,
    marginBottom: 20, // Plus de marge en bas
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  autoApproveLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
  },

   menuOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Fond semi-transparent foncé
    flexDirection: 'row', // Important pour aligner le menu à gauche
    justifyContent: 'flex-start', // Pousse le menu sur le côté gauche de l'écran
  },
  menuContainer: {
    width: '75%', // Largeur du menu latéral (ajustez si besoin, ex: 75% de l'écran)
    maxWidth: 300, // Largeur maximale pour les grands écrans (tablettes)
    backgroundColor: '#FFFFFF', // Fond du menu en blanc
    height: '100%', // Prend toute la hauteur
    paddingTop: 60, // Espace pour la barre de statut sur les appareils iOS/Android modernes
    paddingHorizontal: 20,
    // Ombres pour donner un effet de "profondeur" au menu qui sort
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 0 }, // Ombre forte sur le côté droit
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 15, // Ombre pour Android
  },
  menuHeader: {
    marginBottom: 30,
    borderBottomWidth: StyleSheet.hairlineWidth, // Ligne fine pour séparateur
    borderBottomColor: '#EEE',
    paddingBottom: 15,
    alignItems: 'flex-start', // Texte aligné à gauche
  },
  menuHeaderTitle: {
    fontSize: 24, // Plus grand
    fontWeight: 'bold',
    color: '#0D47A1', // Bleu SUPMTI
    marginBottom: 5,
  },
  menuHeaderSubtitle: {
    fontSize: 15,
    color: '#555',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18, // Plus d'espace vertical pour les items
    paddingHorizontal: 10,
    borderRadius: 12, // Plus arrondi pour un look Soft UI
    marginBottom: 8, // Espacement entre les items
    backgroundColor: 'transparent', // Fond transparent par défaut
    // Ombre douce pour l'effet Soft UI au survol/pression
    shadowColor: 'rgba(0,0,0,0.05)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  menuIcon: {
    marginRight: 15,
  },
  menuItemText: {
    fontSize: 17, // Légèrement plus grand
    fontWeight: '500',
    color: '#212121',
  },
  menuSeparator: {
    height: 1,
    backgroundColor: '#EEE',
    marginVertical: 15,
  },

  // --- FIN STYLES DU MENU LATÉRAL ---
});

export default styles;