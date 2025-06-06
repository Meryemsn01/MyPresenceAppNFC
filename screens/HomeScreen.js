// screens/HomeScreen.js - CODE CORRECT ET PROPRE

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, FlatList, ActivityIndicator, Alert, Modal, Pressable } from 'react-native';
import { mockFiliereStats, mockSessions } from '../data/mockData'; // Assurez-vous que ce fichier existe et est correct
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import styles from './styles/HomeScreenStyles'; // Importe les styles de ce fichier
import { LinearGradient } from 'expo-linear-gradient';
import Toast from 'react-native-toast-message';

// --- Composants internes définis en dehors du composant principal pour la propreté ---

// Composant pour afficher une "Capsule de Statistiques"
const FiliereStatCapsule = ({ filiere }) => {
  const presentRatio = filiere.present / filiere.total;
  const progressWidth = `${presentRatio * 100}%`;
  const progressColor = presentRatio >= 0.8 ? '#00C851' : presentRatio >= 0.5 ? '#FFC107' : '#FF5722'; // Vert, Jaune, Rouge

  return (
    <View style={styles.filiereCapsule}>
      <View style={styles.capsuleHeader}>
        <Text style={styles.capsuleName}>{filiere.name}</Text>
        <Text style={styles.capsuleRate}>{filiere.absenceRate}</Text>
      </View>
      <Text style={styles.capsuleModule}>{filiere.module}</Text>
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: progressWidth, backgroundColor: progressColor }]} />
      </View>
      <Text style={styles.capsuleProgressText}>{filiere.present}/{filiere.total} Présents</Text>
    </View>
  );
};

// Composant pour afficher une "Fiche de Mission" de session
const SessionMissionCard = ({ session, handleSelectSession }) => { // handleSelectSession est passé en prop
  const isToday = (new Date(session.date)).toDateString() === (new Date()).toDateString();
  const isActive = isToday && (new Date()).getHours() >= parseInt(session.time.split(':')[0]);
  const statusColor = isActive ? '#FF5722' : '#00BCD4';
  const statusText = isActive ? 'Active' : 'À Venir';
  const statusIcon = isActive ? 'play-circle' : 'clock-outline';

  return (
    <View style={styles.missionCard}>
      <View style={[styles.missionStatusIndicator, { backgroundColor: statusColor }]} />
      <View style={styles.missionContent}>
        <View style={styles.missionHeader}>
          <Text style={styles.missionModule}>{session.moduleName}</Text>
          <View style={styles.missionStatus}>
            <MaterialCommunityIcons name={statusIcon} size={14} color={statusColor} />
            <Text style={[styles.missionStatusText, { color: statusColor }]}>{statusText}</Text>
          </View>
        </View>
        <Text style={styles.missionFiliere}>{session.filiere}</Text>
        <View style={styles.missionInfoRow}>
          <Feather name="calendar" size={14} color="#888" style={styles.missionInfoIcon} />
          <Text style={styles.missionInfoText}>{session.date}</Text>
        </View>
        <View style={styles.missionInfoRow}>
          <Feather name="clock" size={14} color="#888" style={styles.missionInfoIcon} />
          <Text style={styles.missionInfoText}>{session.time}</Text>
        </View>
        <View style={styles.missionInfoRow}>
          <Feather name="map-pin" size={14} color="#888" style={styles.missionInfoIcon} />
          <Text style={styles.missionInfoText}>{session.room}</Text>
        </View>
        <TouchableOpacity
          style={styles.selectMissionButton}
          onPress={() => handleSelectSession(session)} // Utilise la prop passée
        >
          <Text style={styles.selectMissionButtonText}>Démarrer la Séance</Text>
          <MaterialCommunityIcons name="arrow-right" size={16} color="#FFFFFF" style={{ marginLeft: 5 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};


// --- Définition du composant principal HomeScreen ---
const HomeScreen = ({ navigation }) => {
  const [filiereStats, setFiliereStats] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const fetchFiliereData = async () => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFiliereStats(mockFiliereStats);
  };

  const fetchSessions = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSessions(mockSessions);
  };

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await Promise.all([fetchFiliereData(), fetchSessions()]);
      setIsLoading(false);
    };
    loadData();
  }, []);

  // Fonction pour simuler la sélection d'une session
  const handleSelectSession = (session) => {
    console.log('Session sélectionnée pour le scan NFC:', session.moduleName);

    Toast.show({
      type: 'info',
      text1: 'Session Sélectionnée',
      text2: `Module: ${session.moduleName}. Prêt pour le scan NFC.`,
      visibilityTime: 3000,
      topOffset: 60,
    });

    setTimeout(() => {
      navigation.navigate('NFCScanningPage', { selectedSession: session });
    }, 500);
  };

  // Fonctions pour le menu latéral
  const handleLogout = () => {
    Alert.alert(
      'Déconnexion',
      'Êtes-vous sûr de vouloir vous déconnecter ?',
      [
        { text: 'Annuler', style: 'cancel' },
        { text: 'Oui', onPress: () => {
            console.log('Déconnexion simulée');
            Toast.show({
                type: 'info',
                text1: 'Déconnecté',
                text2: 'Vous avez été déconnecté avec succès.',
                visibilityTime: 2000,
            });
            setIsMenuVisible(false);
            navigation.navigate('Login');
        }}
      ]
    );
  };

