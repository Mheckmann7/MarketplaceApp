import React from 'react';
import { View, Text, ImageBackground } from 'react-native'
import Button from "../Button";
import styles from './styles';

const WineItem = (props) => {

  const { title, subtitle, subtitleCTA, image} = props.wine;
    return (
    <View style={styles.wineContainer}>
        <ImageBackground
          source={image}
          style={styles.image} /> 
        <View style={styles.titles}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            {subtitle}
            {' '}
            <Text style={styles.subtitleCTA}>
              {subtitleCTA}
            </Text>
          </Text>
        </View>

        <View style={styles.buttonContainer}>
        <Button type="primary"
          content={"Readily Avaliable"}
          onPress={() => {
          console.log('Custom')
          }} /> 
          <Button type="secondary"
          content={"Custom Order"}
          onPress={() => {
          console.log('Custom')
            }} /> 
          </View>
      </View>
    );
};

export default WineItem