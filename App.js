import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import HomeScreen from './pages/HomeScreen';
import PopularScreen from './pages/PopularScreen';
function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: 'purple' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Today' }}/>
      </Stack.Navigator>
  );
}

function PopularStack() {
  return (
      <Stack.Navigator
        initialRouteName="Popular"
        screenOptions={{
          headerStyle: { backgroundColor: 'purple' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen name="Popular" component={PopularScreen} options={{ title: 'Popular News' }}/>
      </Stack.Navigator>
  );
}
export default class App extends React.Component {
  
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: 'purple',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Today',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar" color={color} size={size} />
            ),
          }}  />
          
          <Tab.Screen
          name="Popular Stack"
          component={PopularStack}
          options={{
            tabBarLabel: 'Popular News',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="binoculars" color={color} size={size} />
            ),
          }}  />
      </Tab.Navigator>
      </NavigationContainer>
      
    );
  }
}