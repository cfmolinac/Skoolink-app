import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarScreen from '../screens/CalendarScreen';
import NotificationsScreen from '../screens/NotificationScreen';
import FamilyGroupsScreen from '../screens/FamilyGroupsScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    id={undefined}
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#FF7043', // color cálido ejemplo
      tabBarStyle: { borderTopLeftRadius: 16, borderTopRightRadius: 16 },
    }}
  >
    <Tab.Screen name="Calendario" component={CalendarScreen} />
    <Tab.Screen name="Notificaciones" component={NotificationsScreen} />
    <Tab.Screen name="Familia" component={FamilyGroupsScreen} />
  </Tab.Navigator>
);

export default BottomTabNavigator;