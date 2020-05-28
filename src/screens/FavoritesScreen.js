import React from 'react';

import {View, StyleSheet, Button, Image, Text} from 'react-native';
import MealList from '../components/MealList';
import {MEAL} from '../data/dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Header } from 'react-navigation-stack';
const FavoritesScreen = (props) => {
    const favMeals = MEAL.filter(meal => meal.id === 'm1' || meal.id ==='m2')
    return (
        <MealList listData = {favMeals}/>
    )
}

const styles = StyleSheet.create({
    screen:{
        
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        
    }
});

FavoritesScreen.navigationOptions = navigationData => {
    return{
        headerTitle: 'Favorite Screen',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName='ios-menu' onPress={() => {
                navigationData.navigation.toggleDrawer();
            }}/>
            </HeaderButtons>
        }
}
export default FavoritesScreen;