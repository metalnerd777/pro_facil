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
    <LinearGradient
      style={styles.container}
      colors={['#7b1fa2', '#64ffda']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}>
      <Text style={styles.title}>PROFÁCIL</Text>
      <Text style={styles.subtitle}>
        Bienvenido a la App que te ayuda a encontrar el servicio que necesites
      </Text>
      <View style={styles.form}>
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
        <Text style={styles.recover}>¿Olidaste tu contraseña?</Text>

        <LinearGradient
          colors={['#ff0000', '#9f00b4']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.button}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
        </LinearGradient>
        <Text style={styles.register}>¿No tienes cuenta? Registrate aquí</Text>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 300,
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
    paddingLeft: '15%',
    height: 50,
    width: 200,
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
export default LoginScreen;
