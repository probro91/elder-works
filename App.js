import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Jobs from "./screens/Jobs";
import JobDetails from "./screens/JobDetails";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
      return (
        <NavigationContainer >
          <Stack.Navigator initialRouteName='Jobs'>
            <Stack.Screen name="Jobs" component={Jobs} options={{ headerShown: true }} />
            <Stack.Screen name="JobDetails" component={JobDetails} options={{ headerShown: true }} />
          </Stack.Navigator>
        </NavigationContainer>
         
      );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
