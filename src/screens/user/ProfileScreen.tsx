import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {useNavigation} from '@react-navigation/native';

type UserType = 'client' | 'provider';

const ProfileScreen: React.FC = () => {
  return (
    <View>
      <Text>ProfileSASacreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ProfileScreen;
