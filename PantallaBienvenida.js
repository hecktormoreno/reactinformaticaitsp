// PantallaBienvenida.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function PantallaBienvenida({ navigation }) {
  const handleComenzar = () => {
    navigation.navigate('Formulario');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenido a la aplicación</Text>
      <Button title="Comenzar" onPress={handleComenzar} />
    </View>
  );
}
