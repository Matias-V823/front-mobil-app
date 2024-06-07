import React, { useState } from 'react';
import { Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity, Modal, TextInput, Pressable } from 'react-native';
import { styled } from 'nativewind';

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTextInput = styled(TextInput);

const criminals = [
  { name: 'Criminal 1', image: 'https://via.placeholder.com/150/CCCCCC/808080?text=Criminal+1', details: 'Detalles del criminal 1', category: 'Peligroso' },
  { name: 'Criminal 2', image: 'https://via.placeholder.com/150/CCCCCC/808080?text=Criminal+2', details: 'Detalles del criminal 2', category: 'Buscado Internacionalmente' },
  { name: 'Criminal 3', image: 'https://via.placeholder.com/150/CCCCCC/808080?text=Criminal+3', details: 'Detalles del criminal 3', category: 'Recompensa Alta' },
];

const Busqueda = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCriminal, setSelectedCriminal] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const handleCardPress = (criminal) => {
    setSelectedCriminal(criminal);
    setModalVisible(true);
  };

  const filteredCriminals = criminals.filter(criminal => 
    criminal.name.toLowerCase().includes(searchText.toLowerCase()) &&
    (filterCategory === '' || criminal.category === filterCategory)
  );

  return (
    <StyledSafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <StyledView className="p-4">
          <StyledText className="text-black text-4xl font-bold mt-4">Busqueda</StyledText>

          {/* Barra de Búsqueda */}
          <StyledTextInput
            className="bg-gray-200 p-3 rounded-lg mt-4 text-lg"
            placeholder="Buscar criminal..."
            value={searchText}
            onChangeText={setSearchText}
          />

          {/* Filtros */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mt-4">
            <TouchableOpacity onPress={() => setFilterCategory('')}>
              <StyledView className={`p-3 rounded-lg mr-2 ${filterCategory === '' ? 'bg-green-600' : 'bg-gray-200'}`}>
                <StyledText className={`font-bold ${filterCategory === '' ? 'text-white' : 'text-black'}`}>Todos</StyledText>
              </StyledView>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFilterCategory('Peligroso')}>
              <StyledView className={`p-3 rounded-lg mr-2 ${filterCategory === 'Peligroso' ? 'bg-green-600' : 'bg-gray-200'}`}>
                <StyledText className={`font-bold ${filterCategory === 'Peligroso' ? 'text-white' : 'text-black'}`}>Peligroso</StyledText>
              </StyledView>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFilterCategory('Buscado Internacionalmente')}>
              <StyledView className={`p-3 rounded-lg mr-2 ${filterCategory === 'Buscado Internacionalmente' ? 'bg-green-600' : 'bg-gray-200'}`}>
                <StyledText className={`font-bold ${filterCategory === 'Buscado Internacionalmente' ? 'text-white' : 'text-black'}`}>Buscado Internacionalmente</StyledText>
              </StyledView>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFilterCategory('Recompensa Alta')}>
              <StyledView className={`p-3 rounded-lg mr-2 ${filterCategory === 'Recompensa Alta' ? 'bg-green-600' : 'bg-gray-200'}`}>
                <StyledText className={`font-bold ${filterCategory === 'Recompensa Alta' ? 'text-white' : 'text-black'}`}>Recompensa Alta</StyledText>
              </StyledView>
            </TouchableOpacity>
          </ScrollView>

          <StyledText className="text-black text-2xl font-bold mt-6 mb-4">Criminales más Buscados</StyledText>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {filteredCriminals.map((criminal, index) => (
              <TouchableOpacity key={index} onPress={() => handleCardPress(criminal)}>
                <StyledView className="bg-gray-100 rounded-lg m-2" style={{ width: 180, overflow: 'hidden', borderRadius: 10 }}>
                  <StyledImage source={{ uri: criminal.image }} className="w-full" style={{ height: 150, width: '100%' }} />
                  <StyledView className="p-4 bg-green-600" style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                    <StyledText className="text-white text-lg font-bold">{criminal.name}</StyledText>
                    <StyledText className="text-white text-base">{criminal.details}</StyledText>
                  </StyledView>
                </StyledView>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <StyledText className="text-black text-2xl font-bold mt-6 mb-4">Criminales Recientes</StyledText>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {filteredCriminals.map((criminal, index) => (
              <TouchableOpacity key={index} onPress={() => handleCardPress(criminal)}>
                <StyledView className="bg-gray-100 rounded-lg m-2" style={{ width: 180, overflow: 'hidden', borderRadius: 10 }}>
                  <StyledImage source={{ uri: criminal.image }} className="w-full" style={{ height: 150, width: '100%' }} />
                  <StyledView className="p-4 bg-green-600" style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                    <StyledText className="text-white text-lg font-bold">{criminal.name}</StyledText>
                    <StyledText className="text-white text-base">{criminal.details}</StyledText>
                  </StyledView>
                </StyledView>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <StyledView className="flex-1 justify-center items-center">
              <StyledView className="bg-white rounded-lg p-6 w-3/4">
                {selectedCriminal && (
                  <>
                    <StyledText className="text-black text-2xl font-bold mb-4">{selectedCriminal.name}</StyledText>
                    <StyledImage source={{ uri: selectedCriminal.image }} className="w-full mb-4" style={{ height: 150, width: '100%' }} />
                    <StyledText className="text-gray-600 text-base">{selectedCriminal.details}</StyledText>
                    <StyledText className="text-gray-600 text-base mt-2">Categoría: {selectedCriminal.category}</StyledText>
                  </>
                )}
                <Pressable onPress={() => setModalVisible(false)}>
                  <StyledText className="text-green-600 font-bold mt-4">Cerrar</StyledText>
                </Pressable>
              </StyledView>
            </StyledView>
          </Modal>
        </StyledView>
      </ScrollView>
    </StyledSafeAreaView>
  );
};

export default Busqueda;


