import React from 'react';
import { View, Text, FlatList } from 'react-native'
import WineItem from '../WineItem'

import styles from './styles'
import wines from './wine'; 

const WineList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={wines}
                renderItem={({ item}) => <WineItem wine={item}/>}
            /> 
        </View>
    );
};

export default WineList;