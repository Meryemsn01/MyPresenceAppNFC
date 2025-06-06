import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { mockScannedStudents } from '../data/mockData'; // Importe les données d'étudiants scannés
import styles from './styles/SessionSummaryViewStyles'; // Importe les styles
import { useMenu } from '../context/MenuContext'; // Pour ouvrir le menu

const SessionSummaryView = ({ navigation, route }) => {
  const { selectedSession } = route.params || {}; // Récupère la session
  // Simuler le nombre total d'étudiants attendus et ceux scannés
  const totalStudentsExpected = 25; // Exemple
  const studentsPresent = mockScannedStudents.length;
  const { openMenu } = useMenu();

  // Composant pour afficher un étudiant scanné
  const ScannedStudentItem = ({ student }) => (
    <View style={styles.studentItem}>
      <MaterialCommunityIcons name="check-circle-outline" size={20} color="#4CAF50" style={styles.itemIcon} />
      <Text style={styles.itemName}>{student.name}</Text>
      <Text style={styles.itemMatricule}>{student.matricule}</Text>
    </View>
  );

  const handleGoBackToScan = () => {
    // Retourne à la page de scan, en s'assurant de passer la session pour reprendre le scan
    navigation.navigate('NFCScanningPage', { selectedSession: selectedSession });
  };

  const handleGoHome = () => {
    // Retourne à la page d'accueil
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* En-tête de page cohérent */}
      <View style={styles.header}>
        <TouchableOpacity onPress={openMenu} style={styles.headerButtonLeft}>
          <MaterialCommunityIcons name="menu" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Résumé de Séance</Text>
        <View style={{ width: 24 }} /> {/* Espace vide à droite */}
      </View>

      {/* Détails de la Session */}
      {selectedSession ? (
        <View style={styles.sessionDetailsCard}>
          <Text style={styles.sessionModuleText}>{selectedSession.moduleName}</Text>
          <Text style={styles.sessionInfoText}>{selectedSession.filiere}</Text>
          <Text style={styles.sessionMetaText}>{selectedSession.date} | {selectedSession.time} | {selectedSession.room}</Text>
        </View>
      ) : (
        <View style={styles.noSessionCard}>
          <Text style={styles.noSessionText}>Aucune session n'était active pour ce résumé.</Text>
        </View>
      )}

      {/* Compteur en temps réel (simulé) */}
      <View style={styles.counterContainer}>
        <Text style={styles.counterTitle}>Présence Actuelle</Text>
        <Text style={styles.counterValue}>
          {studentsPresent} / {totalStudentsExpected}
        </Text>
        <Text style={styles.counterLabel}>Présents / Attendus</Text>
      </View>

      {/* Liste des étudiants scannés et approuvés */}
      <Text style={styles.listSectionTitle}>Étudiants Enregistrés</Text>
      <FlatList
        data={mockScannedStudents}
        renderItem={({ item }) => <ScannedStudentItem student={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.studentList}
        ListEmptyComponent={() => (
          <View style={styles.emptyListContainer}>
            <MaterialCommunityIcons name="account-off-outline" size={50} color="#ccc" />
            <Text style={styles.emptyListText}>Aucun étudiant scanné pour l'instant.</Text>
          </View>
        )}
      />

      {/* Boutons d'action */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.goBackButton} onPress={handleGoBackToScan}>
          <MaterialCommunityIcons name="qrcode-scan" size={20} color="#FFFFFF" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Reprendre le Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.goHomeButton} onPress={handleGoHome}>
          <MaterialCommunityIcons name="home-outline" size={20} color="#FFFFFF" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Aller à l'Accueil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SessionSummaryView;