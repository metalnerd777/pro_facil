import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import supabase from '../../lib/supabase';
import LinearGradient from 'react-native-linear-gradient';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
library.add(fas);

const ForgotPass = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordReset = async () => {
    const {error} = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      setErrorMessage(error.message);
    } else {
      setMessage('Revisa tu correo para poder recuperar tu contraseña.');
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

      <Text style={styles.subtitle2}>
        Para recuperar tu contraseña introduce tu dirección de correo de
        registro a continuación.
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
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        {message ? <Text>{message}</Text> : null}
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        <LinearGradient
          colors={['#ff004f', '#9f00b4']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.button}>
          <FontAwesomeIcon
            style={styles.buttonicon}
            icon={['fas', 'unlock']}
            size={25}
            color="#fff"
          />
          <TouchableOpacity onPress={handlePasswordReset}>
            <Text style={styles.buttonText}>Recuperar contraseña</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#f3f3f3',
    marginBottom: 50,
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
    marginBottom: 10,
  },
  subtitle: {
    marginStart: 30,
    fontSize: 20,
    marginBottom: 50,
    maxWidth: '80%',
  },
  subtitle2: {
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
  buttonicon: {
    marginRight: 10,
    marginTop: 2,
  },
});

export default ForgotPass;
