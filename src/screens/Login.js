import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { ApiKeyContext } from '../components/ApiKey';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const response = await inicioSesion();
    setLoading(false);
    if (response && response.APIKEY) { 
      setApiKey(response.APIKEY);
      navigation.replace('Home');
    } else {
      console.log('Login fallido');
    }
  };

  return (
    <View className='flex-1'>
      <StatusBar style="auto" />
      <View className='flex-1 justify-center items-center'>
        <Image source={require('../assets/icon.png')} style={{ width: 100, height: 100, position: 'absolute', top: '18%' }} />
        <View className='w-4/5 justify-center items-center'>
          <TextInput
            className='w-full h-12 px-4 mb-4 border border-gray-300 bg-white rounded-lg'
            placeholder="Correo Electrónico"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            className='w-full h-12 px-4 mb-4 border border-gray-300 bg-white rounded-lg'
            placeholder="Clave"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity 
            className='w-full h-12 bg-[#007328] rounded-lg justify-center items-center' 
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <Text className='text-white text-lg font-semibold'>Iniciar Sesión</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity className='mt-4'>
            <Text className='text-[#007328]'>¿Olvidaste la clave?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className='absolute bottom-8 w-full items-center'>
        <Text className='font-bold text-green-700'>Criminal <Text className='font-light'>Scan</Text></Text>
      </View>
    </View>
  );
};

export default Login;
