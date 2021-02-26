import React from 'react';
import { View, Text, Pressable } from "react-native";
import styles from './styles'

const Button = (props) => {

    const type = props.type; 
    const backgroundColor = type === 'primary' ? '#3A1110CC' : '#EED0CFCC';
    const textColor = type === 'primary' ? '#EED0CF' : '#3A1110';
    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => {
                    console.log("hey there")
                }}>
                <Text style={[styles.text, {color: textColor}]}>Custom Order</Text>
            </Pressable>
      
        </View>
    )
}

export default Button; 