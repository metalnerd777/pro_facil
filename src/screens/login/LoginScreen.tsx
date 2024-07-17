import React, {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import supabase from '../../lib/supabase';

import LinearGradient from 'react-native-linear-gradient';
//icons
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import RegisterScreen from '../register/RegisterScreen';
import {useNavigation} from '@react-navigation/native';
library.add(fas, fab);

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};
type LoginScreenProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenProps>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleLogin() {
    setLoading(true);
    setError('');
    const {error} = await supabase.auth.signInWithPassword({email, password});
    if (error) setError(error.message);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/top-back.png')}
        style={styles.header}
      />
      <Image
        source={require('../../assets/logos/logo-pink.png')}
        style={styles.title}
      />
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
          colors={['#ff004f', '#9f00b4']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.button}>
          <FontAwesomeIcon
            style={styles.buttonicon}
            icon={['fas', 'right-to-bracket']}
            size={25}
            color="#fff"
          />
          <TouchableOpacity disabled={loading} onPress={handleLogin}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={['#ff004f', '#9f00b4']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.button}>
          <FontAwesomeIcon
            style={styles.buttonicon}
            icon={['fab', 'google']}
            size={25}
            color="#fff"
          />
          <TouchableOpacity onPress={() => handleLogin()}>
            <Text style={styles.buttonText}>Ingresar con Google</Text>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity
          style={styles.register}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>
            ¿No tienes cuenta? Registrate aquí"
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  ticontainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    height: 60,
  },
  icon: {
    marginRight: 5,
    marginLeft: 10,
  },
  header: {
    flex: 1,
    height: 200,
  },
  title: {
    resizeMode: 'contain',
    height: 100,
    width: 300,
    marginStart: 30,
    textAlign: 'left',
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
    marginBottom: 30,
  },
  registerText: {
    marginTop: 20,
    marginBottom: 30,
  },
  buttonicon: {
    marginRight: 10,
    marginTop: 2,
  },
});
export default LoginScreen;
