import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
library.add(fas, fab);

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
        <View style={styles.ticontainer}>
          <FontAwesomeIcon
            style={styles.icon}
            icon={['fas', 'user']}
            size={30}
            color="#515151"
          />
          <TextInput
            style={styles.input}
            placeholder="Nombre(s)"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.ticontainer}>
          <FontAwesomeIcon
            style={styles.icon}
            icon={['fas', 'user']}
            size={30}
            color="#515151"
          />
          <TextInput
            style={styles.input}
            placeholder="Apellido(s)"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <View style={styles.ticontainer}>
          <FontAwesomeIcon
            style={styles.icon}
            icon={['fas', 'phone']}
            size={30}
            color="#515151"
          />
          <TextInput
            style={styles.input}
            placeholder="Teléfono"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
        <View style={styles.ticontainer}>
          <FontAwesomeIcon
            style={styles.icon}
            icon={['fas', 'envelope']}
            size={30}
            color="#515151"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.ticontainer}>
          <FontAwesomeIcon
            style={styles.icon}
            icon={['fas', 'lock']}
            size={30}
            color="#515151"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <LinearGradient
          colors={['#ff0000', '#9f00b4']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.button}>
          <FontAwesomeIcon
            style={styles.buttonicon}
            icon={['fas', 'right-to-bracket']}
            size={25}
            color="#fff"
          />
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          colors={['#ff0000', '#9f00b4']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.button}>
          <FontAwesomeIcon
            style={styles.buttonicon}
            icon={['fab', 'google']}
            size={25}
            color="#fff"
          />
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
  ticontainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 50,
    backgroundColor: '#fff',
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
    paddingLeft: 15,
    paddingTop: 22,
    borderColor: 'grey',
    borderWidth: 0,
    borderBottomColor: 'black',
    borderRadius: 25,
    marginBottom: 15,
    width: 350,
    height: 60,
  },
  recover: {
    marginRight: -200,
    marginBottom: 20,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
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
  icon: {
    marginRight: 5,
  },
  buttonicon: {
    marginRight: 10,
    marginTop: 2,
  },
});
export default RegisterScreen;
