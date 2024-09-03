import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//vistas y componentes
import Map from './src/components/Map';
import UserButton from './src/components/UserButton';
import LoginScreen from './src/screens/login/LoginScreen';
import RegisterScreen from './src/screens/register/RegisterScreen';
import ForgotPass from './src/screens/login/ForgotPass';
//contexto
import {AuthProvider, useAuth} from './src/components/AuthContext';

const Stack = createNativeStackNavigator();

const Navigation: React.FC = () => {
  const {user} = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Forgot" component={ForgotPass} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={Map} />
        <Stack.Screen name="ProfileButton" component={UserButton} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
