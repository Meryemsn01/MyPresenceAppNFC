import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importez vos écrans
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import NFCScanningPage from '../screens/NFCScanningPage';
// Importez les nouveaux écrans du menu latéral ici
import StudentsListScreen from '../screens/StudentsListScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import SettingsScreen from '../screens/SettingsScreen';


const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Mes Séances' }} />
      <Stack.Screen name="NFCScanningPage" component={NFCScanningPage} options={{ title: 'Scan NFC' }} />
      <Stack.Screen name="StudentsList" component={StudentsListScreen} options={{ title: 'Liste des Étudiants' }} />
      <Stack.Screen name="Schedule" component={ScheduleScreen} options={{ title: 'Emploi du Temps' }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Paramètres' }} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AppMain" component={MainStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;