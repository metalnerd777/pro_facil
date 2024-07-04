import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';

library.add(fas);

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = () => {
    //logica para buscar
    //......
  };
  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        style={styles.icon}
        icon={['fas', 'magnifying-glass']}
        size={30}
        color="#515151"
      />
      <TextInput
        style={styles.text}
        value={search}
        placeholder="¿Qué andas buscando?"
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={styles.button}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,

    height: 60,
    width: 360,
  },
  icon: {marginRight: 5, marginLeft: 10},
  text: {
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
  button: {
    marginLeft: 0,
    backgroundColor: '#ff004f',
    padding: 20,
    color: '#fff',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 20,
  },
});

export default SearchBar;
