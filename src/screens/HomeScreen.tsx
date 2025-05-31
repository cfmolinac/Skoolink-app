import React, { useState } from 'react';
import { View, Text, FlatList, Image, Dimensions, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

// Simulación de anuncios (puedes reemplazar esto por datos desde una API o repositorio)
const anuncios = [
  { id: '1', imagen: 'https://via.placeholder.com/350x150?text=Anuncio+1', titulo: 'Anuncio 1' },
  { id: '2', imagen: 'https://via.placeholder.com/350x150?text=Anuncio+2', titulo: 'Anuncio 2' },
  { id: '3', imagen: 'https://via.placeholder.com/350x150?text=Anuncio+3', titulo: 'Anuncio 3' },
];

const HomeScreen = () => {
  // Simulación de nombre de usuario (puedes traerlo de contexto o props)
  const [nombre] = useState('Cristobal');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.saludoContainer}>
        <Text style={styles.saludo}>Hola {nombre}! </Text>
        <Text style={styles.saludo}>Bienvenido a Skoolink</Text>
      </View>
      <FlatList
        data={anuncios}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.bannerContainer}>
            {item.imagen ? (
              <Image
                source={{ uri: item.imagen }}
                style={styles.banner}
                resizeMode="cover"
              />
            ) : (
              <View style={[styles.banner, styles.banner]}>
                <Text style={styles.bannerTitulo}>{item.titulo}</Text>
              </View>
            )}
            {!item.imagen && (
              // Si no hay imagen, el texto ya está dentro del View azul
              null
            )}
            {item.imagen && (
              // Si hay imagen, muestra el texto sobre la imagen (opcional)
              <View style={styles.textOverlay}>
                <Text style={styles.bannerTitulo}>{item.titulo}</Text>
              </View>
            )}
          </View>
        )}
        style={styles.carrusel}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA', paddingTop: 16 },
  saludoContainer: {
    marginHorizontal: 16,
    marginBottom: 8,
    marginTop: 10,
  },
  saludo: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#515564',
    textAlign: 'left',
  },
  carrusel: { flexGrow: 0 },
  bannerContainer: { 
    width: width - 32, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginHorizontal: 16,
    marginBottom: 0, // quita margen extra
  },
  banner: {
    width: width - 64,
    height: 150,
    borderRadius: 16,
    backgroundColor: '#1976D2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerTitulo: { 
    fontSize: 22, 
    color: '#fff', 
    fontWeight: 'bold', 
    textAlign: 'center',
  },
  textOverlay: {
    position: 'absolute',
    width: width - 64,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#abbf5f',
  },
});

export default HomeScreen;