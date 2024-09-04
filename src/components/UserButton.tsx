import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
library.add(fas);

type RootStackParamList = {
  Home: undefined;
  ProfileScreen: undefined;
};
type NavigationButtonProps = NativeStackNavigationProp<
  RootStackParamList,
  'ProfileScreen'
>;

const UserButton: React.FC = () => {
  const navigation = useNavigation<NavigationButtonProps>();

  const handleSubmit = async () => {
    console.log('redirigiendo a perfil');
    navigation.navigate('ProfileScreen');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <FontAwesomeIcon icon={['fas', 'user']} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 20,
    top: 860,
    zIndex: 1,
  },
  icon: {
    color: '#fff',
    fontSize: 50,
    padding: 10,
  },
  button: {
    backgroundColor: '#ff004f',
    borderRadius: 30,
    padding: 10,
    elevation: 5,
  },
});

export default UserButton;
