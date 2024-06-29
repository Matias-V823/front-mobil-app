import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, Modal, Pressable } from 'react-native';
import { styled } from 'nativewind';
import Feather from '@expo/vector-icons/Feather';

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledImage = styled(Image);
const StyledModal = styled(Modal);
const StyledPressable = styled(Pressable);

const Perfil = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <StyledSafeAreaView className="flex-1 bg-white items-center">
      <StyledView className="p-4 w-full items-center">
        <StyledImage
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your profile image URL
          className="w-32 h-32 rounded-full mt-4"
        />
        <StyledText className="text-black text-2xl font-bold mt-4">
          Matías Jesús Varas Aquín
        </StyledText>

        {/* Boton Configuracion de perfil */}
        <StyledView className="w-full mt-6">
          <StyledTouchableOpacity className="flex-row items-center bg-gray-100 rounded-2xl p-4 mt-2">
            <StyledView className="w-10 h-10 bg-green-600 rounded-full items-center justify-center mr-4">
              <Feather name="at-sign" size={24} color="white" />
            </StyledView>
            <StyledView>
              <StyledText className="text-black font-bold">Configuración de Perfil</StyledText>
              <StyledText className="text-gray-600">Ve y modifica tu usuario</StyledText>
            </StyledView>
          </StyledTouchableOpacity>

          {/* Boton Privacidad */}
          <StyledTouchableOpacity className="flex-row items-center bg-gray-100 rounded-2xl p-4 mt-2">
            <StyledView className="w-10 h-10 bg-green-600 rounded-full items-center justify-center mr-4">
              <Feather name="archive" size={24} color="white" />
            </StyledView>
            <StyledView>
              <StyledText className="text-black font-bold">Privacidad</StyledText>
              <StyledText className="text-gray-600">Cambia tu contraseña</StyledText>
            </StyledView>
          </StyledTouchableOpacity>

          {/* Boton Acerca de */}
          <StyledTouchableOpacity 
            className="flex-row items-center bg-gray-100 rounded-2xl p-4 mt-2"
            onPress={() => setModalVisible(true)}
          >
            <StyledView className="w-10 h-10 bg-green-600 rounded-full items-center justify-center mr-4">
              <Feather name="info" size={24} color="white" />
            </StyledView>
            <StyledView>
              <StyledText className="text-black font-bold">Acerca de</StyledText>
              <StyledText className="text-gray-600">Datos de la aplicación</StyledText>
            </StyledView>
          </StyledTouchableOpacity>
        </StyledView>

        {/* Boton Cerrar Sesion */}
        <StyledTouchableOpacity className="bg-green-600 rounded-2xl p-4 mt-6 w-full items-center">
          <StyledText className="text-white font-bold">Cerrar Sesión</StyledText>
        </StyledTouchableOpacity>
      </StyledView>

      {/* Pop Up Acerca de */}
      <StyledModal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <StyledView className="flex-1 justify-center items-center">
          <StyledView className="bg-white rounded-2xl p-6 w-3/4 items-center shadow-lg">
            <StyledText className="text-black text-xl font-bold mb-4">Acerca de</StyledText>
            <StyledText className="text-gray-800">Criminal Scan Copyright 2024 Cone y sus Zanahorias. All rights reserved.</StyledText>
            <StyledPressable
              className="bg-green-600 rounded-2xl p-4 mt-6 w-full items-center"
              onPress={() => setModalVisible(false)}
            >
              <StyledText className="text-white font-bold">Cerrar</StyledText>
            </StyledPressable>
          </StyledView>
        </StyledView>
      </StyledModal>
    </StyledSafeAreaView>
  );
};

export default Perfil;
