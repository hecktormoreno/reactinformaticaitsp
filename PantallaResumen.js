// PantallaResumen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function PantallaResumen({ route, navigation }) {
  const { nombre, email, mensaje } = route.params;

  const handleEnviar = () => {
    // Aquí podrías enviar los datos a tu servidor o hacer lo que necesites
    // Una vez que se envían los datos, podrías navegar a la pantalla de éxito o a cualquier otra pantalla.
    // Por simplicidad, aquí solo navegamos de nuevo a la pantalla anterior.
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Resumen del formulario:</Text>
      <Text>Nombre: {nombre}</Text>
      <Text>Email: {email}</Text>
      <Text>Mensaje: {mensaje}</Text>
      <Button title="Enviar" onPress={handleEnviar} />
    </View>
  );
}
