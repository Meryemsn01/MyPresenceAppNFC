import React from 'react';
import AppNavigator from './navigation/AppNavigator'; // Importe notre navigateur
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Le NavigatorContainer gérera la couleur de fond de la page.
    // Assurez-vous que le style du conteneur de App.js ne cache pas le contenu du navigateur.
  },
});