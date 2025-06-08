import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, TextInput, ActivityIndicator, Alert, Switch } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useMenu } from '../context/MenuContext';
import { mockSessionStudentsAttendance } from '../data/mockData'; // Importe les données d'étudiants pour la session
import styles from './styles/ManualAttendanceScreenStyles'; // Importer les styles
import Toast from 'react-native-toast-message';

const ManualAttendanceScreen = ({ navigation, route }) => {
  const { selectedSession } = route.params || {}; // Récupère la session active
  const { openMenu } = useMenu();

  const [studentsAttendance, setStudentsAttendance] = useState([]); // Liste des étudiants avec statut de présence
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false); // État pour l'enregistrement

  useEffect(() => {
    // Simuler la récupération de la liste des étudiants pour la session
    const fetchSessionStudents = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Délai de simulation
      // Pour la simulation, on utilise des données fixes, mais en vrai,
      // on filtrerait ou récupérerait les étudiants spécifiques à la session.
      setStudentsAttendance(mockSessionStudentsAttendance.map(student => ({
        ...student,
        isAbsent: student.status === 'Absent' // Ajoute une prop isAbsent pour le Switch
      })));
      setFilteredStudents(mockSessionStudentsAttendance.map(student => ({
        ...student,
        isAbsent: student.status === 'Absent'
      })));
      setIsLoading(false);
    };
    fetchSessionStudents();
  }, [selectedSession]);

  // Effet pour filtrer les étudiants lorsque la recherche change
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredStudents(studentsAttendance);
    } else {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = studentsAttendance.filter(student =>
        student.name.toLowerCase().includes(lowercasedQuery) ||
        student.matricule.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredStudents(filtered);
    }
  }, [searchQuery, studentsAttendance]);

  // Gérer le changement de statut de présence
  const toggleAttendance = (studentId) => {
    setStudentsAttendance(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId ? { ...student, isAbsent: !student.isAbsent } : student
      )
    );
  };

  // Simuler l'enregistrement des modifications
  const handleSaveChanges = async () => {
    setIsSaving(true);
    // ###############################################################
    // ################ POINT DE REMPLACEMENT POUR L'API RÉELLE ################
    // ###############################################################
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simuler délai API
    // const response = await fetch('/api/presences/manual-update', {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     sessionId: selectedSession.id,
    //     updates: studentsAttendance.map(s => ({ studentId: s.id, status: s.isAbsent ? 'Absent' : 'Présent' }))
    //   })
    // });
    // ###############################################################
    // ################ FIN DU POINT DE REMPLACEMENT #################
    // ###############################################################

    Toast.show({
      type: 'success',
      text1: 'Modifications enregistrées',
      text2: 'La présence a été mise à jour avec succès (simulée).',
      visibilityTime: 3000,
    });
    setIsSaving(false);
    navigation.goBack(); // Retourne à la page de scan ou résumé
  };

  // Composant pour un item étudiant dans la liste
  const StudentAttendanceItem = ({ student, onToggleAttendance }) => (
    <View style={styles.studentAttendanceCard}>
      <View style={styles.studentInfoLeft}>
        <Text style={styles.studentName}>{student.name}</Text>
        <Text style={styles.studentDetail}>{student.matricule}</Text>
      </View>
      <View style={styles.attendanceToggleContainer}>
        <Text style={styles.attendanceStatusText}>{student.isAbsent ? 'Absent' : 'Présent'}</Text>
        <Switch
          trackColor={{ false: "#FF5722", true: "#00C851" }} // Orange pour Absent, Vert pour Présent
          thumbColor={student.isAbsent ? "#D32F2F" : "#4CAF50"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => onToggleAttendance(student.id)}
          value={!student.isAbsent} // Le switch est 'on' si Présent (non Absent)
          disabled={isSaving}
        />
      </View>
    </View>
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0D47A1" />
        <Text style={styles.loadingText}>Chargement des étudiants de la session...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* En-tête de page */}
            <View style={styles.header}>
        {/* Bouton de menu (à gauche) */}
            <TouchableOpacity onPress={openMenu} style={styles.menuButtonLeft}> {/* Nouveau style pour le bouton menu à gauche */}
              <Feather name="menu" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            {/* Titre dynamique (centré) */}
        <Text style={styles.headerTitle}>Présence Manuelle</Text>
            {/* Espace vide pour centrer le titre si le bouton de menu à gauche est le seul élément de bord */}
            <View style={{ width: 24 }} /> {/* Gardez cet espace pour centrer le titre par rapport au bouton de menu */}
        </View>

      {/* Détails de la session */}
      {selectedSession ? (
        <View style={styles.sessionDetailsCard}>
          <Text style={styles.sessionModuleText}>{selectedSession.moduleName}</Text>
          <Text style={styles.sessionInfoText}>{selectedSession.date} | {selectedSession.time} | {selectedSession.room}</Text>
        </View>
      ) : (
        <View style={styles.noSessionCard}>
          <Text style={styles.noSessionText}>Veuillez sélectionner une session.</Text>
        </View>
      )}

      {/* Champ de recherche */}
      <View style={styles.searchContainer}>
        <MaterialCommunityIcons name="magnify" size={24} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un étudiant..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
          editable={!isSaving}
        />
      </View>

      {/* Liste des étudiants */}
      <FlatList
        data={filteredStudents}
        renderItem={({ item }) => <StudentAttendanceItem student={item} onToggleAttendance={toggleAttendance} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.studentList}
        ListEmptyComponent={() => (
          <View style={styles.emptyListContainer}>
            <MaterialCommunityIcons name="account-off-outline" size={50} color="#ccc" />
            <Text style={styles.emptyListText}>Aucun étudiant trouvé.</Text>
          </View>
        )}
      />

      {/* Bouton Enregistrer les Modifications */}
      <TouchableOpacity
        style={styles.saveChangesButton}
        onPress={handleSaveChanges}
        disabled={isSaving}
      >
        {isSaving ? (
          <ActivityIndicator size="small" color="#FFFFFF" />
        ) : (
          <Text style={styles.saveChangesButtonText}>Enregistrer les Modifications</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ManualAttendanceScreen;