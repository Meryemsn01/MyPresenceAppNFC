import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importez vos écrans
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import NFCScanningPage from '../screens/NFCScanningPage';

// Importez les nouveaux écrans pour le menu latéral

const Stack = createNativeStackNavigator();


// Votre StackNavigator principal (qui était contenu directement dans AppNavigator avant)
const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Mes Séances' }} />
      <Stack.Screen name="NFCScanningPage" component={NFCScanningPage} options={{ title: 'Scan NFC' }} />
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