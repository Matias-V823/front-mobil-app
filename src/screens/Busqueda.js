import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { styled } from 'nativewind';

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);
const styles = StyleSheet.create({
  criminalCard: {
    height: 248,
  }
});

const Busqueda = () => {
  return (
    <StyledSafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <StyledView className="p-4">
          <StyledText className="text-black text-3xl font-bold">Busqueda</StyledText>

          <StyledText className="text-black text-xl font-bold mt-4">Criminales más Buscados</StyledText>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mt-4">
            <StyledView className="bg-gray-100 p-4 rounded-lg w-60 mr-4" style={styles.criminalCard}>
              <StyledText className="text-gray-600">Criminal 1</StyledText>
            </StyledView>
            <StyledView className="bg-gray-100 p-4 rounded-lg w-60 mr-4" style={styles.criminalCard}>
              <StyledText className="text-gray-600">Criminal 2</StyledText>
            </StyledView>
            <StyledView className="bg-gray-100 p-4 rounded-lg w-60 mr-4" style={styles.criminalCard}>
              <StyledText className="text-gray-600">Criminal 3</StyledText>
            </StyledView>
          {/* Agrega más vistas de criminales aquí */}
          </ScrollView>

          <StyledText className="text-black text-xl font-bold mt-6">Criminales Recientes</StyledText>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mt-4">
            <StyledView className="bg-gray-100 p-4 rounded-lg w-60 mr-4" style={styles.criminalCard}>
              <StyledText className="text-gray-600">Criminal 1</StyledText>
            </StyledView>
            <StyledView className="bg-gray-100 p-4 rounded-lg w-60 mr-4" style={styles.criminalCard}>
              <StyledText className="text-gray-600">Criminal 2</StyledText>
            </StyledView>
            <StyledView className="bg-gray-100 p-4 rounded-lg w-60 mr-4" style={styles.criminalCard}>
              <StyledText className="text-gray-600">Criminal 3</StyledText>
            </StyledView>
          {/* Agrega más vistas de criminales aquí */}
          </ScrollView>
          
        </StyledView>
      </ScrollView>
    </StyledSafeAreaView>
  );
};

export default Busqueda;
