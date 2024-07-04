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
    borderWidth: 0,
    backgroundColor: '#f3f3f3',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 0,
    height: 60,
    width: 345,
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
    width: 300,
    height: 60,
  },
  button: {
    fontSize: 16,
    height: 61,
    marginLeft: 0,
    marginRight: 5,
    backgroundColor: '#ff004f',
    padding: 20,
    color: '#fff',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 30,
  },
});

export default SearchBar;
