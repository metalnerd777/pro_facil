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

type UserType = 'cliente' | 'prestador';

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<RegisterScreenProps>();
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user_type, setUserType] = useState<UserType>('cliente');

  const handleUserType = (type: UserType) => {
    setUserType(type);
  };

  const handleRegister = async () => {
    try {
      console.log('Iniciando registro de usuario');

      const {data, error: signUpError} = await supabase.auth.signUp({
        email,
        password,
      });
      console.log('usuario creado');

      if (signUpError) throw signUpError;

      console.log('Usuario registrado en auth:', data.user);

      if (data.user) {
        console.log('Intentando insertar datos adicionales');
        const {error: insertError} = await supabase.from('users').insert({
          id: data.user.id,
          first_name: first_name || '',
          last_name: last_name || '',
          phone: phone || '',
          user_type: user_type || 'cliente',
        });

        if (insertError) {
          console.error('Error al insertar datos adicionales:', insertError);
          console.error(
            'Detalles del error:',
            JSON.stringify(insertError, null, 2),
          );
          throw insertError;
        }

        console.log('Datos adicionales insertados');
      }
    } catch (error) {
      console.error('Error en el proceso de registro:', error);
      if (error instanceof Error) {
        Alert.alert('Error', `${error.name}: ${error.message}`);
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
            value={first_name}
            onChangeText={setFirstName}
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
            value={last_name}
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
            secureTextEntry={true}
          />
        </View>
        <Text style={{fontSize: 15, marginBottom: 10}}>
          Selecciona tu tipo de usuario!
        </Text>
        <View style={styles.tipoUsuario}>
          <TouchableOpacity
            style={[
              styles.buttontype,
              user_type === 'cliente' && styles.selectedButton,
            ]}
            onPress={() => handleUserType('cliente')}>
            <Text
              style={[
                styles.buttonTypeText,
                user_type === 'cliente' && styles.selectedButtonText,
              ]}>
              Cliente
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttontype,
              user_type === 'prestador' && styles.selectedButton,
            ]}
            onPress={() => handleUserType('prestador')}>
            <Text
              style={[
                styles.buttonTypeText,
                user_type === 'prestador' && styles.selectedButtonText,
              ]}>
              Prestador
            </Text>
          </TouchableOpacity>
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
    opacity: 0.15,
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
    width: 200,
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
    marginTop: 15,
    marginBottom: 20,
  },
  icon: {
    marginRight: 5,
  },
  buttonicon: {
    marginRight: 10,
    marginTop: 2,
  },
  tipoUsuario: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttontype: {
    borderRadius: 30,
    backgroundColor: 'lightgray',
    color: '#000',
    width: 150,
    height: 45,
    marginBottom: 20,
    padding: 8,
    alignItems: 'center',
    marginRight: 15,
  },
  selectedButton: {
    backgroundColor: '#ff004f',
  },
  buttonTypeText: {
    fontSize: 20,
    color: '#5e5e5e',
  },
  selectedButtonText: {
    color: '#fff',
  },
});
export default RegisterScreen;
