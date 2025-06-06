import React, { useState } from 'react'; // Importer useState
import { View, Text, TextInput, Button, SafeAreaView, Alert, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Importer LinearGradient
import styles from './styles/LoginScreenStyles'; // Importer les styles
import Toast from 'react-native-toast-message'; // <-- Importez Toast ici
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false); // Pour l'animation de focus
  const [isPasswordFocused, setIsPasswordFocused] = useState(false); // Pour l'animation de focus

  const handleLogin = async () => {
    // 1. Validation côté client
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Erreur de saisie', 'Veuillez saisir votre email et votre mot de passe.');
      return;
    }

    setIsLoading(true);

    try {
      // ###############################################################
      // ################ POINT DE REMPLACEMENT POUR L'API RÉELLE ################
      // ###############################################################

      // CODE SIMULÉ ACTUELLEMENT EN PLACE:
      await new Promise(resolve => setTimeout(resolve, 2000));

      let loginSuccess = false;
      let responseData = {};

      if (email === 's' && password === 's') {
        loginSuccess = true;
        responseData = {
          token: 'mock-jwt-token-abcdef12345',
          user: {
            id: 'prof123',
            name: 'Professeur Mock',
            email: 'prof@supmti.ma',
            role: 'professor'
          },
          message: 'Connexion réussie'
        };
      } else {
        loginSuccess = false;
        responseData = {
          message: 'Email ou mot de passe incorrect.'
        };
      }

      // ###############################################################
      // ################ FIN DU POINT DE REMPLACEMENT #################
      // ###############################################################

      if (loginSuccess) {
        console.log('Simulating JWT storage with token:', responseData.token);
        console.log('Simulating user data storage:', responseData.user);

        Toast.show({
        type: 'success', // Type de message (peut être 'success', 'error', 'info', 'any')
        text1: 'Connexion Réussie',
        text2: `Bienvenue, ${responseData.user.name} !`, // Message détaillé
        visibilityTime: 3000, // Temps d'affichage en ms (3 secondes)
        topOffset: 60, // Décalage depuis le haut de l'écran
        // On peut personnaliser le style ici si on le souhaite, ou le faire globalement
        // backgroundColors: { success: '#00C851' } par exemple
        });
        navigation.navigate('AppContent');
      } else {
        Alert.alert('Échec de connexion (simulé)', responseData.message || 'Identifiants incorrects ou erreur inconnue.');
        setPassword('');
      }

    } catch (error) {
      console.error('Erreur lors de la connexion (simulation ou réseau) :', error);
      Alert.alert('Erreur réseau', 'Impossible de se connecter au serveur. Vérifiez votre connexion.');
    } finally {
      setIsLoading(false);
    }
  };

return (
    <LinearGradient
      colors={['#0D47A1', '#00BCD4', '#FF5722']}
      style={styles.gradientContainer}
    >
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../assets/supmti-logo-transparent.png')}
          style={styles.logo}
        />

        {/* NOUVEL ÉLÉMENT INNOVANT : Indicateur Géométrique d'Impulsion NFC */}
        <View style={styles.nfcPulseIndicator}>
          {/* Cercles/Carrés concentriques pour l'effet de signal */}
          <View style={[styles.pulseRing, styles.pulseRingSmall]} />
          <View style={[styles.pulseRing, styles.pulseRingMedium]} />
          <View style={[styles.pulseRing, styles.pulseRingLarge]} />
          {/* On peut ajouter une petite icône NFC ou un point central ici si désiré */}
          <MaterialCommunityIcons name="nfc" size={24} color="#FFFFFF" style={styles.nfcCenterIcon} />
        </View>
        {/* FIN NOUVEL ÉLÉMENT INNOVANT */}

        <View style={[styles.inputContainer, isEmailFocused && styles.inputFocused]}>
          <Feather name="mail" size={20} color={styles.icon.color} />
          <TextInput
            style={styles.input}
            placeholder="Email "
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            editable={!isLoading}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />
        </View>

        <View style={[styles.inputContainer, isPasswordFocused && styles.inputFocused]}>
          <MaterialCommunityIcons name="lock-outline" size={20} color={styles.icon.color} />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            editable={!isLoading}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#FFFFFF" />
          ) : (
            <Text style={styles.buttonText}>Se Connecter</Text>
          )}
        </TouchableOpacity>

        {isLoading && <ActivityIndicator size="large" color="#FFFFFF" style={styles.spinner} />}

        <TouchableOpacity onPress={() => Alert.alert('Aide', 'Contactez l\'administration pour toute assistance.')}>
          <Text style={styles.helpText}>Besoin d'aide ?</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </LinearGradient>
  );
};


export default LoginScreen;