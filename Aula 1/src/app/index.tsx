import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { ListaUsuarios } from "../../utils/contactList";
import { MaterialIcons } from '@expo/vector-icons'; 

export default function ContactPage() {
  return (
    <View style={estilos.container}>
      
      
      <View style={estilos.header}>
        <Text style={estilos.title}>Contactos</Text>
        <Text style={estilos.descricao}>Veja a sua lista de contactos registrados</Text>
        <Text style={estilos.contador}>Total: {ListaUsuarios.length}</Text>
      </View>
 
      <View style={estilos.searchContainer}>
        <TextInput 
          placeholder='Pesquise aqui' 
          placeholderTextColor="#b0b0b0" 
          style={estilos.input}
        />
        <TouchableOpacity style={estilos.butaoSearch}>
          <MaterialIcons name="search" size={24} color="#fafafa" />
        </TouchableOpacity>
      </View>

 
      <FlatList
        data={ListaUsuarios}
        keyExtractor={(item) => item.numero.toString()} // Boa prática no React Native
        renderItem={({ item }) => (
          <TouchableOpacity style={estilos.item_contacto}>
            <Image style={estilos.foto_perfil} source={item.imagem} />   
            <View style={estilos.info_contacto}>
              <Text style={estilos.nome_contacto}>{item.nome}</Text>
              <Text style={estilos.numero_telefone}>{item.numero}</Text>
            </View>     
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 100 }} // Garante que o último item não fica tapado pelo botão flutuante
      />

     
      <TouchableOpacity style={estilos.butaoAdd}>
        <MaterialIcons name="add" size={32} color="#fafafa" />
      </TouchableOpacity>

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bacad0',
    padding: 20,
    paddingTop: 50  
  },
  header: {
    marginBottom: 20,
    gap: 4
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a'
  },
  descricao: {
    fontSize: 14,
    color: '#4a4a4a'
  },
  contador: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2e3d42'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 10
  },
  input: {
    flex: 1,
    height: 48,  
    backgroundColor: '#676767',
    borderRadius: 24,
    paddingHorizontal: 16,
    color: 'white',
    fontSize: 16
  },
  butaoSearch: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#5474d7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  item_contacto: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#8c8b8b59',  
    marginBottom: 10,
    borderRadius: 12,
    padding: 12,
  },
  info_contacto: {
    flex: 1,
    justifyContent: 'center'
  },
  nome_contacto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a'
  },
  numero_telefone: {
    fontSize: 14,
    color: '#444',
    marginTop: 2
  },
  foto_perfil: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  butaoAdd: {
    position: 'absolute',  
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#5474d7',
    justifyContent: 'center',  
    alignItems: 'center',     
    elevation: 5,            
    shadowColor: '#000',       
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3
  }
});
