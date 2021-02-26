import React from 'react';
import { View, Text, ImageBackground } from 'react-native'
import Button from "../Button";
import styles from './styles';

const WineItem = (props) => {
    return (
    <View style={styles.wineContainer}>
        <ImageBackground
          source={require('../../assets/images/red-wine.jpg')}
          style={styles.image} /> 
        <View style={styles.titles}>
          <Text style={styles.title}>Red Wines</Text>
          <Text style={styles.subtitle}>Starting at $60</Text>
        </View>
        <Button type="primary"/> 
      </View>
    );
};

export default WineItem