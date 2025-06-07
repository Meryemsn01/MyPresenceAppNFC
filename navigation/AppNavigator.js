// navigation/AppNavigator.js

import React from 'react'; // Assurez-vous que React est importé
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import NFCScanningPage from '../screens/NFCScanningPage';
import StudentsListScreen from '../screens/StudentsListScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SessionSummaryView from '../screens/SessionSummaryView'; // <-- Ajoutez cet import
import StudentVerificationPage from '../screens/StudentVerificationPage';

import CustomSideMenu from '../components/CustomSideMenu'; // Importez le composant du menu
import { useMenu } from '../context/MenuContext'; // Importez useMenu

const Stack = createNativeStackNavigator();

const MainAppNavigator = () => {
  return (
    <View style={{ flex: 1 }}> 
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NFCScanningPage" component={NFCScanningPage} />
        <Stack.Screen name="StudentsList" component={StudentsListScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="SessionSummary" component={SessionSummaryView} />
        <Stack.Screen name="StudentVerificationPage" component={StudentVerificationPage} />
      </Stack.Navigator>
      <CustomSideMenu /> 
    </View>
  );
};

const AppNavigator = () => {
  // Nous n'avons pas besoin de navigationRef ici si CustomSideMenu utilise useNavigation()
  // const navigationRef = React.useRef(); // Supprimez ou commentez cette ligne
  // const { isMenuVisible } = useMenu(); // Cette ligne n'est pas nécessaire ici

  return (
    <NavigationContainer /* retirez ref={navigationRef} ici */>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AppContent" component={MainAppNavigator} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default AppNavigator;