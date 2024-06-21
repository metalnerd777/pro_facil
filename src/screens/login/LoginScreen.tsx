import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '1' && password === '1') {
      Alert.alert('Login Successful');
    } else {
      Alert.alert('Datos Incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PROFÁCIL</Text>
      <Text style={styles.subtitle}>
        Bienvenido a la App que te ayuda a encontrar el servicio que necesites
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Dirección de correo"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <Text style={styles.register}>¿No tienes cuenta? Registrate aquí</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    textAlign: 'center',
    color: '#000',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,
  },
  input: {
    fontSize: 20,
    width: 300,
    height: 60,
  },
  button: {
    height: 50,
    width: 200,
    backgroundColor: '#f2f2',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
  },
  register: {
    marginTop: 20,
  },
});
export default LoginScreen;
