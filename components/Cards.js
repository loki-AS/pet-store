import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';


const Cards = ({ name, age, breed, image, onPress }) => {

  return (
    <TouchableOpacity onPress={onPress} style={{marginVertical:10, backgroundColor:"#F1F5F9", borderRadius:20, paddingVertical:5}}>
      <View style={{position:"relative", bottom:4}}>
      <Image 
      source={image}
      />
      <View style={{position:"absolute", top:5, left:10, backgroundColor:"#e1e1e140", borderRadius:20, paddingHorizontal:4, paddingVertical:4,}}>
      <TouchableOpacity>
      <MaterialIcons name="favorite-outline" size={24} color="white" />
      </TouchableOpacity>
      </View>
      </View>
      <View style={{paddingHorizontal:5}}> 
      <View style={{flexDirection:"row", justifyContent:"space-between", paddingVertical:3}}>
        <Text style={{fontSize:15, textTransform:"capitalize"}}>{name}</Text>
        <Text style={{color:"gray"}}>{age}</Text>
      </View>
      <View>
        <Text style={{color:"gray", paddingVertical:3}}>{breed}</Text>
      </View>
      </View>
    </TouchableOpacity>
  )
}

export default Cards

const styles = StyleSheet.create({})