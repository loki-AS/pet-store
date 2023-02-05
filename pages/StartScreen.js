import React from 'react';
import {View, Text, Touchable, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import Background from './Background';

const StartScreen = ({ navigation }) => {
  return (
    <Background>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{alignItems: 'center' }}>
        <Text style={styles.heading}>takee</Text>
      </View>

      <View style={{
        top:"50%",
        alignItems:'center'
      }}>
        <Text style={styles.heading}>Happiness is closer</Text>
        <Text style={styles.heading2}>than you think</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.replace("Home")}><Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Let's Go!</Text></TouchableOpacity>
      </View>
    </Background>
  );
};

export default StartScreen

const styles = StyleSheet.create({
  heading:{
    marginTop:50,
    fontSize:30,
    fontWeight:'bold',
    color: 'white'
  },
  heading2:{
    fontSize:30,
    fontWeight:'bold',
    color: 'white',
  },
  button:{
    backgroundColor:"#F2968F",
    color: 'white',
    width:"80%",
    alignItems:"center",
    paddingHorizontal:4,
    paddingVertical:15,
    borderRadius:20,
    marginTop:5
  }
});