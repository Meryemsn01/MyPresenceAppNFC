import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Switch, ActivityIndicator, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles/NFCScanningPageStyles'; // Importer les styles
import Toast from 'react-native-toast-message';
import { mockScannedStudents } from '../data/mockData';

const NFCScanningPage = ({ navigation, route }) => {
  const { selectedSession } = route.params || {};

  const [isScanning, setIsScanning] = useState(false);
  const [autoApprove, setAutoApprove] = useState(false);
  const [scanMessage, setScanMessage] = useState("Appuyez pour démarrer le scan NFC"); // Message initial
  const [showInstruction, setShowInstruction] = useState(false); // Pour afficher les instructions après le clic

  useEffect(() => {
    // Si aucune session n'est sélectionnée, rediriger ou afficher un message.
    if (!selectedSession) {
      Alert.alert("Erreur", "Aucune session sélectionnée. Veuillez choisir une session d'abord.");
      navigation.goBack(); // Ou navigation.navigate('Home');
    }
  }, [selectedSession, navigation]);

  const simulateNFCScan = async () => {
    if (isScanning) return;

    setIsScanning(true);
    setShowInstruction(true); // Affiche les instructions de scan
    setScanMessage("Approchez la carte étudiant ici...");

    try {
      const simulatedUID = `UID_${Math.random().toString(36).substring(2, 15)}`;
      await new Promise(resolve => setTimeout(resolve, 2500));

      let mockStudent = null;
      let scanSuccess = true;

      // Simuler des scénarios pour le test
      if (simulatedUID.includes('UID_abc')) { // Simuler un UID connu
        mockStudent = {
          id: 'ETU001',
          name: 'Ahmed Benali',
          matricule: 'M12345',
          nfcId: simulatedUID,
          filiere: selectedSession.filiere, // Assurez-vous que la filière correspond pour auto-approve
          photoUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
          alreadyPresent: false,
          sessionMismatch: false,
        };
      } else if (simulatedUID.includes('UID_xyz')) { // Simuler un étudiant déjà présent
        mockStudent = {
          id: 'ETU002',
          name: 'Fatima Zahra',
          matricule: 'M67890',
          nfcId: simulatedUID,
          filiere: selectedSession.filiere,
          photoUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
          alreadyPresent: true,
          sessionMismatch: false,
        };
      } else { // Étudiant inconnu ou filière non correspondante
        mockStudent = {
          id: 'ETU_Unknown',
          name: 'Inconnu / Non-Conforme',
          matricule: 'N/A',
          nfcId: simulatedUID,
          filiere: 'Non Correspondante',
          photoUrl: 'https://via.placeholder.com/150?text=Inconnu',
          alreadyPresent: false,
          sessionMismatch: true,
        };
      }

      if (autoApprove) {
        if (mockStudent.sessionMismatch) {
          Toast.show({
            type: 'error',
            text1: 'Attention',
            text2: 'Filière ne correspond pas. Vérification manuelle requise.',
            visibilityTime: 4000,
          });
          navigation.navigate('StudentVerificationPage', { scanResult: { success: true, studentData: mockStudent, status: 'manual_approve' }, selectedSession: selectedSession });
        } else if (mockStudent.alreadyPresent) {
          Toast.show({
            type: 'info',
            text1: 'Déjà Présent',
            text2: `${mockStudent.name} est déjà enregistré pour cette session.`,
            visibilityTime: 3000,
          });
          // Ne pas naviguer, rester sur la page de scan pour un nouveau scan
        } else {
          Toast.show({
            type: 'success',
            text1: 'Présence Automatique',
            text2: `${mockStudent.name} marqué(e) présent(e).`,
            visibilityTime: 3000,
          });
          // Ne pas naviguer, rester sur la page de scan pour un nouveau scan
        }
      } else {
        // Approbation manuelle: naviguer vers la page de vérification
        navigation.navigate('StudentVerificationPage', { scanResult: { success: true, studentData: mockStudent, status: 'awaiting_approval' }, selectedSession: selectedSession });
      }

    } catch (error) {
      console.error("Erreur lors de la simulation de scan NFC:", error);
      Toast.show({
        type: 'error',
        text1: 'Erreur de Scan',
        text2: 'Veuillez réessayer ou vérifier la carte.',
        visibilityTime: 3000,
      });
    } finally {
      setIsScanning(false);
      setScanMessage("Scan Terminé. Appuyez pour un nouveau scan.");
      setShowInstruction(false); // Masque les instructions après le scan
    }
  };

  const handleTerminateSession = () => {
    Alert.alert(
      'Terminer la Session',
      'Voulez-vous vraiment terminer cette session de scan ?',
      [
        { text: 'Annuler', style: 'cancel' },
        { text: 'Terminer', onPress: () => {
          // Simuler les étudiants scannés pour le résumé
          // Dans une vraie app, ces données viendraient du backend ou de l'état local
          const scannedStudentsForSummary = mockScannedStudents; // Utilise nos mock data pour l'exemple

          navigation.navigate('SessionSummary', { // <-- Navigue vers la nouvelle page
            selectedSession: selectedSession,
            scannedStudents: scannedStudentsForSummary,
          });
        }
      }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* En-tête de la page */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Scan de Présence</Text>
        <TouchableOpacity onPress={handleTerminateSession} style={styles.terminateButton}>
          <MaterialCommunityIcons name="stop-circle-outline" size={24} color="#FFFFFF" style={{ marginRight: 5 }} />
          <Text style={styles.terminateButtonText}>Terminer</Text>
        </TouchableOpacity>
      </View>

      {/* Détails de la Session */}
      {selectedSession ? (
        <View style={styles.sessionDetailsCard}>
          <Text style={styles.sessionModuleText}>{selectedSession.moduleName}</Text>
          <Text style={styles.sessionInfoText}>{selectedSession.filiere}</Text>
          <View style={styles.sessionMeta}>
            <MaterialCommunityIcons name="calendar-clock-outline" size={16} color="#555" />
            <Text style={styles.sessionMetaText}>{selectedSession.date} à {selectedSession.time}</Text>
          </View>
          <View style={styles.sessionMeta}>
            <MaterialCommunityIcons name="map-marker-outline" size={16} color="#555" />
            <Text style={styles.sessionMetaText}>{selectedSession.room}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.noSessionCard}>
          <Text style={styles.noSessionText}>Aucune session sélectionnée.</Text>
          <TouchableOpacity style={styles.returnHomeButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.returnHomeButtonText}>Retour à l'Accueil</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Zone de Scan NFC - La partie innovante */}
      <View style={styles.scanAreaContainer}>
        <TouchableOpacity
          style={styles.scanButton}
          onPress={simulateNFCScan}
          disabled={isScanning}
        >
          {isScanning ? (
            <ActivityIndicator size="large" color="#0D47A1" />
          ) : (
            <MaterialCommunityIcons name="nfc" size={100} color="#0D47A1" />
          )}
          <Text style={styles.scanInstructionText}>{scanMessage}</Text>
          {showInstruction && !isScanning && (
            <Text style={styles.scanSubInstruction}>Tenez la carte près de l'arrière de l'appareil.</Text>
          )}
        </TouchableOpacity>
        {isScanning && (
          <View style={styles.pulseAnimationContainer}>
            {/* Ces vues simulent l'animation de pulsation */}
            <View style={styles.pulseCircleStatic1} />
            <View style={styles.pulseCircleStatic2} />
          </View>
        )}
      </View>

      {/* Option d'Approbation Automatique */}
      <View style={styles.autoApproveContainer}>
        <Text style={styles.autoApproveLabel}>Approbation automatique</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#00BCD4" }} // Changé en Cyan pour le ON
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