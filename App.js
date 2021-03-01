import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import WineList from './components/WineList'
import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Header /> 
      <WineList />
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

