import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function ContactPage(){
  return (

    <View style={estilos.container}>
      <View style={estilos.header}>

      <Text style={estilos.title}>Contactos</Text>
      <Text>Veja a sua lista de contactos registrados</Text>
      </View>
      <View>
        <TextInput/>
      </View>
      </View>
  );
}

const estilos = StyleSheet.create(
  {
    container: {
      flex: 1,
     
      backgroundColor: '#1daae1',
      textColor: 'white'
    },
    header: {
      padding: 14,
      gap: 8
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    descricao: {
      fontWeight: 'light',

    }
  }
);