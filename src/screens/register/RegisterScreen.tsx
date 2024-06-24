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

import LinearGradient from 'react-native-linear-gradient';

const RegisterScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
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
    <LinearGradient
      style={styles.container}
      colors={['#7b1fa2', '#64ffda']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}>
      <Text style={styles.title}>PROFÁCIL</Text>
      <Text style={styles.subtitle}>
        Ingrese los siguientes datos para su registro
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nombre(s)"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido(s)"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
        />
        <LinearGradient
          colors={['#ff0000', '#9f00b4']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.button}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={['#ff0000', '#9f00b4']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.button}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.buttonText}>Ingresar con Google</Text>
          </TouchableOpacity>
        </LinearGradient>
        <Text style={styles.register}>¿Ya registrado? Inicie sesión aquí</Text>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  title: {
    marginStart: 30,
    textAlign: 'left',
    fontSize: 50,
    fontWeight: '800',
    color: '#1d1d1d',
  },
  subtitle: {
    marginStart: 30,
    fontSize: 20,
    marginBottom: 50,
    maxWidth: '80%',
  },
  form: {
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
    paddingLeft: 20,
    borderColor: 'grey',
    borderWidth: 0,
    borderBottomColor: 'black',
    borderRadius: 25,
    backgroundColor: '#fff',
    marginBottom: 15,
    width: 350,
    height: 60,
  },
  recover: {
    marginRight: -200,
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    paddingTop: 10,
    paddingLeft: 50,
    height: 50,
    width: 300,
    backgroundColor: '#f2f2',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 20,
    textAlignVertical: 'center',
    color: '#fff',
    fontWeight: '600',
  },
  register: {
    marginTop: 20,
  },
});
export default RegisterScreen;