// Dans screens/HomeScreen.js

  const handleMenuItemPress = (screenName) => {
      setIsMenuVisible(false); // Ferme le menu

      // --- NOUVELLE LOGIQUE DE NAVIGATION RÉELLE ---
      if (screenName === 'StudentsList' || screenName === 'Schedule' || screenName === 'Settings') {
          navigation.navigate(screenName); // Navigue réellement vers l'écran si le nom correspond
      } else {
          // Garde l'alerte pour les cas non gérés ou futurs
          Alert.alert('Navigation Simulée', `Navigation vers ${screenName} (page en construction).`);
      }
      // --- FIN NOUVELLE LOGIQUE ---
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0D47A1" />
        <Text style={styles.loadingText}>Préparation du Tableau de Bord...</Text>
      </SafeAreaView>
    );
  }

  // Si les données ne sont pas chargées (cas improbable avec les mocks mais bonne pratique)
  if (filiereStats.length === 0 && sessions.length === 0) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Aucune donnée disponible pour le moment.</Text>
        {/* Ajouter un bouton de rechargement si nécessaire, mais avec les mocks, cela ne devrait pas arriver */}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* En-tête de la page d'accueil - "Tableau de Commande" */}
      <LinearGradient
        colors={['#0D47A1', '#00BCD4']}
        style={styles.headerGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.headerTopRow}>
            {/* Bouton de menu */}
            <TouchableOpacity onPress={() => setIsMenuVisible(true)} style={styles.menuButton}>
                <Feather name="menu" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.headerGreeting}>Bonjour Professeur !</Text>
            <MaterialCommunityIcons name="cog-outline" size={24} color="#FFFFFF" style={styles.headerSettingsIcon} />
        </View>
        <Text style={styles.headerSubtitle}>Tableau de bord des présences</Text>
        <View style={styles.todayStatsContainer}>
            <View style={styles.statBox}>
                <Text style={styles.statBoxValue}>3</Text>
                <Text style={styles.statBoxLabel}>Séances Aujourd'hui</Text>
            </View>
            <View style={styles.statBox}>
                <Text style={styles.statBoxValue}>60%</Text>
                <Text style={styles.statBoxLabel}>Présence Moyenne</Text>
            </View>
        </View>
      </LinearGradient>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.sectionTitle}>Performance des Filières</Text>
        <FlatList
          data={filiereStats}
          renderItem={({ item }) => <FiliereStatCapsule filiere={item} />}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filiereList}
        />

        <Text style={styles.sectionTitle}>Missions du Jour & Futures</Text>
        <FlatList
          data={sessions}
          renderItem={({ item }) => <SessionMissionCard session={item} handleSelectSession={handleSelectSession} />}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.sessionList}
        />
      </ScrollView>

      {/* MODAL POUR LE MENU LATÉRAL SIMULÉ */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isMenuVisible}
        onRequestClose={() => setIsMenuVisible(false)}
      >
        <Pressable style={styles.menuOverlay} onPress={() => setIsMenuVisible(false)}>

<View style={styles.menuContainer}>
  {/* En-tête du menu */}
  <LinearGradient
    colors={['#0D47A1', '#00BCD4']}
    style={styles.menuHeader}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  >
    <Text style={styles.menuHeaderTitle}>Mr/Mme Professeur</Text>
    <Text style={styles.menuHeaderSubtitle}>prof@supmti.ma</Text>
    {/* Optionnel: Ajoutez une icône de profil ici */}
    {/* <MaterialCommunityIcons name="account-circle-outline" size={50} color="#FFFFFF" style={styles.profileIcon} /> */}
  </LinearGradient>


 
    <View style={styles.menuItemsContainer}>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('StudentsList')}>
        <MaterialCommunityIcons name="account-group-outline" size={24} color="#0D47A1" style={styles.menuIcon} />
        <Text style={styles.menuItemText}>Liste des Étudiants</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('Schedule')}>
        <MaterialCommunityIcons name="calendar-month-outline" size={24} color="#0D47A1" style={styles.menuIcon} />
        <Text style={styles.menuItemText}>Emploi du Temps</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('Settings')}>
        <Feather name="settings" size={24} color="#0D47A1" style={styles.menuIcon} />
        <Text style={styles.menuItemText}>Paramètres</Text>
      </TouchableOpacity>
    </View>
    {/* FIN NOUVEAU CONTENEUR */}

    <View style={styles.menuSeparator} /> {/* Séparateur avant la déconnexion */}

    {/* Section de déconnexion (toujours en bas) */}
    <TouchableOpacity style={[styles.menuItem, styles.logoutItem]} onPress={handleLogout}>
      <MaterialCommunityIcons name="logout" size={24} color="#D32F2F" style={styles.menuIcon} />
      <Text style={[styles.menuItemText, styles.logoutText]}>Déconnexion</Text>
    </TouchableOpacity>
  </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;