import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Switch, Alert } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useMenu } from '../context/MenuContext';
import { Picker } from '@react-native-picker/picker'; // Pour le sélecteur de thème
import styles from './styles/SettingsScreenStyles';

const SettingsScreen = ({ navigation }) => {
  const { openMenu } = useMenu();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [theme, setTheme] = useState('light'); // 'light' ou 'dark'

  const handleSaveSettings = () => {
    // Simuler l'envoi des paramètres sauvegardés au backend
    // Dans une vraie app: PUT /api/profile/{teacherId}
    Alert.alert('Paramètres sauvegardés', 'Vos préférences ont été mises à jour (simulées).');
    console.log('Paramètres simulés:', { notificationsEnabled, theme });
  };

  const handleAboutUs = () => {
    Alert.alert('À propos', 'Système de Présence NFC SUPMTI - Version 1.0.0\nDéveloppé par [Votre Nom/Équipe].');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* En-tête de page cohérent */}
            <View style={styles.header}>
              {/* Bouton de menu (à gauche) */}
                  <TouchableOpacity onPress={openMenu} style={styles.menuButtonLeft}> {/* Nouveau style pour le bouton menu à gauche */}
                    <Feather name="menu" size={24} color="#FFFFFF" />
                  </TouchableOpacity>
                  {/* Titre dynamique (centré) */}
                    <Text style={styles.headerTitle}>Paramètres</Text>
                  {/* Espace vide pour centrer le titre si le bouton de menu à gauche est le seul élément de bord */}
                  <View style={{ width: 24 }} /> {/* Gardez cet espace pour centrer le titre par rapport au bouton de menu */}
            </View>
            

      <View style={styles.settingsSection}>
        <Text style={styles.sectionTitle}>Préférences Générales</Text>
        <View style={styles.settingItem}>
          <MaterialCommunityIcons name="bell-outline" size={22} color="#555" style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Activer les notifications</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#00BCD4" }}
            thumbColor={notificationsEnabled ? "#0D47A1" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setNotificationsEnabled}
            value={notificationsEnabled}
          />
        </View>

        <View style={styles.settingItem}>
          <MaterialCommunityIcons name="theme-light-dark" size={22} color="#555" style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Thème de l'application</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={theme}
              onValueChange={(itemValue) => setTheme(itemValue)}
              style={styles.pickerStyle}
              itemStyle={styles.pickerItemStyle}
            >
              <Picker.Item label="Clair" value="light" />
              <Picker.Item label="Sombre" value="dark" />
            </Picker>
          </View>
        </View>
      </View>

      <View style={styles.settingsSection}>
        <Text style={styles.sectionTitle}>Informations</Text>
        <TouchableOpacity style={styles.settingItem} onPress={handleAboutUs}>
          <MaterialCommunityIcons name="information-outline" size={22} color="#555" style={styles.settingIcon} />
          <Text style={styles.settingLabel}>À propos de l'application</Text>
          <Feather name="chevron-right" size={20} color="#888" />
        </TouchableOpacity>
        {/* Autres options comme politique de confidentialité, conditions d'utilisation */}
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveSettings}>
        <Text style={styles.saveButtonText}>Sauvegarder les Paramètres</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsScreen;