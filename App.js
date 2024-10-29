import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert, ToastAndroid} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function App() {
  const [pw, setPw] = useState('')
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  return (
    <View style={styles.container}>
      <Text>User Type:</Text>
      <RNPickerSelect
          onValueChange={(value) => setType(value)}
          items={
            [
              { label: 'Admin', value: 'Admin' },
              { label: 'Guest', value: 'Guest' },
            ]
          }
      />

      <Text>User Name:</Text>
      <TextInput style={{borderWidth: 1}} onChangeText={ (text) =>  setName(text)} />

      <Text>Password:</Text>
      <TextInput style={{borderWidth: 1}} onChangeText={ (text) =>  setPw(text)} />

      <TouchableOpacity onPress={() => ToastAndroid.show('Welcome ' + type + ' ' + name, ToastAndroid.SHORT)}>
        <Text>LOG IN</Text>
      </TouchableOpacity>

      <Text>{pw}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'left',
  },
});