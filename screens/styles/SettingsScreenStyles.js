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
  settingsSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden', // Pour les coins arrondis
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D47A1',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: '#E3F2FD', // Fond bleu très clair
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EEE',
  },
  settingLabel: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
    marginLeft: 10,
  },
  settingIcon: {
    color: '#555',
  },
  pickerWrapper: { // Style pour le Picker dans les paramètres
    flex: 1,
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginLeft: 10,
    overflow: 'hidden',
  },
  pickerStyle: {
    height: 40,
    width: '100%',
    color: '#333',
  },
  pickerItemStyle: {
    fontSize: 15,
  },
  saveButton: {
    backgroundColor: '#0D47A1', // Bleu SUPMTI
    borderRadius: 10,
    margin: 20,
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 7,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;