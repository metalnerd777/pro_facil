import React, {useState} from 'react';

import {
  View,
  Text,
  TextInput,
  AppState,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import supabase from '../../lib/supabase';

import LinearGradient from 'react-native-linear-gradient';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
library.add(fas, fab);

AppState.addEventListener('change', state => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const {error} = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  // const handleLogin = () => {
  //   if (email === '1' && password === '1') {
  //     Alert.alert('Login Successful');
  //   } else {
  //     Alert.alert('Datos Incorrectos');
  //   }
  // };

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
        <View style={styles.ticontainer}>
          <FontAwesomeIcon
            style={styles.icon}
            icon={['fas', 'envelope']}
            size={30}
            color="#515151"
          />
          <TextInput
            style={styles.input}
            placeholder="Dirección de correo"
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
            secureTextEntry={true}
          />
        </View>
        <Text style={styles.recover}>¿Olidaste tu contraseña?</Text>

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
          <TouchableOpacity
            disabled={loading}
            onPress={() => signInWithEmail()}>
            <Text style={styles.buttonText}>Ingresar</Text>
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
          <TouchableOpacity onPress={() => signInWithEmail()}>
            <Text style={styles.buttonText}>Ingresar con Google</Text>
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
  icon: {marginRight: 5},
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
    paddingTop: 22,
    paddingLeft: 15,
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
    paddingLeft: 40,
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
  buttonicon: {
    marginRight: 10,
    marginTop: 2,
  },
});
export default LoginScreen;
