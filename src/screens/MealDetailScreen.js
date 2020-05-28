import React, {useState} from 'react';

import {View, StyleSheet, ScrollView, Image, Button, Text} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {MEAL} from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import DefaultText from '../components/DefaultText';

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}

const MealDetailScreen = (props) => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEAL.find(meal => meal.id===mealId);
    
    
    return (
        <ScrollView>
            <Image source={{uri:selectedMeal.imageURL}} style={styles.image}/>
            <View style={styles.detail}>
                <DefaultText> 
                    {selectedMeal.duration} dakika 
                </DefaultText>
                <DefaultText>
                    {selectedMeal.complexity.toUpperCase()}  
                </DefaultText>
                <DefaultText>
                    {selectedMeal.affordability.toUpperCase()} 
                </DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            
            {selectedMeal.ingredients.map(ingredient => (
                <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            
            {selectedMeal.steps.map(step => (
                <ListItem key={step}>{step}</ListItem>
            ))}        
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width: '100%',
        height:200
    },
    mealRow:{
        flexDirection:'row'
    },
    mealDetail:{
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center',
        height:"15%"
    },
    detail: {
    flexDirection:'row',
    padding: 15,
    justifyContent:'space-around',  
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize: 22,
        textAlign:'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: "#ccc",
        borderWidth: 1,
        padding:10
    }
});

MealDetailScreen.navigationOptions = navigationData =>{
    const mealId=navigationData.navigation.getParam('mealId');
    const selectedMeal = MEAL.find(meal => meal.id===mealId);
    
    return {
        headerTitle: selectedMeal.title,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title = 'Favorite'  iconName= 'ios-star' onPress={() => {
                
                
            }}/>
        </HeaderButtons>
    };
}

export default MealDetailScreen;