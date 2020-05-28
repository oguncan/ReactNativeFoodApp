import React from 'react';

import {TouchableOpacity, View, StyleSheet, Button , Text,Platform} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';


const CategoryGridTile= (props) => {
    let TouchableCom=TouchableOpacity;
    if(Platform.OS === 'android' && Platform.version >= 21) {
        TouchableCom = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
            <TouchableCom style={{flex:1}}
            onPress={props.onSelect}>
                <View style={{...styles.container, ... {backgroundColor:props.color}}}>
                    <Text numberOfLines={2} style={styles.title}>
                        {props.title}
                    </Text>
                </View>
            </TouchableCom>
        </View>
    )
}

const styles= StyleSheet.create({
    gridItem: {
        flex:1,
        margin:15,
        height:150,
        borderRadius:10,
        overflow: Platform.OS ==='android' && Platform.Version >= 21 ?  'hidden' : 'visible',
        elevation:5,
        shadowColor: 'black',
        shadowOpacity : 0.26,
        shadowOffset :{width:0 , height: 2},
        shadowRadius: 10,

    },
    container: {
        flex:1,
        height: 150,
        borderRadius: 10,
        
        padding: 15,
        justifyContent: 'flex-end',
        alignItems:'flex-end',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign:'right'
    },
    
});

export default CategoryGridTile;