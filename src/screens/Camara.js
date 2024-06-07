import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const Camara = () => {
  return (
    <View className='flex-1 justify-center items-center bg-white relative'>
      <StatusBar style="auto" />
      <View className='absolute inset-0'>
        <View className='absolute inset-0 bg-gradient-to-t from-[#00FF38]/15 via-[#FFFFFF]/15 to-[#D1FF1A]/15'></View>
      </View>
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

export default Camara