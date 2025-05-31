import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import CalendarScreen from '../screens/CalendarScreen';
import NotificationsScreen from '../screens/NotificationScreen';
import FamilyGroupsScreen from '../screens/FamilyGroupsScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
      <View>
        <DrawerItemList {...props} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <DrawerItem
          label="Configuración"
          onPress={() => props.navigation.navigate('Configuración')}
        />
        <DrawerItem
          label="Cerrar sesión"
          onPress={() => props.navigation.navigate('Cerrar sesión')}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = () => (
  <Drawer.Navigator id={undefined}
    drawerContent={props => <CustomDrawerContent {...props} />}
    screenOptions={{
      headerShown: true,
    }}
  >
    <Drawer.Screen name="Inicio" component={BottomTabNavigator} options={{ title: 'Home' }} />
    <Drawer.Screen name="Calendario" component={CalendarScreen} />
    <Drawer.Screen name="Notificaciones" component={NotificationsScreen} />
    <Drawer.Screen name="Familia" component={FamilyGroupsScreen} />
    <Drawer.Screen name="Configuración" component={CalendarScreen} options={{ drawerLabel: () => null, title: null, drawerIcon: () => null }} />
    <Drawer.Screen name="Cerrar sesión" component={CalendarScreen} options={{ drawerLabel: () => null, title: null, drawerIcon: () => null }} />
  </Drawer.Navigator>
);

export default DrawerNavigator;