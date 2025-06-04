import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen'; // Assurez-vous que cet import est là
import NFCScanningPage from '../screens/NFCScanningPage'; // Ajoutez cet import pour la page de scan future
import LoginScreen from '../screens/LoginScreen'; // Le premier écran créé


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Mes Séances' }} />
        <Stack.Screen name="NFCScanningPage" component={NFCScanningPage} options={{ title: 'Scan NFC' }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;