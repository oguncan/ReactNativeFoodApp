import React from 'react';

import {FlatList,View, StyleSheet, Button, Image, Text, TouchableOpacity} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors'
import CategoryGridTile from '../components/CategoryGridTile';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Header } from 'react-navigation-stack';
const CategoriesScreen = (props) => {
    const renderGridItem = itemData => {
        return( 
            <CategoryGridTile title={itemData.item.title}
            color= {itemData.item.color}
            onSelect={() => {
                props.navigation.navigate({
                    routeName:'CategoryMeals', 
                    params: {
                        categoryId: itemData.item.id,
                }})  
            }}
            />
        )
        
    }
    return (
        <FlatList data={CATEGORIES}
        
            keyExtractor={(item,index) => item.id}
            renderItem={renderGridItem}
            numColumns={2}/>
        
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    
});
CategoriesScreen.navigationOptions = (navigationData) => {
    return{
    headerTitle: 'Meal Categories',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName='ios-menu' onPress={() => {
            navigationData.navigation.toggleDrawer();
        }}/>
        </HeaderButtons>
    }
}
export default CategoriesScreen;