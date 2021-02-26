import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import WineItem from './components/WineItem'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WineItem />
      <StatusBar style="auto" /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A1110',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

