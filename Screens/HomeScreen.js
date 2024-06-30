import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importar AsyncStorage para manejar almacenamiento local

// Fondo de pantalla de la app
const backgroundImage = require('../assets/background-main.jpg');   // Asegúrate de tener la imagen en la carpeta assets

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToChat = () => {
    navigation.navigate('Chatbot'); // Navega a ChatbotScreen al presionar el botón
  };

  const handleLogout = async () => {
    try {
      // Aquí podrías eliminar cualquier información de sesión que tengas almacenada
      await AsyncStorage.removeItem('userToken'); // Eliminar el token de usuario almacenado
      navigation.navigate('Login'); // Navega de vuelta a la pantalla de inicio de sesión
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>¡Bienvenido al chatbot!</Text>
        <Text style={styles.slogan}>"Fortaleciendo mentes, aliviando cuidados: Tu chatbot para la salud mental."</Text>
        <TouchableOpacity style={styles.button} onPress={handleNavigateToChat}>
          <Text style={styles.buttonText}>Ir al Chatbot</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff', 
    textAlign: 'center', 
  },
  slogan: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#ffffff',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#C81539', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoutButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#555555',
    borderRadius: 5,
  },
  logoutButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
