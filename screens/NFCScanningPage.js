import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Switch, ActivityIndicator, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Pour les icônes
import styles from './styles/NFCScanningPageStyles'; // Importer les styles
import Toast from 'react-native-toast-message'; // Pour les messages de feedback

const NFCScanningPage = ({ navigation, route }) => {
  const { selectedSession } = route.params || {}; // Récupère la session sélectionnée depuis la navigation

  const [isScanning, setIsScanning] = useState(false); // État pour l'activité du lecteur NFC
  const [autoApprove, setAutoApprove] = useState(false); // État pour l'option d'approbation automatique
  const [scanMessage, setScanMessage] = useState("Prêt à scanner la carte NFC"); // Message d'instruction

  // Effet pour initialiser le scan (simulé) à l'entrée sur la page
  useEffect(() => {
    // Dans une vraie application, ici on activerait le lecteur NFC de l'appareil
    // Pour la simulation, on ne fait rien auto au début, le prof doit initier.
    // Ou on pourrait auto-démarrer le scan après un petit délai.
    setScanMessage("Approchez la carte étudiant ici");
  }, []);

  // Fonction pour simuler l'activité de scan NFC
  const simulateNFCScan = async () => {
    if (isScanning) return; // Empêche de scanner si déjà en cours

    setIsScanning(true); // Active l'indicateur d'activité du lecteur NFC
    setScanMessage("Scanning en cours...");

    try {
      // Simuler la capture de l'UID de la carte NFC
      const simulatedUID = `UID_${Math.random().toString(36).substring(2, 15)}`; // UID factice
      await new Promise(resolve => setTimeout(resolve, 2500)); // Simuler le délai de scan

      // Simuler l'envoi de l'UID et de l'ID de session au backend
      // Dans la vraie API, ce serait un fetch POST vers /api/presences/scan
      // qui renverrait les données de l'étudiant et/ou un statut de présence.

      let scanResult = { success: true, studentData: {}, message: 'Étudiant scanné avec succès.' };
      let mockStudent = null;

      // Pour la démonstration, simuler des données étudiant différentes
      if (simulatedUID.includes('UID_abc')) { // Simuler un UID connu
        mockStudent = {
          id: 'ETU001',
          name: 'Ahmed Benali',
          matricule: 'M12345',
          nfcId: simulatedUID,
          filiere: 'Génie Informatique',
          photoUrl: 'https://randomuser.me/api/portraits/men/1.jpg', // Photo factice
          alreadyPresent: false, // Simuler s'il est déjà présent
          sessionMismatch: false, // Simuler si la filière ne correspond pas
        };
      } else {
        mockStudent = { // Un étudiant inconnu ou qui ne correspond pas
          id: 'ETU_Unknown',
          name: 'Étudiant Inconnu',
          matricule: 'N/A',
          nfcId: simulatedUID,
          filiere: 'Inconnue',
          photoUrl: 'https://via.placeholder.com/150?text=Inconnu',
          alreadyPresent: false,
          sessionMismatch: true,
        };
      }

      scanResult.studentData = mockStudent;

      if (autoApprove && scanResult.success) { // Si l'approbation automatique est activée
        // Ici, on simulerait la validation automatique de la présence
        // avec des critères (ex: correspondance filière/session)
        if (mockStudent.sessionMismatch) {
          Toast.show({
            type: 'error',
            text1: 'Scan Réussi, Approbation Manuelle Requise',
            text2: 'Filière de l\'étudiant ne correspond pas à la session.',
            visibilityTime: 4000,
          });
          // Ne pas naviguer, ou naviguer vers la page de vérification pour intervention manuelle
          navigation.navigate('StudentVerificationPage', { scanResult: { success: true, studentData: mockStudent, status: 'manual_approve' }, selectedSession: selectedSession });
        } else if (mockStudent.alreadyPresent) {
          Toast.show({
            type: 'info',
            text1: 'Étudiant Déjà Présent',
            text2: `${mockStudent.name} est déjà enregistré.`,
            visibilityTime: 3000,
          });
          // Rester sur cette page ou retourner au scan
          // Ne pas naviguer vers la page de vérification
        } else {
          // Approbation automatique réussie
          Toast.show({
            type: 'success',
            text1: 'Approbation Automatique Réussie',
            text2: `${mockStudent.name} a été marqué présent.`,
            visibilityTime: 3000,
          });
          // Retourner immédiatement au scan après l'approbation auto réussie
          // Pas de navigation vers la page de vérification
        }
      } else {
        // Navigue vers la "Page de Vérification et d'Approbation de l'Étudiant"
        navigation.navigate('StudentVerificationPage', { scanResult: { success: true, studentData: mockStudent, status: 'awaiting_approval' }, selectedSession: selectedSession });
      }

    } catch (error) {
      console.error("Erreur lors de la simulation de scan NFC:", error);
      Toast.show({
        type: 'error',
        text1: 'Erreur de Scan NFC',
        text2: 'Veuillez réessayer ou vérifier la carte.',
        visibilityTime: 3000,
      });
    } finally {
      setIsScanning(false); // Désactive l'indicateur
      setScanMessage("Prêt à scanner la carte NFC");
    }
  };

  const handleTerminateSession = () => {
    // Logique pour terminer la session
    // Peut-être afficher un résumé ou revenir à la page d'accueil
    Alert.alert(
      'Terminer la Session',
      'Voulez-vous vraiment terminer cette session de scan ?',
      [
        { text: 'Annuler', style: 'cancel' },
        { text: 'Terminer', onPress: () => navigation.navigate('Home') } // Retourne à l'accueil
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Scan NFC</Text>
        <TouchableOpacity onPress={handleTerminateSession} style={styles.terminateButton}>
          <Text style={styles.terminateButtonText}>Terminer la Session</Text>
        </TouchableOpacity>
      </View>

      {selectedSession ? (
        <View style={styles.sessionDetailsCard}>
          <Text style={styles.sessionDetailTextBold}>{selectedSession.moduleName}</Text>
          <Text style={styles.sessionDetailText}>{selectedSession.date} | {selectedSession.time}</Text>
          <Text style={styles.sessionDetailText}>{selectedSession.room} | {selectedSession.filiere}</Text>
        </View>
      ) : (
        <View style={styles.noSessionCard}>
          <Text style={styles.noSessionText}>Aucune session sélectionnée.</Text>
          <Button title="Retour à l'Accueil" onPress={() => navigation.navigate('Home')} color="#FF5722"/>
        </View>
      )}

      <View style={styles.scanArea}>
        {/* Indicateur visuel de l'activité du lecteur NFC */}
        <MaterialCommunityIcons
          name={isScanning ? "nfc-search" : "nfc"} // Icône change si scanning
          size={isScanning ? 120 : 100} // Taille change si scanning
          color={isScanning ? "#00BCD4" : "#0D47A1"} // Couleur change si scanning
          style={isScanning ? styles.scanningIcon : styles.nfcIcon} // Style d'animation pulsante
        />
        {/* Message visuel clair */}
        <Text style={styles.scanMessageText}>{scanMessage}</Text>
        <TouchableOpacity
          style={styles.simulateScanButton}
          onPress={simulateNFCScan}
          disabled={isScanning}
        >
          <Text style={styles.simulateScanButtonText}>
            {isScanning ? "Scan en cours..." : "Simuler Scan NFC"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Option d'Approbation Automatique */}
      <View style={styles.autoApproveContainer}>
        <Text style={styles.autoApproveLabel}>Approbation automatique</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#FF5722" }} // Couleurs de la bascule
          thumbColor={autoApprove ? "#0D47A1" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setAutoApprove}
          value={autoApprove}
        />
      </View>
    </SafeAreaView>
  );
};

export default NFCScanningPage;