import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native'
import WineItem from '../WineItem'

import styles from './styles'
import wines from './wine'; 

const WineList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={wines}
                renderItem={({ item }) => <WineItem wine={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            /> 
        </View>
    );
};

export default WineList;