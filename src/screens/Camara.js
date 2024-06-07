import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, ActivityIndicator, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styled } from 'nativewind';
import { FullWindowOverlay } from 'react-native-screens';

const Camara = () => {
  const StyledSafeAreaView = styled(SafeAreaView);
  const StyledView = styled(View);
  const StyledText = styled(Text);
  const StyledTouchableOpacity = styled(TouchableOpacity);
  const StyledImage = styled(Image);

  const [selectedImage, setSelectedImage] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImage = async (option) => {
    try {
      let result;
      if (option === 1) {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          quality: 1,
        });
      } else {
        let cameraResult = await ImagePicker.requestCameraPermissionsAsync({
          allowsEditing: true,
          quality: 1,
        });
        if (cameraResult.granted) {
          result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 1,
          });
        } else {
          throw new Error("Permisos de cámara no concedidos");
        }
      }

      if (result && !result.cancelled && result.assets.length > 0) {
        const imageUri = result.assets[0].uri;
        setSelectedImage(imageUri);
        await sendImageToApi(imageUri);
      } else {
        console.log("La selección de imagen fue cancelada o no se seleccionó ninguna imagen");
      }
    } catch (error) {
      Alert.alert("Error", "Error al cargar la imagen: " + error.message);
    }
  };

  const sendImageToApi = async (imageUri) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('image', {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'image.jpg',
      });

      const response = await fetch('http://192.168.70.147:8000/api/analizar_imagen/', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const json = await response.json();
      setApiResponse(json);
    } catch (error) {
      Alert.alert("Error", "Error al enviar la imagen a la API: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <StyledView className="p-4">
      <StyledText className="text-black text-5xl font-bold mt-4">Escaneo</StyledText>
      <StyledSafeAreaView className="flex-1 justify-center items-center p-6 w-full mt-4">
        {selectedImage && (
          <StyledImage
            source={{ uri: selectedImage }}
            style={{ width: 200, height: 200, marginBottom: 20, borderRadius: 100}}
          />
        )}
        <StyledView className="flex flex-column justify-around w-full p-6 rounded-lg gap-6">
          <StyledTouchableOpacity onPress={() => uploadImage(0)} className="bg-green-600 p-4 rounded-lg shadow-lg">
            <StyledText className="text-white text-lg font-semibold text-center">Tomar Foto</StyledText>
          </StyledTouchableOpacity>
          <StyledTouchableOpacity onPress={() => uploadImage(1)} className="bg-green-600 p-4 rounded-lg shadow-lg">
            <StyledText className="text-white text-lg font-semibold text-center">Usar Galería</StyledText>
          </StyledTouchableOpacity>
        </StyledView>
        {loading && (
          <ActivityIndicator size="large" color="#00ff00" className="mt-4" />
        )}
        {apiResponse && (
          <StyledView className="mt-6 p-4 bg-white rounded-lg shadow-lg w-full">
            <StyledText className="text-black text-lg font-semibold">Antecedentes:</StyledText>
            <StyledText className="text-black mt-2">{JSON.stringify(apiResponse)}</StyledText>
          </StyledView>
        )}
      </StyledSafeAreaView>
      </StyledView>
    </ScrollView>
  );
};

export default Camara;
