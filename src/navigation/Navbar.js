import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import Home from "../screens/Home";
import Asistencia from "../screens/Asistencia";
import Camara from "../screens/Camara";
import Login from "../screens/Login";
import Settings from "../screens/SettingsScreen";
import Stack from "../screens/StackScreen";

//Iconos
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';






const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen  
                name="Inicio" 
                component={Home} 
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({color , size})=>(
                        <Feather name="home" size={24} color="black" />
                    ),
                }}
            
            />
            <Tab.Screen  
                name="Asistencia" 
                component={Asistencia} 
                options={{
                    tabBarLabel: 'Asistencia',
                    tabBarIcon: ({color , size})=>(
                        <Feather name="message-circle" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen  
                name="Camara" 
                component={Camara} 
                options={{
                    tabBarLabel: 'Camara',
                    tabBarIcon: ({color , size})=>(
                        <Ionicons name="camera-outline" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen 
                name="Cuenta" 
                component={Settings} 
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({color , size})=>(
                        <MaterialCommunityIcons name="account-outline" size={24} color="black" />
                    ),
                }}
             
             />
        </Tab.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}