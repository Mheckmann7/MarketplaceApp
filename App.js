import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wineContainer}>
        <ImageBackground
          source={require('./assets/images/red-wine.jpg')}
          style={styles.image} /> 
        <View style={styles.titles}>
          <Text style={styles.title}>Red Wines</Text>
          <Text style={styles.subtitle}>Starting at $60</Text>
        </View>

      </View>
      <StatusBar style="auto" /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#461513',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wineContainer: {
    width: '100%',
    height: '100%', 
  },
  titles: {
    marginTop: '20%',
    width: '100%',
    alignItems: 'center', 
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  }, 
  subtitle: {
    fontSize: 16, 
    color: '#461513',
  }, 
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute'
  }
});

