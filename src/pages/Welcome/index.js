import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <View style={Styles.containerLogo}>
        <Animatable.Image 
          animation='flipInY'
          source={require('../../assets/logo.png')}
          style={{ width: '100%' }}
          resizeMode='contain'
        />
      </View>

      <Animatable.View animation="fadeInUp" delay={600} style={Styles.containerForm}>
        <Text style={Styles.title}>Monitore, organize seus gastos de qualquer lugar!</Text>
        <Text style={Styles.text}>Faça o login para começar</Text>
        <TouchableOpacity 
        style={Styles.button}
        onPress={() => navigation.navigate('SignIn')}
        >  
          <Text style={Styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#38a69D',
  },
  containerLogo:{
    flex:2,
    backgroundColor: '#38a69D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm:{
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title:{
    fontSize: 24, 
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text:{
    color: '#A1A1A1',
  },
  button:{
    position: 'absolute',
    backgroundColor: '#38a69D',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:{
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  }
})