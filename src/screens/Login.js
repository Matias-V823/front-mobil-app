import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
import { StatusBar } from 'expo-status-bar';
import { ApiKeyContext } from '../components/ApiKey';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setApiKey } = useContext(ApiKeyContext);

  const inicioSesion = async () => {
    try {
      const response = await fetch('https://wpcpsvb9-8000.brs.devtunnels.ms/sesion/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const json = await response.json();
      
      return json;
    } catch (error) {
      console.error('Error fetching :', error);
      return null;
    }
  };

  const handleLogin = async () => {
    const response = await inicioSesion();
    if (response && response.APIKEY) { 
      console.log("Api Key: " ,response.APIKEY)
      setApiKey(response.APIKEY);
      navigation.replace('Home');
    } else {
      console.log('Login fallido');
      
    }
  };

  return (
    <View className='flex-1 justify-center items-center bg-gradient-to-t from-green-200 to-white'>
      <StatusBar style="auto" />
      <TextInput
        className='w-4/5 h-12 px-4 mb-4 border border-gray-300 rounded-lg'
        placeholder="Correo"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className='w-4/5 h-12 px-4 mb-4 border border-gray-300 rounded-lg'
        placeholder="Clave"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity className='w-4/5 h-12 bg-[#007328] rounded-lg justify-center items-center' onPress={handleLogin}>
        <Text className='text-white text-lg font-semibold'>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity className='mt-4'>
        <Text className='text-[#007328]'>¿Olvidaste la clave?</Text>
      </TouchableOpacity>
      <View className='absolute bottom-8'>
        <Text className='text-black'>Criminal <Text className='font-bold'>Scan</Text></Text>
      </View>
    </View>
  );
};

export default Login;