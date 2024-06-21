import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'user@example.com' && password === 'password') {
      Alert.alert('Login Successful');
    } else {
      Alert.alert('Login Failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PROFÁCIL</Text>
      <Text style={styles.subtitle}>Bienvenido a ProFácil</Text>
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
      />
      <Button title="Ingresar" onPress={handleLogin} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
  subtitle: {},
  input: {},
  button: {},
});
export default LoginScreen;
