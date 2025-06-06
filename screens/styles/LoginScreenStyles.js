// screens/styles/LoginScreenStyles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 50,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20, // Ajustez la marge pour que le logo soit au-dessus de l'indicateur NFC
  },
  // NOUVEAUX STYLES POUR L'INDICATEUR GÉOMÉTRIQUE D'IMPULSION NFC
  nfcPulseIndicator: {
    width: 150, // Taille de la zone de l'indicateur
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, // Espace sous l'indicateur
    position: 'relative', // Nécessaire pour positionner les anneaux en absolu
  },
  pulseRing: {
    position: 'absolute', // Positionne les anneaux les uns sur les autres
    borderWidth: 2, // Épaisseur de la bordure des anneaux
    borderRadius: 999, // Rend les bordures circulaires (ou utilisez 0 pour des carrés)
    borderColor: 'rgba(255, 255, 255, 0.4)', // Couleur blanche semi-transparente
    justifyContent: 'center',
    alignItems: 'center',
  },
  pulseRingSmall: {
    width: 70,
    height: 70,
    opacity: 1, // Le plus petit est le plus visible
  },
  pulseRingMedium: {
    width: 100,
    height: 100,
    opacity: 0.6, // Moins visible
  },
  pulseRingLarge: {
    width: 130,
    height: 130,
    opacity: 0.3, // Encore moins visible
  },
  nfcCenterIcon: {
    position: 'absolute', // L'icône NFC sera au centre
    // Aucune taille ici car elle est définie dans le composant (<MaterialCommunityIcons name="nfc" size={24} ... />)
  },
  // FIN NOUVEAUX STYLES

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 20,
    height: 60,
    borderWidth: 0,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    borderRightColor: 'rgba(255, 255, 255, 0.2)',
  },
  inputFocused: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderColor: '#FF5722',
    borderTopColor: 'rgba(255, 255, 255, 0.4)',
    borderLeftColor: 'rgba(255, 255, 255, 0.4)',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
  },
  icon: {
    color: '#FFFFFF',
    marginRight: 15,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Roboto',
    paddingVertical: 0,
  },
  loginButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#FF5722',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    shadowColor: 'rgba(0,0,0,0.6)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textTransform: 'uppercase',
  },
  spinner: {
    marginTop: 20,
  },
  helpText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 16,
    marginTop: 40,
    fontFamily: 'Roboto',
    textDecorationLine: 'underline',
  },
});

export default styles;