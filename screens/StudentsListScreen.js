// screens/StudentsListScreen.js - CODE CORRECT ET PROPRE

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TextInput, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { mockStudents, mockTeacherModules } from '../data/mockData'; // Importez les données nécessaires
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker'; // Importez Picker
import styles from './styles/StudentsListScreenStyles'; // Importe les styles
import { useMenu } from '../context/MenuContext'; // Pour ouvrir le menu

const StudentsListScreen = ({ navigation }) => {
  const [allStudents, setAllStudents] = useState([]); // Garde la liste complète
  const [displayedStudents, setDisplayedStudents] = useState([]); // Liste affichée après filtres
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState('all'); // Module sélectionné
  const [headerFiliere, setHeaderFiliere] = useState('Toutes les Filières Enseignées'); // Texte d'en-tête dynamique
  const [isLoading, setIsLoading] = useState(true);
  const { openMenu } = useMenu(); // Pour ouvrir le menu

  useEffect(() => {
    const fetchInitialData = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simuler délai
      setAllStudents(mockStudents);
      // Au démarrage, afficher tous les étudiants des modules enseignés par le prof.
      const initialFiltered = mockStudents.filter(student =>
        mockTeacherModules.some(tm => tm.value === student.module)
      );
      setDisplayedStudents(initialFiltered);
      setIsLoading(false);
    };
    fetchInitialData();
  }, []);

  // Effet pour appliquer les filtres (recherche et module sélectionné)
  useEffect(() => {
    let currentFilteredStudents = allStudents;

    // 1. Filtrage par module enseigné
    if (selectedModule !== 'all') {
      currentFilteredStudents = currentFilteredStudents.filter(
        student => student.module === selectedModule
      );
      // Mettre à jour l'en-tête avec la filière du module sélectionné
      const moduleInfo = mockTeacherModules.find(mod => mod.value === selectedModule);
      setHeaderFiliere(moduleInfo ? moduleInfo.filiere : 'Module Inconnu'); // Gestion si module non trouvé
    } else {
      // Si "Tous les Modules" est sélectionné, afficher tous les étudiants des modules enseignés
      currentFilteredStudents = allStudents.filter(student =>
        mockTeacherModules.some(tm => tm.value === student.module)
      );
      setHeaderFiliere('Toutes les Filières Enseignées'); // Texte pour le cas "Tous les Modules"
    }

    // 2. Filtrage par recherche textuelle
    if (searchQuery.trim() !== '') {
      const lowercasedQuery = searchQuery.toLowerCase();
      currentFilteredStudents = currentFilteredStudents.filter(student =>
        student.name.toLowerCase().includes(lowercasedQuery) ||
        student.matricule.toLowerCase().includes(lowercasedQuery) ||
        student.filiere.toLowerCase().includes(lowercasedQuery)
      );
    }

    setDisplayedStudents(currentFilteredStudents);

  }, [searchQuery, selectedModule, allStudents]);

  // Pas besoin d'un second useEffect pour les modules disponibles si mockTeacherModules est fixe


  // Composant pour un item étudiant dans la liste
  const StudentItem = ({ student }) => (
    <View style={styles.studentCard}>
      <Image source={{ uri: student.photoUrl }} style={styles.studentPhoto} />
      <View style={styles.studentInfo}>
        <Text style={styles.studentName}>{student.name}</Text>
        <Text style={styles.studentDetail}>Matricule: {student.matricule}</Text>
        <Text style={styles.studentDetail}>Filière: {student.filiere}</Text>
        <Text style={styles.studentDetail}>Module: {student.module}</Text> {/* Affiche le module */}
      </View>
    </View>
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0D47A1" />
        <Text style={styles.loadingText}>Chargement de la liste des étudiants...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* En-tête de page dynamique */}
        <View style={styles.header}>
        {/* Bouton de menu (à gauche) */}
            <TouchableOpacity onPress={openMenu} style={styles.menuButtonLeft}> {/* Nouveau style pour le bouton menu à gauche */}
              <Feather name="menu" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            {/* Titre dynamique (centré) */}
            <Text style={styles.headerTitle}>{headerFiliere}</Text>
            {/* Espace vide pour centrer le titre si le bouton de menu à gauche est le seul élément de bord */}
            <View style={{ width: 24 }} /> {/* Gardez cet espace pour centrer le titre par rapport au bouton de menu */}
        </View>

      {/* Sélecteur de module */}

          <View style={[styles.filterContainer, { backgroundColor: '#FFFFFF', borderRadius: 10, marginHorizontal: 15, marginBottom: 15 }]}>
            <Picker
              selectedValue={selectedModule}
              onValueChange={(itemValue) => setSelectedModule(itemValue)}
              // Styles directement sur le Picker pour le test de visibilité
              style={{ height: 50, width: '100%', color: '#333' }}
            >
              {mockTeacherModules.map(module => (
                <Picker.Item key={module.value} label={module.label} value={module.value} />
              ))}
            </Picker>
          </View>

      {/* Champ de recherche (vient après le sélecteur) */}
      <View style={styles.searchContainer}>
        <MaterialCommunityIcons name="magnify" size={24} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher par nom, matricule ou filière..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Liste des étudiants */}
      <FlatList
        data={displayedStudents}
        renderItem={({ item }) => <StudentItem student={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.studentList}
        ListEmptyComponent={() => (
          <View style={styles.emptyListContainer}>
            <MaterialCommunityIcons name="emoticon-sad-outline" size={50} color="#ccc" />
            <Text style={styles.emptyListText}>Aucun étudiant trouvé pour ce module ou critère.</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default StudentsListScreen;