import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button, ScrollView, FlatList, ActivityIndicator, Image} from 'react-native';
import {Map,Modal,Panel,Input,List} from './components';

export default function App() {
  const [puntos,setPuntos] = useState([])
  const [nombre,setNombre] = useState('')
  const [puntoTemp, setPuntoTemp] = useState({})
  const [visibility, setVisibility] = useState(false)
  const [visibilityFilter, setVisibilityFilter] = useState('newPunto') //newPunto o allPuntos
  const [mostrarPuntos,setMostrarPuntos] = useState(true)

  const handleLongPress = ({nativeEvent}) =>{
    setVisibilityFilter('newPunto')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = (text) =>{
    setNombre(text)
  }
  
  const handleAceptar = () =>{
    const newPunto = {coordinate:puntoTemp, name:nombre}
    setPuntos(puntos.concat(newPunto))
    setVisibility(false)
    setNombre('')
  }

  const handleCancelar = () =>{
    setVisibility(false)
    setNombre('')
  }

  const handleLista = () =>{
    setVisibilityFilter('allPuntos')
    setVisibility(true)
  }

  const handleMostrarOcultar = () =>{
    setMostrarPuntos(!mostrarPuntos)
  }

  return (
    <View style={styles.container}>
      <Map longPress={handleLongPress} puntos={puntos} mostrarPuntos={mostrarPuntos}/>
      <Panel 
        onPressLeft={handleLista} 
        textLeft='Lista' 
        onPressRight={handleMostrarOcultar} 
        textRight='Mostrar/Ocultar'/>
      <Modal visibility={visibility}>
        {visibilityFilter==='newPunto' ?
          <View style={styles.form}>            
            <Input title="Nombre" placeholder="Nombre del punto" onChangeText={handleChangeText}/>
            <Button title="Aceptar" onPress={handleAceptar} />
            <Button title="Cancelar" onPress={handleCancelar}/>
          </ View>
          :
          <List puntos={puntos} closeModal={()=> setVisibility(false)}/>
        }
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  form:{
    padding:15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});