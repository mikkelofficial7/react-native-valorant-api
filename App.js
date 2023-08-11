import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Color from './pkg/constant/Colors.js'
import LoginView from './pkg/fragment/LoginView.js'
import MainView from './pkg/fragment/MainView.js'

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar backgroundColor="#000000" barStyle="light-content"/>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginView}
            options={{
              title: "Home",
              headerShown: false,
              stackAnimation:'slide_from_right',
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
          />
          <Stack.Screen
            name="Main"
            component={MainView}
            options={{
              title: "Main Page",
              headerShown: true,
              headerStyle: { backgroundColor: Color.green }, // Set the header background color
              headerTintColor: Color.white, // Set the header text color
              stackAnimation:'slide_from_right',
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};
