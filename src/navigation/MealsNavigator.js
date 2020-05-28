import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen'
import {Platform,Text} from 'react-native';
import React from 'react'
import Colors from '../constants/Colors';
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { FlingGestureHandler } from 'react-native-gesture-handler';
// import CategoriesScreen from '../screens/CategoriesScreen'
const defaultNavigation = {

        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintStyle: {
        fontFamily: 'open-sans-bold'  
        },
        headerBackTitleStyle: {
            fontFamily: 'open-sans-bold'
        },
        headerTintColor: 
        Platform.OS === 'android' ? 'white' : Colors.primaryColor
    
}

const MealsNavigator= createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal categories'
        
        }
        },
    CategoryMeals: {
        screen: CategoryMealsScreen,
        navigationOptions: {
           
        }
    },
    MealDetail : {
        screen: MealDetailScreen
    }
}, 
{
    //initialRouteName: 'Categories',
    defaultNavigationOptions: defaultNavigation
});

const FavoriteNavigator = createStackNavigator({
    Favorite: FavoritesScreen,
    MealDetail: MealDetailScreen
},
{
    defaultNavigationOptions: defaultNavigation
});

const tabScreenConfig = {
    Meals: {screen :MealsNavigator, navigationOptions: {
        tabBarLabel: 'YEMEK!',
        tabBarIcon : (tabInfo) => {
            // console.log(tabInfo);
            return <Ionicons 
            size={25} 
            color={tabInfo.tintColor} 
            name='ios-restaurant'/>;
        },
        tabBarColor: Colors.primaryColor,
        tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>YEMEK!</Text> : 'YEMEK!'
    }},
    Favorites:{ screen: FavoriteNavigator,  navigationOptions: {
        tabBarLabel: 'Favorites!',
        
        tabBarIcon : (tabInfo) => {
            // console.log(tabInfo);
            return <Ionicons 
            size={25} 
            color={tabInfo.tintColor}
            name='ios-star'/>;
        },
        tabBarColor:Colors.accentColor,
        tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorilerin!</Text> : 'Favorilerin!'
    } }
}
const MealsFavTabNavigator = 
    Platform.OS==='android' 
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
        barStyle: {
            backgroundColor: Colors.primaryColor
        },

    }) 
    : createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions : {
        labelStyle: {
            fontFamily:'open-sans-bold'
        },
        activeTintColor:Colors.accentColor
    }
});

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
},
{
    // navigationOptions: {
    //     drawerLabel: 'Filters'
    // },
    defaultNavigationOptions: defaultNavigation
});

const MainNavigator = createDrawerNavigator({
    MealsFavs: {screen: MealsFavTabNavigator, navigationOptions:{
        drawerLabel:'Meal'
    }},
    Filters:FiltersNavigator
    
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator);