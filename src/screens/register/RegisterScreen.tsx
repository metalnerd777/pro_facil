import React, {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import supabase from '../../lib/supabase';
import {useNavigation} from '@react-navigation/native';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
library.add(fas, fab);

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

type RegisterScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'Register'
>;

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<RegisterScreenProps>();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const {data, error} = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            lastName,
            phone,
          },
        },
      });
      if (error) throw error;

      if (data) {
        Alert.alert('Éxito', 'Usuario registrado correctamente');
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Error', error.message);
      } else {
        Alert.alert('Error', 'Ha ocurrido un error desconocido');
      }
    }
  };

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
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.buttonText}>Registrarse</Text>
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
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.buttonText}>Ingresar con Google</Text>
          </TouchableOpacity>
        </LinearGradient>

        <TouchableOpacity
          style={styles.register}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.register}>
            ¿Ya registrado? Inicie sesión aquí
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
    backgroundColor: '#ffffff',
  },
  header: {
    flex: 1,
    height: 200,
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
    marginBottom: 30,
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
