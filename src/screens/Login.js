import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
import { StatusBar } from 'expo-status-bar';


const Login = () => {
    return (
      <View className='flex-1 justify-center items-center bg-gradient-to-t from-green-200 to-white'>
        <StatusBar style="auto" />
        <TextInput
          className='w-4/5 h-12 px-4 mb-4 border border-gray-300 rounded-lg'
          placeholder="Rut"
        />
        <TextInput
          className='w-4/5 h-12 px-4 mb-4 border border-gray-300 rounded-lg'
          placeholder="Clave"
          secureTextEntry
        />
        <TouchableOpacity className='w-4/5 h-12 bg-[#007328] rounded-lg justify-center items-center'>
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
  }
  
  export default Login;