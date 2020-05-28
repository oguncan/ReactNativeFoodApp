import React from 'react';

import {View, StyleSheet, Button, Image, Text, Platform, FlatList} from 'react-native';
import {CATEGORIES, MEAL} from '../data/dummy-data';
import Colors from '../constants/Colors'
import MealsNavigator from '../navigation/MealsNavigator';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
    
    

    const categoryId=props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)
    const displayedMeals = MEAL.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);
    return (
        <MealList listData={displayedMeals} 
                    navigation={props.navigation}/>
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)
    
    return {
        headerTitle: selectedCategory.title,
    };

}

const styles = StyleSheet.create({
    
});

export default CategoryMealsScreen;