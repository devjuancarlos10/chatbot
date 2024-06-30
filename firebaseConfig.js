import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDIMA91UZa1skj1YZYbdkzLt2mmibqZo8g",
  authDomain: "myloginalzhivida.firebaseapp.com",
  projectId: "myloginalzhivida",
  storageBucket: "myloginalzhivida.appspot.com",
  messagingSenderId: "232509984982",
  appId: "1:232509984982:web:937818911160307180f977"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Usamos getAuth() para obtener el objeto de autenticación

export { auth };

