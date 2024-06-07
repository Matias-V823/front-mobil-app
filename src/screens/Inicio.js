import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { styled } from 'nativewind';
import Feather from '@expo/vector-icons/Feather';

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledImage = styled(Image);

const userData = {
  name: 'Matías Jesús Varas Aquín',
  rut: '20.999.999-1',
  rank: 'Cabo Mayor',
  code: '010093-L',
  squadron: 'OS7',
  bloodGroup: 'O4 RH +',
  validity: '08/2024',
};

const criminals = ['Criminal 1', 'Criminal 2', 'Criminal 3']; // Agrega más criminales aquí si es necesario

const Inicio = () => {
  return (
    <StyledSafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <StyledView className="p-4">
          <StyledText className="text-green-600 text-2xl font-bold">Criminal Scan</StyledText>
          <StyledText className="text-black text-3xl font-bold mt-2">Inicio</StyledText>

          <StyledView className="rounded-2xl shadow-lg bg-white mt-4">
            <StyledView className="bg-green-600 rounded-t-2xl p-2">
              <StyledText className="text-white font-bold text-center">CREDENCIAL</StyledText>
            </StyledView>
            <StyledView className="flex-row p-4">
              <StyledView className="w-16 h-16 bg-gray-400 rounded mr-4" />
              <StyledView>
                <StyledText className="text-black font-bold">{userData.name}</StyledText>
                <StyledText className="text-gray-600">Rut: {userData.rut}</StyledText>
                <StyledText className="text-gray-600">Grado: {userData.rank}</StyledText>
                <StyledText className="text-gray-600">Código: {userData.code}</StyledText>
                <StyledText className="text-gray-600">Escuadrón: {userData.squadron}</StyledText>
                <StyledText className="text-gray-600">Grupo Sanguíneo: {userData.bloodGroup}</StyledText>
                <StyledText className="text-gray-600">Validez: {userData.validity}</StyledText>
              </StyledView>
            </StyledView>
          </StyledView>

          <StyledTouchableOpacity className="bg-green-600 rounded-2xl p-4 mt-6 w-full items-center flex-row justify-center">
            <Feather name="help-circle" size={24} color="white" className="mr-2" />
            <StyledText className="text-white font-bold">Asistencia</StyledText>
          </StyledTouchableOpacity>

          <StyledText className="text-black text-xl font-bold mt-4">Criminales más Buscados</StyledText>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mt-4">
            {criminals.map((criminal, index) => (
              <StyledView key={index} className="bg-gray-100 p-4 rounded-lg w-60 mr-4" style={{ height: 248 }}>
                <StyledText className="text-gray-600">{criminal}</StyledText>
              </StyledView>
            ))}
          </ScrollView>
        </StyledView>
      </ScrollView>
    </StyledSafeAreaView>
  );
};

export default Inicio;
