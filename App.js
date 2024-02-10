// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PantallaBienvenida from './PantallaBienvenida';
import PantallaFormulario from './PantallaFormulario';
import PantallaResumen from './PantallaResumen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Bienvenida">
        <Stack.Screen name="Bienvenida" component={PantallaBienvenida} />
        <Stack.Screen name="Formulario" component={PantallaFormulario} />
        <Stack.Screen name="Resumen" component={PantallaResumen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
