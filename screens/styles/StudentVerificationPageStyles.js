import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Fond clair
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingTop: 50,
    backgroundColor: '#0D47A1',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    position: 'relative',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  headerButtonLeft: {
    padding: 5,
    position: 'absolute',
    left: 15,
    top: '50%',
    transform: [{ translateY: -12 }],
    zIndex: 1,
  },
  studentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
    width: '90%',
    maxHeight: '75%', // Limite la hauteur pour les petits écrans
  },
  studentPhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#00BCD4', // Cyan SUPMTI
  },
  studentName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 5,
  },
  studentDetail: {
    fontSize: 15,
    color: '#555',
    marginBottom: 3,
  },
  filiereContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#E3F2FD', // Bleu clair pour le fond
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#B0BEC5',
  },
  filiereText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginRight: 10,
  },
  warningMessage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D32F2F', // Rouge
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  sessionDetails: {
    marginTop: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#EEE',
    paddingTop: 15,
    width: '100%',
    alignItems: 'center',
  },
  sessionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 8,
  },
  sessionDetailText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 25,
  },
  approveButton: {
    backgroundColor: '#4CAF50', // Vert (Approuver)
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15, // Réduit le padding pour 3 boutons
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    flex: 1, // Pour que les boutons prennent de l'espace égal
    marginHorizontal: 5,
    alignItems: 'center',
  },
  rejectButton: {
    backgroundColor: '#D32F2F', // Rouge (Rejeter)
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#9E9E9E', // Gris (Annuler)
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15, // Légèrement plus petit pour 3 boutons
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noStudentCard: {
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
    width: '90%',
  },
  noStudentText: {
    fontSize: 18,
    color: '#D32F2F',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  returnButton: {
    backgroundColor: '#0D47A1',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  returnButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  // Styles pour la Modal d'emploi du temps
  scheduleModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center', // Centre la modal verticalement
    alignItems: 'center', // Centre la modal horizontalement
  },
  scheduleModalContainer: {
    width: '90%', // Largeur de la modal
    maxHeight: '80%', // Hauteur maximale pour le défilement
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalScheduleItem: {
    backgroundColor: '#F5F5F5', // Fond clair pour chaque item
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#00BCD4', // Cyan
  },
  modalScheduleTextBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 3,
  },
  modalScheduleText: {
    fontSize: 13,
    color: '#555',
  },
  modalEmptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  closeModalButton: {
    backgroundColor: '#FF5722', // Orange
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  closeModalButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;