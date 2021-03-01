import React from 'react';
import { View, Text, Pressable } from "react-native";
import styles from './styles'

const Button = (props) => {

    const { type, content, onPress } = props;

    const backgroundColor = type === 'primary' ? '#3A1110DD' : '#EED0CFDD';
    const textColor = type === 'primary' ? '#EED0CF' : '#3A1110';
    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => { onPress()}}>
                <Text style={[styles.text, { color: textColor }]}>{ content }</Text>
            </Pressable>
      
        </View>
    )
}

export default Button; 