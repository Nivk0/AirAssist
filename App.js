import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './navigation/home';
import Map from './navigation/map';
import Alert from './navigation/alert';


const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle:
            {backgroundColor: '#086591'},
          headerTitleStyle:
            { fontSize: 23, color: 'white'},
          tabBarStyle:
            {backgroundColor: '#086591'},
          tabBarLabelStyle: {
            color: 'white'
          }
          }}>
        {<Tab.Screen name = "Home" component = {Home}/> }
        {<Tab.Screen name = "Alert" component = {Alert}/> }
        {<Tab.Screen name = "Map" component = {Map}/> }
        

      </Tab.Navigator>
      </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
export default App;