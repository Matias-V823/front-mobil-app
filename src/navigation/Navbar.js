import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

// Screens
import Inicio from '../screens/Inicio';
import Busqueda from '../screens/Busqueda';
import Camara from '../screens/Camara';
import Perfil from '../screens/Perfil';
import Asistencia from '../screens/Asistencia';

// Iconos
import Feather from '@expo/vector-icons/Feather';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function InicioStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: true }} />
      <Stack.Screen name="Asistencia" component={Asistencia} options={{ headerTitle: 'Asistencia' }} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'white' },
      }}
    >
      <Tab.Screen
        name="InicioTab"
        component={InicioStack}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'green' : 'gray' }}>Inicio</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Feather name="home" size={24} color={focused ? 'green' : 'gray'} />
          ),
          headerShown: false, // Oculta el header de Inicio en la navegación de pestañas
        }}
      />
      <Tab.Screen
        name="Busqueda"
        component={Busqueda}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'green' : 'gray' }}>Busqueda</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Feather name="search" size={24} color={focused ? 'green' : 'gray'} />
          ),
        }}
      />
      <Tab.Screen
        name="Camara"
        component={Camara}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'green' : 'gray' }}>Camara</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Feather name="camera" size={24} color={focused ? 'green' : 'gray'} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'green' : 'gray' }}>Perfil</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Feather name="user" size={24} color={focused ? 'green' : 'gray'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
