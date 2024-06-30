import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebaseConfig'; // Asegúrate de que la ruta sea correcta
import { Ionicons } from '@expo/vector-icons'; // Importamos los iconos de Ionicons desde Expo

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const auth = getAuth(app);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Aquí podrías hacer algo con userCredential, como navegar a la pantalla de inicio

      alert('Registro exitoso!');
      navigation.navigate('Login'); // Navega a la pantalla de inicio de sesión después del registro
    } catch (error) {
      alert('Error al registrar. Por favor, inténtalo de nuevo.');
      console.error(error); // Manejo básico de errores
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="person" size={24} color="#9b59b6" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nombre de Usuario"
          value={username}
          onChangeText={text => setUsername(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail" size={24} color="#9b59b6" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={24} color="#9b59b6" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee', // Fondo gris claro
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#9b59b6', // Morado más claro
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#9b59b6', // Morado más claro
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#555', // Texto gris oscuro
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#9b59b6', // Morado más claro
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff', // Texto blanco
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
