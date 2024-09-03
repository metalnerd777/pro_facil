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
  Profile: undefined;
};
type NavigationButtonProps = NativeStackNavigationProp<
  RootStackParamList,
  'Profile'
>;

const UserButton: React.FC = () => {
  const navigation = useNavigation<NavigationButtonProps>();

  const handleSubmit = async () => {
    console.log('redirigiendo a perfil');
    navigation.navigate('Profile');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSubmit}>
        <FontAwesomeIcon
          style={styles.icon}
          icon={['fas', 'user']}
          size={30}
          color="#000"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    zIndex: 1,
  },
  icon: {
    position: 'absolute',
    margin: 200,
  },
});

export default UserButton;
