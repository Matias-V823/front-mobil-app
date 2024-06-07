import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, KeyboardAvoidingView, Platform, TouchableOpacity, ActivityIndicator, Alert, Image } from 'react-native';
import { styled } from 'nativewind';
import { SafeAreaView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { RAPIDAPI_KEY } from '@env';  // Importa la variable de entorno

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledImage = styled(Image);

const Chatbot = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const flatListRef = useRef();
  const quickResponses = ["Hola", "¿Cómo estás?", "Cuéntame más", "Gracias"];

  useEffect(() => {
    if (messages.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const handleSend = async (text = inputText) => {
    if (text.trim()) {
      const userMessage = { key: String(messages.length), text, sender: 'user', time: new Date().toLocaleTimeString() };
      setMessages([...messages, userMessage]);
      setIsTyping(true);
      setInputText('');

      try {
        const response = await fetch('https://cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'x-rapidapi-key': RAPIDAPI_KEY,  // Usa la variable de entorno
            'x-rapidapi-host': 'cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            messages: [
              {
                role: 'user',
                content: text
              }
            ],
            model: 'gpt-4-turbo-2024-04-09',
            max_tokens: 100,
            temperature: 0.9
          }),
        });
        const data = await response.json();
        const botMessage = { key: String(messages.length + 1), text: data.choices[0].message.content, sender: 'bot', time: new Date().toLocaleTimeString() };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Error fetching chatbot response:', error);
        const errorMessage = { key: String(messages.length + 1), text: 'Error al obtener la respuesta del bot.', sender: 'bot', time: new Date().toLocaleTimeString() };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
        Alert.alert('Error', 'Error al obtener la respuesta del bot.');
      } finally {
        setIsTyping(false);
      }
    }
  };

  const renderItem = ({ item }) => {
    const isUser = item.sender === 'user';
    return (
      <StyledView className={`my-1 p-2 rounded-2xl ${isUser ? 'bg-green-100 self-end' : 'bg-gray-100 self-start'}`}>
        <StyledView className={`flex-row items-center ${isUser ? 'justify-end' : ''}`}>
          {!isUser && (
            <StyledImage
              source={{ uri: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Bot' }}
              className="w-6 h-6 rounded-full mr-2"
            />
          )}
          <StyledText className="text-black text-sm">{item.text}</StyledText>
          {isUser && (
            <StyledImage
              source={{ uri: 'https://via.placeholder.com/150/0000FF/808080?text=User' }}
              className="w-6 h-6 rounded-full ml-2"
            />
          )}
        </StyledView>
        <StyledText className="text-gray-500 text-xs mt-1 self-end">{item.time}</StyledText>
      </StyledView>
    );
  };

  return (
    <StyledSafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={80}
      >
        <StyledView className="flex-1 p-4">
          <StyledText className="text-black text-4xl font-bold mt-2">Crimibot</StyledText>
          <StyledView className="flex-1 mt-4">
            <FlatList
              ref={flatListRef}
              data={messages}
              renderItem={renderItem}
              keyExtractor={(item) => item.key}
              contentContainerStyle={{ paddingBottom: 20 }}
            />
            {isTyping && (
              <StyledView className="flex-row items-center mt-2">
                <ActivityIndicator size="small" color="#00ff00" />
                <StyledText className="text-gray-500 ml-2">El bot está escribiendo...</StyledText>
              </StyledView>
            )}
          </StyledView>
          <StyledView className="flex-row justify-around">
            {quickResponses.map((response, index) => (
              <StyledTouchableOpacity
                key={index}
                className="bg-white border border-green-500 p-2 rounded-lg"
                onPress={() => handleSend(response)}
              >
                <StyledText className="text-green-500 text-sm">{response}</StyledText>
              </StyledTouchableOpacity>
            ))}
          </StyledView>
          <StyledView className="flex-row items-center mt-4">
            <StyledTextInput
              className="flex-1 border border-gray-300 rounded p-4 mr-4"
              placeholder="Escribe un mensaje..."
              value={inputText}
              onChangeText={setInputText}
            />
            <StyledTouchableOpacity className="w-10 h-10 bg-green-600 rounded-full items-center justify-center" onPress={() => handleSend()}>
              <Feather name="arrow-right-circle" size={24} color="white" />
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>
      </KeyboardAvoidingView>
    </StyledSafeAreaView>
  );
};

export default Chatbot;
