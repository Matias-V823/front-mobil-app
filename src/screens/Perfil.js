import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, Modal, Pressable, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { styled } from 'nativewind';
import Feather from '@expo/vector-icons/Feather';
import { BlurView } from 'expo-blur';

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledImage = styled(Image);
const StyledModal = styled(Modal);
const StyledPressable = styled(Pressable);
const StyledTextInput = styled(TextInput);

const Perfil = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [configModalVisible, setConfigModalVisible] = useState(false);
  const [privacyModalVisible, setPrivacyModalVisible] = useState(false);

  return (
    <StyledSafeAreaView className="flex-1 bg-white items-center">
      <StyledView className="p-4 w-full items-center">
        <StyledImage
          source={{ uri: 'https://via.placeholder.com/200' }} // Reemplaza con tu URL de imagen de perfil
          className="w-40 h-40 rounded-full mt-8"
        />
        <StyledText className="text-black text-3xl font-bold mt-8">
          Matías Jesús Varas Aquín
        </StyledText>

        {/* Boton Configuracion de perfil */}
        <StyledView className="w-full mt-10">
          <StyledTouchableOpacity className="flex-row items-center bg-gray-100 rounded-2xl p-4 mt-2" onPress={() => setConfigModalVisible(true)}>
            <StyledView className="w-10 h-10 bg-green-600 rounded-full items-center justify-center mr-4">
              <Feather name="at-sign" size={24} color="white" />
            </StyledView>
            <StyledView>
              <StyledText className="text-black font-bold text-lg">Configuración de Perfil</StyledText>
              <StyledText className="text-gray-600">Ve y modifica tu usuario</StyledText>
            </StyledView>
          </StyledTouchableOpacity>

          {/* Boton Privacidad */}
          <StyledTouchableOpacity className="flex-row items-center bg-gray-100 rounded-2xl p-4 mt-2" onPress={() => setPrivacyModalVisible(true)}>
            <StyledView className="w-10 h-10 bg-green-600 rounded-full items-center justify-center mr-4">
              <Feather name="archive" size={24} color="white" />
            </StyledView>
            <StyledView>
              <StyledText className="text-black font-bold text-lg">Privacidad</StyledText>
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
              <StyledText className="text-black font-bold text-lg">Acerca de</StyledText>
              <StyledText className="text-gray-600">Datos de la aplicación</StyledText>
            </StyledView>
          </StyledTouchableOpacity>
        </StyledView>

        {/* Boton Cerrar Sesion */}
        <StyledTouchableOpacity className="bg-green-600 rounded-2xl p-4 mt-2 w-full items-center">
          <StyledText className="text-white font-bold text-lg">Cerrar Sesión</StyledText>
        </StyledTouchableOpacity>
      </StyledView>

      {/* Modal Configuración de Perfil */}
      <StyledModal
        animationType="slide"
        transparent={true}
        visible={configModalVisible}
        onRequestClose={() => setConfigModalVisible(false)}
      >
        <BlurView intensity={50} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <StyledView className="bg-white rounded-2xl p-6 w-3/4 items-center">
            <StyledText className="text-black text-xl font-bold mb-4">Configuración de Perfil</StyledText>
            <StyledText className="text-gray-800 mb-4">Aquí puedes modificar la configuración de tu perfil.</StyledText>
            <StyledTextInput
              className="w-full border border-gray-300 rounded p-2 mb-4"
              placeholder="Nombre"
              defaultValue="Matías Jesús Varas Aquín"
            />
            <StyledPressable
              className="bg-green-600 rounded-2xl p-4 mt-6 w-full items-center"
              onPress={() => setConfigModalVisible(false)}
            >
              <StyledText className="text-white font-bold">Guardar</StyledText>
            </StyledPressable>
            <StyledPressable
              className="bg-red-600 rounded-2xl p-4 mt-2 w-full items-center"
              onPress={() => setConfigModalVisible(false)}
            >
              <StyledText className="text-white font-bold">Cancelar</StyledText>
            </StyledPressable>
          </StyledView>
        </BlurView>
      </StyledModal>

      {/* Modal Privacidad */}
      <StyledModal
        animationType="slide"
        transparent={true}
        visible={privacyModalVisible}
        onRequestClose={() => setPrivacyModalVisible(false)}
      >
        <BlurView intensity={50} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <StyledView className="bg-white rounded-2xl p-6 w-3/4 items-center">
            <StyledText className="text-black text-xl font-bold mb-4">Privacidad</StyledText>
            <StyledText className="text-gray-800 mb-4">Aquí puedes cambiar tu contraseña y configurar la privacidad.</StyledText>
            <StyledTextInput
              className="w-full border border-gray-300 rounded p-2 mb-4"
              placeholder="Contraseña actual"
              secureTextEntry
            />
            <StyledTextInput
              className="w-full border border-gray-300 rounded p-2 mb-4"
              placeholder="Nueva contraseña"
              secureTextEntry
            />
            <StyledTextInput
              className="w-full border border-gray-300 rounded p-2 mb-4"
              placeholder="Confirmar nueva contraseña"
              secureTextEntry
            />
            <StyledPressable
              className="bg-green-600 rounded-2xl p-4 mt-6 w-full items-center"
              onPress={() => setPrivacyModalVisible(false)}
            >
              <StyledText className="text-white font-bold">Guardar</StyledText>
            </StyledPressable>
            <StyledPressable
              className="bg-red-600 rounded-2xl p-4 mt-2 w-full items-center"
              onPress={() => setPrivacyModalVisible(false)}
            >
              <StyledText className="text-white font-bold">Cancelar</StyledText>
            </StyledPressable>
          </StyledView>
        </BlurView>
      </StyledModal>

      {/* Modal Acerca de */}
      <StyledModal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <BlurView intensity={50} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <StyledView className="bg-white rounded-2xl p-6 w-3/4 items-center">
            <StyledText className="text-black text-xl font-bold mb-4">Acerca de</StyledText>
            <StyledText className="text-gray-800 mb-4">Criminal Scan Copyright 2024 Cone y sus Zanahorias. All rights reserved.</StyledText>
            <StyledPressable
              className="bg-green-600 rounded-2xl p-4 w-full items-center"
              onPress={() => setModalVisible(false)}
            >
              <StyledText className="text-white font-bold">Cerrar</StyledText>
            </StyledPressable>
          </StyledView>
        </BlurView>
      </StyledModal>
    </StyledSafeAreaView>
  );
};

export default Perfil;
