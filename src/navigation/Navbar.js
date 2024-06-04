import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from 'react-native';

//Screens
import Inicio from "../screens/Inicio";
import Busqueda from "../screens/Busqueda";
import Camara from "../screens/Camara";
import Perfil from "../screens/Perfil";

//Iconos
import Feather from '@expo/vector-icons/Feather';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen  
                name="Inicio" 
                component={Inicio} 
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? 'green' : 'gray' }}>Inicio</Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Feather name="home" size={24} color={focused ? 'green' : 'gray'} />
                    ),
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
