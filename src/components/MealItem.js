import React from 'react';
import {TouchableOpacity,View, StyleSheet, Button, Text,ImageBackground} from 'react-native';

import DefaultText from './DefaultText'
const MealItem = (props) => {
    return (
        <View style={styles.mealItem} >
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                    <ImageBackground source={{uri: props.image}} 
                        style={styles.bgImage}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}
                                numberOfLines={1}>
                                {props.title}
                            </Text>
                        </View>
                    </ImageBackground>    
                    </View>
                    <View style={{...styles.mealRow,...styles.mealDetail}}>
                        <DefaultText> 
                            {props.duration} dakika 
                        </DefaultText>
                        <DefaultText>
                            {props.complexity.toUpperCase()}  
                        </DefaultText>
                        <DefaultText>
                            {props.affordability.toUpperCase()} 
                        </DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height: 150   
    },
    mealRow:{
        flexDirection:'row'
    },
    titleContainer:{
        backgroundColor:'rgba(0,0,0,0.7)',
        paddingVertical:5,
        paddingHorizontal:12,
    },
    mealItem:{
        height:200,
        borderRadius:10,
        width:'100%',
        marginVertical:10,

        overflow:'hidden',
        backgroundColor: '#f5f5f5'
    },
    mealHeader:{
        height: '85%'
    },
    mealDetail:{
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center',
        height:"15%"
    },
    bgImage:{
        width: '100%',
        height: '100%',
        justifyContent:'flex-end'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:20,
        color:'white',
        backgroundColor:'rgba(0,0,0,0.7)',
        paddingVertical:5,
        paddingHorizontal:12,
        textAlign:'center'
    }
});

export default MealItem;