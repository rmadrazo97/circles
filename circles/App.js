import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'; // import icons

import HomeScreen from './src/screens/HomeScreen';
import CircleScreen from './src/screens/CircleScreen';
import ChatScreen from './src/screens/ChatScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import PostScreen from './src/screens/PostScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Circles" 
          component={CircleScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="circle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Post" 
          component={PostScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="plus" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Messages" 
          component={ChatScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chat" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
