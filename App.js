import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Para manejar el almacenamiento local

import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import ChatbotScreen from './Screens/ChatbotScreen';
import RegisterScreen from './Screens/RegisterScreen'; // Importa RegisterScreen

const Stack = createStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthState();
  }, []);

  // Función para verificar el estado de autenticación
  const checkAuthState = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        // Si hay un token de usuario en AsyncStorage, el usuario está autenticado
        setIsAuthenticated(true);
      } else {
        // Si no hay token de usuario, el usuario no está autenticado
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Error al verificar el estado de autenticación:', error);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? 'Home' : 'Login'} // Ruta inicial basada en el estado de autenticación
        screenOptions={{
          headerTransparent: true,
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Inicio de Sesión' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Inicio' }}
        />
        <Stack.Screen
          name="Chatbot"
          component={ChatbotScreen}
          options={{ title: 'Chatbot' }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Registro' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
