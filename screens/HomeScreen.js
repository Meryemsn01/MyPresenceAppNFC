import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { mockFiliereStats, mockSessions } from '../data/mockData';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import styles from './styles/HomeScreenStyles';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {
  const [filiereStats, setFiliereStats] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const handleSelectSession = (session) => {
    Alert.alert(
      'Session Sélectionnée',
      `Vous avez sélectionné la session pour le module : ${session.moduleName}.\nPrêt pour le scan NFC.`,
      [
        { text: 'OK', onPress: () => navigation.navigate('NFCScanningPage', { selectedSession: session }) }
      ]
    );
  };

  // NOUVEAU Composant pour afficher une "Capsule de Statistiques"
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


  // NOUVEAU Composant pour afficher une "Fiche de Mission" de session
  const SessionMissionCard = ({ session }) => {
    const isToday = (new Date(session.date)).toDateString() === (new Date()).toDateString();
    const isActive = isToday && (new Date()).getHours() >= parseInt(session.time.split(':')[0]); // Très simple pour la simulation
    const statusColor = isActive ? '#FF5722' : '#00BCD4'; // Orange si active, Cyan sinon
    const statusText = isActive ? 'Active' : 'À Venir';
    const statusIcon = isActive ? 'play-circle' : 'clock-outline';

    return (
      <View style={styles.missionCard}>
        <View style={[styles.missionStatusIndicator, { backgroundColor: statusColor }]} /> {/* Indicateur latéral */}
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
            onPress={() => handleSelectSession(session)}
          >
            <Text style={styles.selectMissionButtonText}>Démarrer la Séance</Text>
            <MaterialCommunityIcons name="arrow-right" size={16} color="#FFFFFF" style={{ marginLeft: 5 }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };


  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0D47A1" />
        <Text style={styles.loadingText}>Préparation du Tableau de Bord...</Text>
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
            <Text style={styles.headerGreeting}>Bonjour Professeur !</Text>
            <MaterialCommunityIcons name="cog-outline" size={24} color="#FFFFFF" style={styles.headerSettingsIcon} /> {/* Icône paramètres */}
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
        {/* Aperçu des Filières/Modules - Capsules de Statistiques */}
        <Text style={styles.sectionTitle}>Performance des Filières</Text>
        <FlatList
          data={filiereStats}
          renderItem={({ item }) => <FiliereStatCapsule filiere={item} />}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filiereList}
        />

        {/* Liste des Séances - Fiches de Mission */}
        <Text style={styles.sectionTitle}>Missions du Jour & Futures</Text>
        <FlatList
          data={sessions}
          renderItem={({ item }) => <SessionMissionCard session={item} />}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.sessionList}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;