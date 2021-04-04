import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import ShopDataScreen from '../screens/ShopDataScreen';
import ShopListScreen from '../screens/ShopListScreen';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const SwitchNavigator = createSwitchNavigator({
    // welcome: WelcomeScreen,
    home: HomeScreen,
    shopData: ShopDataScreen,
    shoppingList: ShopListScreen,
});
export const AppContainer = createAppContainer(SwitchNavigator);