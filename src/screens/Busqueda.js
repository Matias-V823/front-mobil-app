import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { styled } from 'nativewind';

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);

const styles = StyleSheet.create({
  criminalCard: {
    height: 248,
  },
});

const Busqueda = () => {
  const [apiResponse, setApiResponse] = useState(null);

  const getPersonaBuscada = async () => {
    try {
      const response = await fetch('https://wpcpsvb9-8000.brs.devtunnels.ms/carabinero/personas_buscadas/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'APIKEY': 'YTLgVcBWwf26/ksEXu8T9UerRI9k5reMix9N0XLH8oQ=',
        },
      });

      const json = await response.json();
      setApiResponse(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getPersonaBuscada();
  }, []);

  return (
    <StyledSafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <StyledView className="p-4">
          <StyledText className="text-black text-3xl font-bold">Busqueda</StyledText>

          <StyledText className="text-black text-xl font-bold mt-4">Criminales más Buscados</StyledText>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mt-4">
            <StyledView className="bg-gray-100 p-4 rounded-lg w-60 mr-4" style={styles.criminalCard}>
                <StyledText className="text-black">
                  
                  Criminal 1 = {apiResponse ? apiResponse.Datos[0].personaConAntecedentes.persona.nombre : null}
                </StyledText>

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