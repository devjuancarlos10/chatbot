import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebaseConfig'; // Asegúrate de que la ruta sea correcta
import { Ionicons } from '@expo/vector-icons'; // Importa los iconos de Ionicons desde Expo

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const auth = getAuth(app);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      console.log('Inicio de sesión exitoso:', userCredential.user.uid);
      alert('Inicio de sesión exitoso!');
      navigation.navigate('Home'); // Navega a HomeScreen después del inicio de sesión exitoso
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={24} color="#8e44ad" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          value={username}
          onChangeText={text => setUsername(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={24} color="#8e44ad" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton} onPress={navigateToRegister}>
        <Text style={styles.registerButtonText}>¿No tienes cuenta? Regístrate aquí</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f3f4', // Fondo gris claro
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8e44ad', // Morado suave
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#dcdcdc', // Borde gris claro
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: '#fff', // Fondo blanco para el contenedor de input
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333', // Texto oscuro
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#8e44ad', // Morado suave
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff', // Texto blanco
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    marginTop: 20,
  },
  registerButtonText: {
    color: '#8e44ad', // Morado suave
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
