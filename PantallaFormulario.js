// PantallaFormulario.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function PantallaFormulario({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleNext = () => {
    navigation.navigate('Resumen', { nombre, email, mensaje });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Nombre:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={text => setNombre(text)}
        value={nombre}
      />
      <Text>Email:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <Text>Mensaje:</Text>
      <TextInput
        style={{ height: 100, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={text => setMensaje(text)}
        value={mensaje}
        multiline={true}
      />
      <Button title="Siguiente" onPress={handleNext} />
    </View>
  );
}
