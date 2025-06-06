// screens/ScheduleScreen.js - CODE CORRECT ET MIS À JOUR

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useMenu } from '../context/MenuContext';
import { mockSchedule } from '../data/mockData'; // Importe les données d'emploi du temps
import styles from './styles/ScheduleScreenStyles'; // Importer les styles

const ScheduleScreen = ({ navigation }) => {
  const { openMenu } = useMenu();
  const [scheduleData, setScheduleData] = useState([]);
  const [filteredSchedule, setFilteredSchedule] = useState([]);
  const [activeFilter, setActiveFilter] = useState('day'); // 'day', 'week', 'month'
  const [isLoading, setIsLoading] = useState(true);
  const [displayedPeriod, setDisplayedPeriod] = useState(''); // <-- NOUVEL ÉTAT pour la période affichée

  // --- NOUVELLES FONCTIONS UTILITAIRES POUR LE FORMATAGE DES DATES ---
  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('fr-FR', options); // 'fr-FR' pour le format français
  };

  const getWeekRange = (date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1)); // Lundi de la semaine
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Dimanche de la semaine

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const startStr = startOfWeek.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });
    const endStr = endOfWeek.toLocaleDateString('fr-FR', options);
    return `Semaine du ${startStr} au ${endStr}`;
  };

  const getMonthRange = (date) => {
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('fr-FR', options);
  };
  // --- FIN NOUVELLES FONCTIONS UTILITAIRES ---

  useEffect(() => {
    const fetchSchedule = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simuler délai API
      setScheduleData(mockSchedule);
      setIsLoading(false);
    };
    fetchSchedule();
  }, []);

  useEffect(() => {
    // Logique de filtrage de l'emploi du temps
    let currentFiltered = [];
    const today = new Date(); // Obtient la date actuelle à chaque re-rendu/changement de filtre
    let periodText = ''; // Texte de la période à afficher

    if (activeFilter === 'day') {
      currentFiltered = scheduleData.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate.toDateString() === today.toDateString();
      });
      periodText = formatDate(today); // Format "Mercredi 5 juin 2025"
    } else if (activeFilter === 'week') {
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1)); // Lundi de la semaine
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);

      currentFiltered = scheduleData.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= startOfWeek && itemDate <= endOfWeek;
      });
      periodText = getWeekRange(today); // Format "Semaine du 3 juin au 9 juin 2025"
    } else if (activeFilter === 'month') {
      currentFiltered = scheduleData.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate.getMonth() === today.getMonth() && itemDate.getFullYear() === today.getFullYear();
      });
      periodText = getMonthRange(today); // Format "Juin 2025"
    }
    setFilteredSchedule(currentFiltered);
    setDisplayedPeriod(periodText); // <-- MET À JOUR LE TEXTE DE LA PÉRIODE
  }, [activeFilter, scheduleData]); // Se déclenche quand le filtre ou les données changent

  // Composant pour afficher un élément de l'emploi du temps
const ScheduleItem = ({ item }) => (
  <View style={styles.scheduleCard}>
    <View style={styles.scheduleTime}>
      <Text style={styles.timeText}>{item.timeStart}</Text>
      <Text style={styles.timeSeparator}>-</Text>
      <Text style={styles.timeText}>{item.timeEnd}</Text>
    </View>
    <View style={styles.scheduleDetails}>
      <Text style={styles.scheduleModule}>{item.moduleName}</Text>
      <Text style={styles.scheduleInfo}>{item.filiere} - {item.classType}</Text>
      {/* AJOUT DE LA DATE ICI */}
      <Text style={styles.scheduleDate}>
        <Feather name="calendar" size={12} color="#555" /> {item.date} {/* Icône et date */}
      </Text>
      <Text style={styles.scheduleInfo}>
        <Feather name="map-pin" size={12} color="#888" /> {item.room}
      </Text>
    </View>
  </View>
);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0D47A1" />
        <Text style={styles.loadingText}>Chargement de l'emploi du temps...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* En-tête de page cohérent */}
      <View style={styles.header}>
        {/* Bouton de menu (à gauche) */}
            <TouchableOpacity onPress={openMenu} style={styles.menuButtonLeft}> {/* Nouveau style pour le bouton menu à gauche */}
              <Feather name="menu" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            {/* Titre dynamique (centré) */}
            <Text style={styles.headerTitle}>Emploi du Temps</Text>
            {/* Espace vide pour centrer le titre si le bouton de menu à gauche est le seul élément de bord */}
            <View style={{ width: 24 }} /> {/* Gardez cet espace pour centrer le titre par rapport au bouton de menu */}
        </View>

      {/* Boutons de filtrage (Jour, Semaine, Mois) */}
      <View style={styles.filterButtonsContainer}>
        <TouchableOpacity
          style={[styles.filterButton, activeFilter === 'day' && styles.filterButtonActive]}
          onPress={() => setActiveFilter('day')}
        >
          <Text style={[styles.filterButtonText, activeFilter === 'day' && styles.filterButtonTextActive]}>Jour</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, activeFilter === 'week' && styles.filterButtonActive]}
          onPress={() => setActiveFilter('week')}
        >
          <Text style={[styles.filterButtonText, activeFilter === 'week' && styles.filterButtonTextActive]}>Semaine</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, activeFilter === 'month' && styles.filterButtonActive]}
          onPress={() => setActiveFilter('month')}
        >
          <Text style={[styles.filterButtonText, activeFilter === 'month' && styles.filterButtonTextActive]}>Mois</Text>
        </TouchableOpacity>
      </View>

      {/* Affichage de la période complète */}
      <Text style={styles.displayedPeriodText}>{displayedPeriod}</Text> {/* <-- NOUVEL ÉLÉMENT TEXTE */}

      {/* Liste des séances de l'emploi du temps */}
      <FlatList
        data={filteredSchedule}
        renderItem={({ item }) => <ScheduleItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.scheduleList}
        ListEmptyComponent={() => (
          <View style={styles.emptyListContainer}>
            <MaterialCommunityIcons name="calendar-remove-outline" size={50} color="#ccc" />
            <Text style={styles.emptyListText}>Aucune séance prévue pour cette période.</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ScheduleScreen;